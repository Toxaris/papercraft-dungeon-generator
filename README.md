# Generator for papercraft dungeon tiles

## Development Guide

- after changing any `package.json`, run `bazel run @pnpm//:pnpm -- install --dir "$PWD" --lockfile-only` in the repo root to update the `pnpm-lock.yaml`