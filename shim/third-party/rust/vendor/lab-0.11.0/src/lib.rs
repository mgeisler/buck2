#![doc(html_root_url = "https://docs.rs/lab")]

/*!

# Lab

Tools for converting RGB colors to L\*a\*b\* measurements.

RGB colors, for this crate at least, are considered to be composed of `u8`
values from 0 to 255, while L\*a\*b\* colors are represented by its own struct
that uses `f32` values.

# Usage

## Converting single values

To convert a single value, use one of the functions

* `lab::Lab::from_rgb(rgb: &[u8; 3]) -> Lab`
* `lab::Lab::from_rgba(rgba: &[u8; 4]) -> Lab` (drops the fourth alpha byte)
* `lab::Lab::to_rgb(&self) -> [u8; 3]`

```rust
extern crate lab;
use lab::Lab;

let pink_in_lab = Lab::from_rgb(&[253, 120, 138]);
// Lab { l: 66.639084, a: 52.251457, b: 14.860654 }
```

## Converting multiple values

To convert slices of values

* `lab::rgbs_to_labs(rgbs: &[[u8; 3]]) -> Vec<Lab>`
* `lab::labs_to_rgbs(labs: &[Lab]) -> Vec<[u8; 3]>`
* `lab::rgb_bytes_to_labs(bytes: &[u8]) -> Vec<Lab>`
* `lab::labs_to_rgb_bytes(labs: &[Lab]) -> Vec<u8>`

```rust
extern crate lab;
use lab::rgbs_to_labs;

let rgbs = vec![
    [0xFF, 0x69, 0xB6],
    [0xE7, 0x00, 0x00],
    [0xFF, 0x8C, 0x00],
    [0xFF, 0xEF, 0x00],
    [0x00, 0x81, 0x1F],
    [0x00, 0xC1, 0xC1],
    [0x00, 0x44, 0xFF],
    [0x76, 0x00, 0x89],
];

let labs = rgbs_to_labs(&rgbs);
```

```rust
extern crate lab;
use lab::rgb_bytes_to_labs;

let rgbs = vec![
    0xFF, 0x69, 0xB6,
    0xE7, 0x00, 0x00,
    0xFF, 0x8C, 0x00,
    0xFF, 0xEF, 0x00,
    0x00, 0x81, 0x1F,
    0x00, 0xC1, 0xC1,
    0x00, 0x44, 0xFF,
    0x76, 0x00, 0x89,
];

let labs = rgb_bytes_to_labs(&rgbs);
```

These functions will use x86_64 AVX2 instructions if compiled to a supported target.

## Minimum Rust version

Lab 0.7.0 requires Rust >= 1.31.0 for the [chunks_exact](https://doc.rust-lang.org/std/primitive.slice.html#method.chunks_exact) slice method

*/

#[cfg(test)]
#[macro_use]
extern crate pretty_assertions;
#[cfg(test)]
extern crate approx;
#[cfg(test)]
extern crate lazy_static;
#[cfg(test)]
extern crate rand;

#[cfg(test)]
mod approx_impl;

#[cfg(all(target_arch = "x86_64", target_feature = "avx2"))]
mod simd;

/// Struct representing a color in CIALab, a.k.a. L\*a\*b\*, color space
#[derive(Debug, PartialEq, Copy, Clone, Default)]
pub struct Lab {
    pub l: f32,
    pub a: f32,
    pub b: f32,
}

/// Struct representing a color in cylindrical CIELCh color space
#[derive(Debug, PartialEq, Copy, Clone, Default)]
pub struct LCh {
    pub l: f32,
    pub c: f32,
    pub h: f32,
}

// κ and ε parameters used in conversion between XYZ and La*b*.  See
// http://www.brucelindbloom.com/LContinuity.html for explanation as to why
// those are different values than those provided by CIE standard.
pub(crate) const KAPPA: f32 = 24389.0 / 27.0;
pub(crate) const EPSILON: f32 = 216.0 / 24389.0;
pub(crate) const CBRT_EPSILON: f32 = 6.0 / 29.0;

// S₀ and E₀ thresholds used in sRGB gamma.  The latter is scaled for encoded
// value in the range 0..255.
pub(crate) const S_0: f32 = 0.003130668442500564;
pub(crate) const E_0_255: f32 = 3294.6 * S_0;

