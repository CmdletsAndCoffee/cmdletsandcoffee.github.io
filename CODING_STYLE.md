# Cmdlets and Coffee Coding Style Guide

This document outlines the coding style and best practices for the Cmdlets and Coffee website project. Following these guidelines helps ensure a consistent, readable, and maintainable codebase.

## General Principles

- **Clarity over cleverness:** Write code that is easy to understand, even if it's not the most compact or "clever" solution. The goal is to make the code as self-documenting as possible.

- **Consistency is key:** Strive for consistency with the existing codebase. If a file uses a different style, follow that style within that file.

- **Single Responsibility Principle:** Functions, classes, and components should be focused on a single task. If a function is doing too many things, consider breaking it down into smaller, more manageable parts.

- **Fail fast:** Write code that handles potential errors and fails gracefully.

## Astro SSG (Frontend)

- **Component Naming:** Use `PascalCase` for all Astro and React component files and names (e.g., `Header.astro`, `UserCard.jsx`).

- **Props:** Use explicit props with clear names. Destructure props at the beginning of the component (e.g., `const { title, description } = Astro.props;`).

- **Styling:** Prefer using CSS or Tailwind classes within a `<style>` block in `.astro` components. Use separate `.css` files for global styles only.

- **JavaScript/TypeScript:**
  - Use `let` or `const` instead of `var`.

  - Use arrow functions (`=>`) where appropriate for a more concise syntax.

  - Use `async/await` for handling asynchronous operations instead of `.then()`.

## PowerShell (Backend/Scripts)

- **Cmdlet Naming:** Use the `Verb-Noun` convention for all functions (e.g., `Get-WebsiteData`, `Set-FilePermissions`).

- **Variable Naming:** Use `PascalCase` for variables (e.g., `$WebsiteUrl`, `$UserDirectory`). Avoid using aliases and shorthand in production code.

- **Parameter Blocks:** Use a `param()` block at the top of a function to define all parameters. Use `[CmdletBinding()]` for advanced features like `SupportsShouldProcess` and `ConfirmImpact`.

- **Comments:** Use block comments (`<# ... #>`) for help text on functions and inline comments (`#`) for explaining complex logic.

- **Pipeline:** Prefer using the PowerShell pipeline (`|`) for data flow instead of temporary variables where possible.

## Naming Conventions (General)

- **All variables, functions, and constants:** Use `PascalCase` for all variables, functions, and constants (e.g., `UserName`, `CalculateTotal`, `MaxAttempts`).

- **Boolean variables:** Prefix boolean variables with `Is`, `Has`, or `Can` to make their purpose clear (e.g., `IsLoggedIn`, `HasPermission`).

- **Classes and components:** Use `PascalCase` for class and component names (e.g., `UserCard`, `AuthService`).

## Formatting and Spacing

- **Indentation:** Use **2 spaces** for indentation. Avoid using tabs.

- **Line length:** Keep lines of code under **120 characters** to improve readability on most screens.

- **Braces:** Use **One True Brace Style (OTBS)**, where the opening brace is on the same line as the statement. Use braces for all control structures (e.g., `if`, `for`, `while`), even for single-line statements.

- **Whitespace:**
  - Use spaces around operators (e.g., `x = 5 + y`).

  - Use a space after commas in lists and function arguments (e.g., `MyFunction(Arg1, Arg2)`).

  - Do not use spaces inside parentheses (e.g., `MyFunction(Arg)`).

## Comments and Documentation

- **Document complex code:** Write comments to explain **why** code is doing something, not just **what** it's doing.

- **Public API:** All public functions, classes, and components should have documentation explaining their purpose, arguments, and return values.

- **`TODO` and `FIXME`:** Use these tags to highlight areas that need attention. Include your name, the date, and a clear explanation of what needs to be done (e.g., `// TODO: [Your Name] 2023-10-26: Refactor this function for better performance.`).

## Best Practices

- **Avoid "magic numbers" and strings:** Use named constants or variables instead of hardcoded numbers and strings to make the code more maintainable and easier to read.

- **Imports:** Keep imports at the top of the file and group them logically (e.g., standard library, third-party libraries, local files).

- **Review your own code:** Before submitting a pull request, review your changes to ensure they adhere to these guidelines and the overall style of the project.

- **Debugging and Testing:** When debugging, always use the appropriate development environment unless you are specifically testing production-only features. This prevents tracking elements from polluting production metrics.

- **Error Handling:** When handling errors, be descriptive in your messages so the next engineer or administrator can quickly diagnose the problem. Log errors with as much detail as possible, including variable values and a clear, concise message.

- **Configuration over Hard-coding:** Store configuration details (like API keys, file paths, or server names) in a separate, secure file. Do not hard-code these values directly into the script. This makes the code more portable and easier to manage in different environments.

- **Idempotence:** Design scripts and functions to be idempotent, meaning running them multiple times produces the same result as running them once. This is crucial for automation and scripting, as it prevents unintended side effects if a script is run again.

## Version Control (Git)

- **Commit Messages:** Write clear and descriptive commit messages. The first line should be a short summary (50 characters or less), followed by a blank line and a more detailed explanation if necessary. Explain the "what" and the "why" of your changes.

- **Branching:** Our team will use the **Git Flow** branching model to manage releases and features. This is a structured approach that defines a strict branching model to keep our code organized.
  - **`main`**: This branch is always in a production-ready state. Commits here represent a new version of the website.

  - **`develop`**: This is the main branch for development. All new features and fixes are merged into `develop` before being promoted to `main`.

  - **`feature/`**: Create a new branch for every new feature or change. Branch from `develop` and merge back into `develop` when the work is complete.

  - **`release/`**: When preparing for a new release, a `release/` branch is created from `develop`. This branch is used for final bug fixes and minor tweaks, and is then merged into both `main` and `develop`.

  - **`hotfix/`**: If a critical bug is found in production, a `hotfix/` branch is created from `main`. This allows us to quickly fix the issue and merge it back into both `main` and `develop` without disrupting ongoing development.

- **Pull Requests:** Use Pull Requests (PRs) to propose changes to the `develop` or `main` branches. A PR is a great opportunity for a peer review, which helps catch bugs and improve code quality. Clearly describe the changes in your PR description.

- **Small, Atomic Commits:** Each commit should represent a single, logical change. Avoid bundling multiple unrelated changes into one commit. This makes it easier to track the history of the project and revert changes if something goes wrong.
