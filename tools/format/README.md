# tools/format

Developer tool for formatting files or checking whether they are formatted.

This is just a wrapper around [aspect_rules_format].

## Important commands

- `bazel run //tools/format` to format all files
- `bazel run //tools/format -- FILE1 FILE2` to format particular files
- `bazel run //tools/format -- --mode check` to check whether all files are formatted

[aspect_rules_format]: https://github.com/aspect-build/bazel-super-formatter 