// Generated by srgb-matrices.py
const WHITE_X: f32 = 0.9504492182750991;
const WHITE_Z: f32 = 1.0889166484304715;

fn rgb_to_lab(r: u8, g: u8, b: u8) -> Lab {
    xyz_to_lab(rgb_to_xyz(r, g, b))
}

fn rgb_to_xyz(r: u8, g: u8, b: u8) -> [f32; 3] {
    rgb_to_xyz_inner(r as f32, g as f32, b as f32)
}

fn rgb_to_xyz_normalized(rgb: &[f32; 3]) -> [f32; 3] {
    rgb_to_xyz_inner(rgb[0] * 255.0, rgb[1] * 255.0, rgb[2] * 255.0)
}

#[inline(always)]
#[cfg(any(target_feature = "fma", test))]
fn mul3(a0: f32, a1: f32, a2: f32, b0: f32, b1: f32, b2: f32) -> f32 {
    a2.mul_add(b2, a1.mul_add(b1, a0 * b0))
}

#[inline(always)]
#[cfg(not(any(target_feature = "fma", test)))]
fn mul3(a0: f32, a1: f32, a2: f32, b0: f32, b1: f32, b2: f32) -> f32 {
    a0 * b0 + a1 * b1 + a2 * b2
}

#[inline]
fn rgb_to_xyz_inner(r: f32, g: f32, b: f32) -> [f32; 3] {
    #[inline]
    fn rgb_to_xyz_map(c: f32) -> f32 {
        if c > E_0_255 {
            const A: f32 = 0.055 * 255.0;
            const D: f32 = 1.055 * 255.0;
            ((c + A) / D).powf(2.4)
        } else {
            const D: f32 = 12.92 * 255.0;
            c / D
        }
    }

    let r = rgb_to_xyz_map(r);
    let g = rgb_to_xyz_map(g);
    let b = rgb_to_xyz_map(b);

    // Generated by srgb-matrices.py
    let x = mul3(
        r,
        g,
        b,
        0.4124108464885388,
        0.3575845678529519,
        0.18045380393360833,
    );
    let y = mul3(
        r,
        g,
        b,
        0.21264934272065283,
        0.7151691357059038,
        0.07218152157344333,
    );
    let z = mul3(
        r,
        g,
        b,
        0.019331758429150258,
        0.11919485595098397,
        0.9503900340503373,
    );

    [x, y, z]
}

fn xyz_to_lab(xyz: [f32; 3]) -> Lab {
    #[inline]
    fn xyz_to_lab_map(c: f32) -> f32 {
        if c > EPSILON {
            c.powf(1.0 / 3.0)
        } else {
            (KAPPA * c + 16.0) / 116.0
        }
    }

    // It’s tempting to replace the division with a multiplication by inverse,
    // however that results in slightly worse test_grey_error benchmark.
    let x = xyz_to_lab_map(xyz[0] / WHITE_X);
    let y = xyz_to_lab_map(xyz[1]);
    let z = xyz_to_lab_map(xyz[2] / WHITE_Z);

    Lab {
        l: (116.0 * y) - 16.0,
        a: 500.0 * (x - y),
        b: 200.0 * (y - z),
    }
}

fn lab_to_xyz(lab: &Lab) -> [f32; 3] {
    let fy = (lab.l + 16.0) / 116.0;
    let fx = (lab.a / 500.0) + fy;
    let fz = fy - (lab.b / 200.0);
    let xr = if fx > CBRT_EPSILON {
        fx.powi(3)
    } else {
        ((fx * 116.0) - 16.0) / KAPPA
    };
    let yr = if lab.l > EPSILON * KAPPA {
        fy.powi(3)
    } else {
        lab.l / KAPPA
    };
    let zr = if fz > CBRT_EPSILON {
        fz.powi(3)
    } else {
        ((fz * 116.0) - 16.0) / KAPPA
    };

    [xr * WHITE_X, yr, zr * WHITE_Z]
}

fn xyz_to_rgb(xyz: [f32; 3]) -> [u8; 3] {
    let rgb = xyz_to_rgb_normalized(xyz);
    [
        (rgb[0] * 255.0).round() as u8,
        (rgb[1] * 255.0).round() as u8,
        (rgb[2] * 255.0).round() as u8,
    ]
}

