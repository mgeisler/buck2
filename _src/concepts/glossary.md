---
id: glossary
title: Glossary of Terms
---

#### .buckconfig

The root of your [project](#project) must contain a configuration file named `.buckconfig`. Before executing, Buck2 reads this file to incorporate specified customizations. For more information, refer to the [Legacy docs](https://buck2.build/docs/legacy/files-and-directories/dot-buckconfig).

#### Action

An individual, cacheable, ideally hermetic command that's run during the [build](#build-file). It takes [artifacts](#artifact) as inputs and produces other artifacts as outputs. An example command could be `gcc -o main main.c`, which takes the artifact `main.c` (a source file) and produces the artifact called `main` (the compiled binary).

#### Action graph

The dependency graph of all [actions](#action) belonging to a target: it can be queried with `buck2 aquery`.

#### Artifact

A single input or output of an [action](#action). These are files that participate as inputs or outputs of a build and can be source files or build outputs. For more information, see the [Artifact API](https://buck2.build/docs/generated/native/Artifact/).

#### Attribute

Declared by a [rule](#rule) and used to express the properties of a particular instance of a rule to create a [target](#target). For example, srcs, deps and copts, which declare a target's source files, dependencies, and custom compiler options, respectively. The available attributes for a target depend on its rule type.

#### BUCK file

A `BUCK` file (the name is configurable, some projects use `TARGETS`) is the main configuration file that tells Buck2 what to build, what their dependencies are, and how to build them. Buck2 takes a `BUCK` file as input and evaluates the file to declare [targets](#target), which are then used to create a graph of dependencies and to derive the [actions](#action) that must be completed to build intermediate and final software outputs. A `BUCK` file marks a directory and any sub-directories not containing a `BUCK` file as a [package](#package).

#### BXL

BXL ([Buck eXtension Language](https://buck2.build/docs/developers/bxl)) scripts are written in [Starlark](https://github.com/bazelbuild/starlark), a restricted subset of Python, and give integrators the ability to inspect and interact directly with the buck2 graph. BXL scripts can query the [action graph](#action-graph), [configured graph](#configured-graph), and [unconfigured graph](#unconfigured-graph). They can also create [actions](#action) and trigger builds.

#### Cell

The directory tree of one or more Buck2 [packages](#package). A Buck2 build can involve multiple cells. The cell root always contains a [.buckconfig](#buckconfig), although the presence of a .buckconfig file doesn't in itself define a cell. Rather, the cells involved in a build are defined at the time Buck2 is invoked; they are specified in the .buckconfig for the Buck [project](#project).

#### Configuration

:::note
🚧   THIS SECTION IS UNDER CONSTRUCTION
:::

#### Daemon

The Daemon process lives between invocations and is designed to allow for cache reuse between Buck2 invocations, which can considerably speed up builds. For more information, see [Daemon (buckd)](daemon.md).

#### Dependency

A directed edge between two [targets](#target). A target `A` can have a dependency on target `B`, for example, if any `dep` attribute of `A` mentions `B`. A target's dependence on another target is determined by the [visibility](#visibility) of the latter.

#### Execution platform

A type of [rule](#rule) that includes information such as what execution types a [target](#target) supports, which can be [remote](#remote-execution-re), local, and [hybrid](#hybrid-execution) execution. Also, whether it supports cache uploads, which allows users to get cache hits for things that executed locally.

#### Hybrid execution

Enables shifting work to the local host when available parallelism in the build is low. This enables users to save on [remote execution](#remote-execution-re) roundtrips to enable faster builds.

#### Isolation dir

Instances of Buck2 share a [daemon](#daemon) if and only if their isolation directory is identical. The isolation directory also influences the output paths provided by Buck2.

#### Package

A directory that contains a Buck2 [build file](#build-file) and all [source files](#source-file) belonging to the same directory as the build file, or any of its subdirectories that do not contain a build file themselves.

#### Project

The Outermost directory where there is a [.buckconfig](#buckconfig): also known as the [root cell](#cell). The .buckconfig for the project specifies the [cells](#cell) that constitute the Buck2 project. Specifically, these cells are specified in the '[repositories]' section of the `.buckconfig`. All command invocations are executed from the project root.

#### Provider

Data returned from a [rule](#rule) function. It's the only way that information from this rule is available to other rules that depend on it (see [dependency](#dependency)). Every rule must return at least the `DefaultInfo` provider. A common case is to also return either `RunInfo` (because they are executable) or custom providers that the dependents rule can use. For more information, see [Providers](https://buck2.build/docs/rule_authors/writing_rules/#providers).

#### Remote execution (RE)

Distributed execution of [actions](#action) on remote workers. It can speed up builds significantly by scaling the nodes available for parallel actions, and by caching action outputs across Buck2 users.

#### Rule

A rule consists of an attribute spec and an implementation, which is a [Starlark](#starlark) function.

The attribute spec declares what attributes the rule expects to receive. The rule implementation receives the [attributes](#attribute) of a [target](#target) and the [providers](#provider) of its [dependencies](#dependency). It can declare new [actions](#action) and [artifacts](#artifact) and must return [providers](#provider) that can be used to pass data to its dependents or to Buck2 itself.

Rules are instantiated in [build files](#build-file) to declare targets and set their attributes. The rule implementation is called when Buck2 needs its providers, which can happen when the target is built, or when one of its dependents is.

As an example, the `cxx_binary` rule could be used to create a C++ binary, but `android_binary` rule would be used to create an Android APK

#### Source file

:::note
🚧   THIS SECTION IS UNDER CONSTRUCTION
:::

#### Starlark

:::note
🚧   THIS SECTION IS UNDER CONSTRUCTION
:::

#### Target

An object that is defined in a [build file](#build-file). Targets represent the buildable units of a build from the perspective of the end user. Declared by instantiating a [rule](#rule) with attributes. A target has [dependencies](#dependency), which are references to other targets.

#### Target label

The identifier for a [target](#target). Structured as `cellAlias//path/to/package:target`, where `cellAlias//` maps to a [cell root](#cell) path (as defined in the [./buckconfig](#buckconfig) of the cell this target belongs to), `path/to/package` is the [package](#package) directory that contains the [build file](#build-file) declaring the target (relative to the mapped cell alias), and `:target` is the target's name.

#### Target pattern

A string that resolves to a set of [targets](#target). They can be used as arguments to commands such as `buck2 build` and `buck2 uquery`. They can also be used in the [visibility](#visibility) argument of a [rule](#rule). For more information, see [Target pattern](./target_pattern.md).

#### Transition

Allows the [configuration](#configuration) to change across a [dependency](#dependency) edge. That is, normally, if [target](#target) A depends on target B, then if the configuration for A is X, then B is configured using X too. By using a transition, you can produce X to configure B instead.

#### Unconfigured graph

A graph of [targets](#target) before [configurations](#configuration) are applied. Can be queried via `buck2 uquery`.

#### Visibility

Determines whether a [target](#target) can include another [target](#target) as its [dependency](#dependency). For more information, see [Visibility](./visibility.md).