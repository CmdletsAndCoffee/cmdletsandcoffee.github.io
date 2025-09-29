# Scripts

This directory contains utility scripts for the project.

## `sluggify.mjs`

This script is used to ensure that all blog post filenames are URL-friendly "slugs".

### What it does

- It scans the `src/data/blog` directory.
- It finds any filenames that contain spaces or uppercase letters.
- It renames them to be lowercase and to use hyphens instead of spaces. For example, `My New Post.mdx` would be renamed to `my-new-post.mdx`.

### Why it's needed

Astro generates page URLs from the filenames of your content. Filenames with spaces or special characters can lead to broken links or errors. This script enforces a consistent, URL-safe naming convention.

### How to use it

You can run the script from the root of the project using pnpm:

```bash
pnpm sluggify
```

It's recommended to run this after adding new blog post files.