fn xyz_to_rgb_normalized(xyz: [f32; 3]) -> [f32; 3] {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];

    // Generated by srgb-matrices.py
    let r = mul3(
        x,
        y,
        z,
        3.240812398895283,
        -1.5373084456298136,
        -0.4985865229069666,
    );
    let g = mul3(
        x,
        y,
        z,
        -0.9692430170086407,
        1.8759663029085742,
        0.04155503085668564,
    );
    let b = mul3(
        x,
        y,
        z,
        0.055638398436112804,
        -0.20400746093241362,
        1.0571295702861434,
    );

    #[inline]
    fn xyz_to_rgb_map(c: f32) -> f32 {
        (if c > S_0 {
            1.055 * c.powf(1.0 / 2.4) - 0.055
        } else {
            12.92 * c
        })
        .min(1.0)
        .max(0.0)
    }

    [xyz_to_rgb_map(r), xyz_to_rgb_map(g), xyz_to_rgb_map(b)]
}

/// Convenience function to map a slice of RGB values to Lab values in serial
///
/// # Example
/// ```
/// # extern crate lab;
/// # use lab::{Lab, rgbs_to_labs};
/// let rgbs = &[[255u8, 0, 0], [255, 0, 255], [0, 255, 255]];
/// let labs = lab::rgbs_to_labs(rgbs);
/// assert_eq!(labs, vec![
///     Lab { l: 53.238235, a: 80.09231, b: 67.202095 },
///     Lab { l: 60.322693, a: 98.23698, b: -60.827957 },
///     Lab { l: 91.11428, a: -48.08274, b: -14.12958 }
/// ]);
/// ```
#[inline]
pub fn rgbs_to_labs(rgbs: &[[u8; 3]]) -> Vec<Lab> {
    #[cfg(all(target_arch = "x86_64", target_feature = "avx2"))]
    let labs = simd::rgbs_to_labs(rgbs);

    #[cfg(not(all(target_arch = "x86_64", target_feature = "avx2")))]
    let labs = __scalar::rgbs_to_labs(rgbs);

    labs
}

/// RGB to Lab conversion that operates on a flat `&[u8]` of consecutive RGB triples.
///
/// # Example
/// ```
/// # extern crate lab;
/// # use lab::{Lab, rgb_bytes_to_labs};
/// let rgbs = &[255u8, 0, 0, 255, 0, 255, 0, 255, 255];
/// let labs = lab::rgb_bytes_to_labs(rgbs);
/// assert_eq!(labs, vec![
///     Lab { l: 53.238235, a: 80.09231, b: 67.202095 },
///     Lab { l: 60.322693, a: 98.23698, b: -60.827957 },
///     Lab { l: 91.11428, a: -48.08274, b: -14.12958 }
/// ]);
/// ```
pub fn rgb_bytes_to_labs(bytes: &[u8]) -> Vec<Lab> {
    #[cfg(all(target_arch = "x86_64", target_feature = "avx2"))]
    let labs = simd::rgb_bytes_to_labs(bytes);

    #[cfg(not(all(target_arch = "x86_64", target_feature = "avx2")))]
    let labs = __scalar::rgb_bytes_to_labs(bytes);

    labs
}

/// Convenience function to map a slice of Lab values to RGB values in serial
///
/// # Example
/// ```
/// # extern crate lab;
/// # use lab::{Lab, labs_to_rgbs};
/// let labs = &[
///     Lab { l: 91.11321, a: -48.08751, b: -14.131201 },
///     Lab { l: 60.32421, a: 98.23433, b: -60.824894 },
///     Lab { l: 97.13926, a: -21.553724, b: 94.47797 },
/// ];
/// let rgbs = lab::labs_to_rgbs(labs);
/// assert_eq!(rgbs, vec![[0u8, 255, 255], [255, 0, 255], [255, 255, 0]]);
/// ```
#[inline]
pub fn labs_to_rgbs(labs: &[Lab]) -> Vec<[u8; 3]> {
    #[cfg(all(target_arch = "x86_64", target_feature = "avx2"))]
    let rgbs = simd::labs_to_rgbs(labs);

    #[cfg(not(all(target_arch = "x86_64", target_feature = "avx2")))]
    let rgbs = __scalar::labs_to_rgbs(labs);

    rgbs
}

