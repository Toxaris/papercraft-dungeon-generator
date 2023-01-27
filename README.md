# Generator for papercraft dungeon tiles

## Development Guide

There are developer tools in the [tools] directory:

- [tools/format] for formatting files or checking whether they are formatted

### NPM dependencies

NPM dependencies are declared with version ranges in `package.json` and then repeated without version ranges in `BUILD.bazel`. To reflect changes in `package.json` or to set up your editor or other local tooling, run

```
tools/pnpm install
```

in the repository root. It will do the following things:

- resolve version ranges and transitive dependencies, reading and if necessary writing `pnpm-lock.yaml`
- install dependencies into `node_modules` folders in the source tree, to be used by your editor and other local tooling

Bazel will pick up the dependencies from `pnpm-lock.yaml` and install them again for `bazel build`, `bazel test`, and `bazel run` commands.

[tools]: tools
[tools/format]: tools/format
