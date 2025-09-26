# Gemini Agent Instructions

This file provides context and instructions for the Gemini agent to effectively assist with tasks in this repository.

## Project Overview

This is a blog website built with the [Astro](https://astro.build/) framework. The content is written in Markdown and MDX, and the styling is done with Tailwind CSS.

## Coding Style

When making changes, please adhere to the following coding style guidelines from the `CODING_STYLE.md` file:

- **Package Manager:**
  - Use `pnpm` for all package management tasks.

- **General:**
  - Prioritize clarity and consistency with the existing codebase.
  - Functions, classes, and components should have a single responsibility.

- **Naming Conventions:**
  - Use `PascalCase` for all variables, functions, constants, and components (e.g., `MyVariable`, `CalculateTotal`, `UserCard`).
  - Prefix boolean variables with `Is`, `Has`, or `Can` (e.g., `IsLoggedIn`).

- **Formatting:**
  - Use **2 spaces** for indentation.
  - Keep lines under **120 characters**.
  - Use **One True Brace Style (OTBS)**.

- **Astro/TypeScript:**
  - Use `PascalCase` for component names.
  - Destructure props at the beginning of the component.
  - Use `async/await` for asynchronous operations.

- **PowerShell:**
  - Use the `Verb-Noun` convention for cmdlets (e.g., `Get-WebsiteData`).
  - Use `PascalCase` for variables.

- **Comments:**
  - Explain the **why** behind the code, not just the **what**.

- **Git Commits:**
  - Write clear, descriptive commit messages with a short summary line (50 characters or less).
  - Follow the **Git Flow** branching model (`feature/`, `release/`, `hotfix/`).

## Commands

Here are the most important commands for this project:

- **`pnpm run dev`**: Starts the development server.
- **`pnpm run build`**: Builds the website for production.
- **`pnpm run check`**: Runs Astro's diagnostic checks.

## File Structure

- **`src/`**: Contains the main source code for the website.
  - **`components/`**: Reusable Astro components.
  - **`data/`**: Data files, including blog posts in `data/blog/`.
  - **`layouts/`**: Astro layouts for different page types.
  - **`pages/`**: Astro pages, which define the routes of the website.
- **`public/`**: Static assets like images and fonts.
- **`astro.config.mjs`**: The main configuration file for Astro.
- **`tailwind.config.mjs`**: The configuration file for Tailwind CSS.