/// Lab to RGB conversion that returns RGB triples flattened into a `Vec<u8>`
///
/// # Example
/// ```
/// # extern crate lab;
/// # use lab::{Lab, labs_to_rgb_bytes};
/// let labs = &[
///     Lab { l: 91.11321, a: -48.08751, b: -14.131201 },
///     Lab { l: 60.32421, a: 98.23433, b: -60.824894 },
///     Lab { l: 97.13926, a: -21.553724, b: 94.47797 },
/// ];
/// let rgb_bytes = lab::labs_to_rgb_bytes(labs);
/// assert_eq!(rgb_bytes, vec![0, 255, 255, 255, 0, 255, 255, 255, 0]);
/// ```
#[inline]
pub fn labs_to_rgb_bytes(labs: &[Lab]) -> Vec<u8> {
    #[cfg(all(target_arch = "x86_64", target_feature = "avx2"))]
    let bytes = simd::labs_to_rgb_bytes(labs);

    #[cfg(not(all(target_arch = "x86_64", target_feature = "avx2")))]
    let bytes = __scalar::labs_to_rgb_bytes(labs);

    bytes
}

#[doc(hidden)]
pub mod __scalar {
    use rgb_to_lab;
    use Lab;

    #[inline]
    pub fn labs_to_rgbs(labs: &[Lab]) -> Vec<[u8; 3]> {
        labs.iter().map(Lab::to_rgb).collect()
    }

    #[inline]
    pub fn labs_to_rgb_bytes(labs: &[Lab]) -> Vec<u8> {
        labs.iter()
            .map(Lab::to_rgb)
            .fold(Vec::with_capacity(labs.len() * 3), |mut acc, rgb| {
                acc.extend_from_slice(&rgb);
                acc
            })
    }

    #[inline]
    pub fn rgbs_to_labs(rgbs: &[[u8; 3]]) -> Vec<Lab> {
        rgbs.iter().map(Lab::from_rgb).collect()
    }

    #[inline]
    pub fn rgb_bytes_to_labs(bytes: &[u8]) -> Vec<Lab> {
        bytes
            .chunks_exact(3)
            .map(|rgb| rgb_to_lab(rgb[0], rgb[1], rgb[2]))
            .collect()
    }
}

impl Lab {
    /// Constructs a new `Lab` from a three-element array of `u8`s
    ///
    /// # Examples
    ///
    /// ```
    /// let lab = lab::Lab::from_rgb(&[240, 33, 95]);
    /// assert_eq!(lab::Lab { l: 52.334686, a: 75.55157, b: 19.995684 }, lab);
    /// ```
    pub fn from_rgb(rgb: &[u8; 3]) -> Self {
        rgb_to_lab(rgb[0], rgb[1], rgb[2])
    }

    #[doc(hidden)]
    pub fn from_rgb_normalized(rgb: &[f32; 3]) -> Self {
        xyz_to_lab(rgb_to_xyz_normalized(rgb))
    }

    /// Constructs a new `Lab` from a four-element array of `u8`s
    ///
    /// The `Lab` struct does not store alpha channel information, so the last
    /// `u8` representing alpha is discarded. This convenience method exists
    /// in order to easily measure colors already stored in an RGBA array.
    ///
    /// # Examples
    ///
    /// ```
    /// let lab = lab::Lab::from_rgba(&[240, 33, 95, 255]);
    /// assert_eq!(lab::Lab { l: 52.334686, a: 75.55157, b: 19.995684 }, lab);
    /// ```
    pub fn from_rgba(rgba: &[u8; 4]) -> Self {
        Lab::from_rgb(&[rgba[0], rgba[1], rgba[2]])
    }

    #[doc(hidden)]
    pub fn from_rgba_normalized(rgba: &[f32; 4]) -> Self {
        Lab::from_rgb_normalized(&[rgba[0], rgba[1], rgba[2]])
    }

    /// Returns the `Lab`'s color in RGB, in a 3-element array.
    ///
    /// # Examples
    ///
    /// ```
    /// let lab = lab::Lab { l: 52.330193, a: 75.56704, b: 19.989174 };
    /// let rgb = lab.to_rgb();
    /// assert_eq!([240, 33, 95], rgb);
    /// ```
    pub fn to_rgb(&self) -> [u8; 3] {
        xyz_to_rgb(lab_to_xyz(self))
    }

