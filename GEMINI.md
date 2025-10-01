# Gemini Agent Instructions

This file provides context and instructions for the Gemini agent to effectively assist with tasks in this repository.

## Project Overview

This is a blog website built with the [Astro](https://astro.build/) framework. The content is written in Markdown and MDX, and the styling is done with Tailwind CSS. The project uses `pnpm` as its package manager.

## Coding Style

When making changes, please adhere to the coding style guidelines from `CODING_STYLE.md`. The project uses **Prettier**, **ESLint**, and **editorconfig** to enforce a consistent style.

- **Package Manager:**
  - Use `pnpm` for all package management tasks.

- **Naming Conventions:**
  - **Astro/React Components:** `PascalCase` (e.g., `UserCard.astro`).
  - **TypeScript/JavaScript:**
    - Variables and functions: `camelCase` (e.g., `myVariable`, `calculateTotal`).
    - Classes: `PascalCase` (e.g., `AuthService`).
  - **PowerShell:**
    - Cmdlets: `Verb-Noun` (e.g., `Get-WebsiteData`).
    - Variables: `PascalCase` (e.g., `$WebsiteUrl`).
  - **Booleans:** Prefix with `is`, `has`, or `can` (e.g., `isLoggedIn`).

- **Formatting:**
  - **Indentation:** 2 spaces.
  - **Line length:** 120 characters.
  - **Braces:** One True Brace Style (OTBS).
  - Run `pnpm run format` to automatically format files.

- **Comments:**
  - Explain the **why** behind the code, not just the **what**.

## Important Commands

- **`pnpm run dev`**: Starts the development server. Also runs `build:themes` first.
- **`pnpm run build`**: Builds the website for production. Runs `astro check` first.
- **`pnpm run check`**: Runs Astro's diagnostic checks.
- **`pnpm run lint`**: Runs Prettier, ESLint, and Astro checks.
- **`pnpm run format`**: Formats all files with Prettier.
- **`pnpm run fix`**: Formats files and automatically fixes ESLint errors.

## Project Details

- **Astro Integrations:**
  - `@astrojs/mdx`: For rendering MDX pages and components.
  - `@astrojs/tailwind`: For Tailwind CSS integration.
  - `@astrojs/sitemap`: For automatically generating a sitemap.
  - `astro-robots-txt`: For generating a `robots.txt` file.
  - `astro-icon`: For using icons from various icon sets.
- **Available Icon Sets:**
  - `eos-icons`: [EOS Icons](https://eos-icons.com/)
  - `ri`: [Remix Icon](https://remixicon.com/)

## File Structure

- **`src/`**: Contains the main source code for the website.
  - **`components/`**: Reusable Astro components.
  - **`data/`**: Data files, including blog posts in `src/data/blog/`.
  - **`layouts/`**: Astro layouts for different page types.
  - **`pages/`**: Astro pages, which define the routes of the website.
- **`public/`**: Static assets like images and fonts.
- **`astro.config.mjs`**: The main configuration file for Astro.
- **`tailwind.config.mjs`**: The configuration file for Tailwind CSS.