    #[doc(hidden)]
    pub fn to_rgb_normalized(&self) -> [f32; 3] {
        xyz_to_rgb_normalized(lab_to_xyz(self))
    }

    /// Measures the perceptual distance between the colors of one `Lab`
    /// and an `other`.
    ///
    /// # Examples
    ///
    /// ```
    /// # use lab::Lab;
    /// let pink = Lab { l: 66.6348, a: 52.260696, b: 14.850557 };
    /// let websafe_pink = Lab { l: 64.2116, a: 62.519463, b: 2.8871894 };
    /// assert_eq!(254.23636, pink.squared_distance(&websafe_pink));
    /// ```
    pub fn squared_distance(&self, other: &Lab) -> f32 {
        (self.l - other.l).powi(2) + (self.a - other.a).powi(2) + (self.b - other.b).powi(2)
    }
}

impl LCh {
    /// Constructs a new `LCh` from a three-element array of `u8`s
    ///
    /// # Examples
    ///
    /// ```
    /// let lch = lab::LCh::from_rgb(&[240, 33, 95]);
    /// assert_eq!(lab::LCh { l: 52.334686, c: 78.15284, h: 0.25873056 }, lch);
    /// ```
    pub fn from_rgb(rgb: &[u8; 3]) -> Self {
        LCh::from_lab(Lab::from_rgb(rgb))
    }

    /// Constructs a new `LCh` from a four-element array of `u8`s
    ///
    /// The `LCh` struct does not store alpha channel information, so the last
    /// `u8` representing alpha is discarded. This convenience method exists
    /// in order to easily measure colors already stored in an RGBA array.
    ///
    /// # Examples
    ///
    /// ```
    /// let lch = lab::LCh::from_rgba(&[240, 33, 95, 255]);
    /// assert_eq!(lab::LCh { l: 52.334686, c: 78.15284, h: 0.25873056 }, lch);
    /// ```
    pub fn from_rgba(rgba: &[u8; 4]) -> Self {
        LCh::from_lab(Lab::from_rgba(rgba))
    }

    /// Constructs a new `LCh` from a `Lab`
    ///
    /// # Examples
    ///
    /// ```
    /// let lab = lab::Lab { l: 52.33686, a: 75.5516, b: 19.998878 };
    /// let lch = lab::LCh::from_lab(lab);
    /// assert_eq!(lab::LCh { l: 52.33686, c: 78.15369, h: 0.25877 }, lch);
    ///
    /// let lab = lab::Lab { l: 52.33686, a: 0.0, b: 0.0 };
    /// let lch = lab::LCh::from_lab(lab);
    /// assert_eq!(lab::LCh { l: 52.33686, c: 0.0, h: 0.0 }, lch);
    /// ```
    pub fn from_lab(lab: Lab) -> Self {
        LCh {
            l: lab.l,
            c: lab.a.hypot(lab.b),
            h: lab.b.atan2(lab.a),
        }
    }

    /// Returns the `LCh`'s color in RGB, in a 3-element array
    ///
    /// # Examples
    ///
    /// ```
    /// let mut lch = lab::LCh { l: 52.33686, c: 78.15369, h: 0.25877 };
    /// assert_eq!([240, 33, 95], lch.to_rgb());
    ///
    /// lch.h += std::f32::consts::TAU;
    /// assert_eq!([240, 33, 95], lch.to_rgb());
    /// ```
    pub fn to_rgb(&self) -> [u8; 3] {
        self.to_lab().to_rgb()
    }

    /// Returns the `LCh`'s color in `Lab`
    ///
    /// Note that due to imprecision of floating point arithmetic, conversions
    /// between Lab and LCh are not stable.  A chain of Lab→LCh→Lab or
    /// LCh→Lab→LCh operations isn’t guaranteed to give back the source colour.
    ///
    /// # Examples
    ///
    /// ```
    /// let lch = lab::LCh { l: 52.33686, c: 78.15369, h: 0.25877 };
    /// let lab = lch.to_lab();
    /// assert_eq!(lab::Lab { l: 52.33686, a: 75.5516, b: 19.998878 }, lab);
    ///
    /// let lch = lab::LCh { l: 52.33686, c: 0.0, h: 0.25877 };
    /// let lab = lch.to_lab();
    /// assert_eq!(lab::Lab { l: 52.33686, a: 0.0, b: 0.0 }, lab);
    ///
    /// let inp = lab::Lab { l: 29.52658, a: 58.595745, b: -36.281406 };
    /// let lch = lab::LCh { l: 29.52658, c: 68.91881,  h: -0.5544043 };
    /// let out = lab::Lab { l: 29.52658, a: 58.59575,  b: -36.281406 };
    /// assert_eq!(lch, lab::LCh::from_lab(inp));
    /// assert_eq!(out, lch.to_lab());
    /// ```
    pub fn to_lab(&self) -> Lab {
        Lab {
            l: self.l,
            a: self.c * self.h.cos(),
            b: self.c * self.h.sin(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::{labs_to_rgbs, rgbs_to_labs, LCh, Lab};
    use approx::assert_relative_eq;
    use rand::Rng;

    const PINK: Lab = Lab {
        l: 66.637695,
        a: 52.250145,
        b: 14.858591,
    };

    #[rustfmt::skip]
    static COLOURS: [([u8; 3], Lab, LCh); 17] = [
        ([253, 120, 138],
         PINK,
         LCh { l: 66.637695, c: 54.321777, h: 0.2770602 }),

        ([127,   0,   0],
         Lab { l: 25.299877, a: 47.77421, b: 37.752514 },
         LCh { l: 25.299877, c: 60.890293, h: 0.66875386 }),
        ([  0, 127,   0],
         Lab { l: 45.87715, a: -51.405922, b: 49.61748 },
         LCh { l: 45.87715, c: 71.445526, h: 2.373896 }),
        ([  0,   0, 127],
         Lab { l: 12.809523, a: 47.237186, b: -64.33636 },
         LCh { l: 12.809523, c: 79.81553, h: -0.93746966 }),
        ([  0, 127, 127],
         Lab { l: 47.892532, a: -28.680845, b: -8.428156 },
         LCh { l: 47.892532, c: 29.893557, h: -2.8557782 }),
        ([127,   0, 127],
         Lab { l: 29.525677, a: 58.597298, b: -36.28323 },
         LCh { l: 29.525677, c: 68.92109, h: -0.554415 }),
        ([255,   0,   0],
         Lab { l: 53.238235, a: 80.09231, b: 67.202095 },
         LCh { l: 53.238235, c: 104.55094, h: 0.6981073 }),
        ([  0, 255,   0],
         Lab { l: 87.73554, a: -86.18078, b: 83.18251 },
         LCh { l: 87.73554, c: 119.776695, h: 2.373896 }),
        ([  0,   0, 255],
         Lab { l: 32.298466, a: 79.192, b: -107.858345 },
         LCh { l: 32.298466, c: 133.8088, h: -0.93746966 }),
        ([  0, 255, 255],
         Lab { l: 91.11428, a: -48.08274, b: -14.12958 },
         LCh { l: 91.11428, c: 50.115814, h: -2.8557787 }),
        ([255,   0, 255],
         Lab { l: 60.322693, a: 98.23698, b: -60.827957 },
         LCh { l: 60.322693, c: 115.544556, h: -0.55441487 }),
        ([255, 255,   0],
         Lab { l: 97.139, a: -21.556675, b: 94.48001 },
         LCh { l: 97.139, c: 96.90801, h: 1.7951176 }),

        ([  0,   0,   0],
         Lab { l: 0.0, a: 0.0, b: 0.0 },
         LCh { l: 0.0, c: 0.0, h: 0.0 }),
        ([ 64,  64,  64],
         Lab { l: 27.09341, a: 0.0, b: 0.0 },
         LCh { l: 27.09341, c: 0.0, h: 0.0 }),
        ([127, 127, 127],
         Lab { l: 53.192772, a: 0.0, b: 0.0 },
         LCh { l: 53.192772, c: 0.0, h: 0.0 }),
        ([196, 196, 196],
         Lab { l: 79.15698, a: 0.0, b: 0.0 },
         LCh { l: 79.15698, c: 0.0, h: 0.0 }),
        ([255, 255, 255],
         Lab { l: 100.0, a: 0.0, b: 0.0 },
         LCh { l: 100.0, c: 0.0, h: 0.0 }),
    ];

    #[test]
    fn test_lab_from_rgb() {
        let expected: Vec<_> = COLOURS.iter().map(|(_, lab, _)| *lab).collect();
        let actual: Vec<_> = COLOURS
            .iter()
            .map(|(rgb, _, _)| Lab::from_rgb(rgb))
            .collect();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_lab_to_rgb() {
        let expected: Vec<_> = COLOURS.iter().map(|(rgb, _, _)| *rgb).collect();
        let actual: Vec<_> = COLOURS.iter().map(|(_, lab, _)| lab.to_rgb()).collect();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_lch_from_rgb() {
        let expected: Vec<_> = COLOURS.iter().map(|(_, _, lch)| *lch).collect();
        let actual: Vec<_> = COLOURS
            .iter()
            .map(|(rgb, _, _)| LCh::from_rgb(rgb))
            .collect();
        assert_relative_eq!(expected.as_slice(), actual.as_slice());
    }

    #[test]
    fn test_lch_to_rgb() {
        let expected: Vec<_> = COLOURS.iter().map(|(rgb, _, _)| *rgb).collect();
        let actual: Vec<_> = COLOURS.iter().map(|(_, _, lch)| lch.to_rgb()).collect();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_lch_from_lab() {
        let expected: Vec<_> = COLOURS.iter().map(|(_, _, lch)| *lch).collect();
        let actual: Vec<_> = COLOURS
            .iter()
            .map(|(_, lab, _)| LCh::from_lab(*lab))
            .collect();
        assert_relative_eq!(expected.as_slice(), actual.as_slice());
    }

    #[test]
    fn test_lch_to_lab() {
        let mut expected: Vec<_> = COLOURS.iter().map(|(_, lab, _)| *lab).collect();
        let mut actual: Vec<_> = COLOURS.iter().map(|(_, _, lch)| lch.to_lab()).collect();

        // Floating point arithmetic is hard.  Due to accumulation of errors (or
        // perhaps imprecision of trig functions) the Lab→LCh→Lab conversion
        // produces slightly different colour than what the source.  Round a*
        // and b* to four decimal places to work around this.
        fn round(vec: &mut Vec<Lab>) {
            for lab in vec.iter_mut() {
                lab.a = (lab.a * 100000.0).round() / 100000.0;
                lab.b = (lab.b * 100000.0).round() / 100000.0;
            }
        }
        round(&mut expected);
        round(&mut actual);

        assert_eq!(expected, actual);
    }

    #[test]
    fn test_distance() {
        let ugly_websafe_pink = Lab {
            l: 64.2116,
            a: 62.519463,
            b: 2.8871894,
        };
        assert_eq!(254.65927, PINK.squared_distance(&ugly_websafe_pink));
    }

    #[test]
    fn test_send() {
        fn assert_send<T: Send>() {}
        assert_send::<Lab>();
    }

    #[test]
    fn test_sync() {
        fn assert_sync<T: Sync>() {}
        assert_sync::<Lab>();
    }

    #[test]
    fn test_rgb_to_lab_to_rgb() {
        let rgbs: Vec<[u8; 3]> = {
            let rand_seed = [1u8; 32];
            let rng: rand::rngs::StdRng = rand::SeedableRng::from_seed(rand_seed);
            rng.sample_iter(&rand::distributions::Standard)
                .take(2048)
                .collect()
        };
        let labs = rgbs_to_labs(&rgbs);
        let rgbs2 = labs_to_rgbs(&labs);
        assert_eq!(rgbs2, rgbs);
    }

    #[test]
    fn test_grey_error() {
        // Grey colours have a* and b* components equal to zero.  This test goes
        // through all 8-bit greys and calculates squared error.  If it goes up,
        // a change might have worsen the precision of the calculations.  If it
        // goes down, calculations got better.
        let mut error: f64 = 0.0;
        let mut count: usize = 0;
        for i in 0..=255_u32 {
            let lab = Lab::from_rgb(&[i as u8, i as u8, i as u8]);
            if lab.a != 0.0 || lab.b != 0.0 {
                error = (lab.a as f64).mul_add(lab.a as f64, error);
                error = (lab.b as f64).mul_add(lab.b as f64, error);
                count += 1;
            }
        }
        assert_eq!((23, 10.627054791711998), (count, error * 1e9));
    }
}
