# Cmdlets & Coffee ☕️

**Your daily brew for professional automation.**

[![Deploy Astro site to Pages](https://github.com/CmdletsAndCoffee/cmdletsandcoffee.github.io/actions/workflows/astro.yml/badge.svg)](https://github.com/CmdletsAndCoffee/cmdletsandcoffee.github.io/actions/workflows/astro.yml)

Welcome to the official source code for the **Cmdlets and Coffee** podcast and blog! This repository is where we brew all of our website content and share the full recipe for every script and tutorial from the show.

---

## 🚀 Project Structure

This site is built with **Astro**, a fantastic tool for building content-focused websites. Here's a look at the project structure:

- **`src/`**: Contains the main source code for the website.
  - **`components/`**: Reusable Astro components.
  - **`data/`**: Data files, including blog posts in `data/blog/`.
  - **`layouts/`**: Astro layouts for different page types.
  - **`pages/`**: Astro pages, which define the routes of the website.
- **`public/`**: Static assets like images and fonts.
- **`astro.config.mjs`**: The main configuration file for Astro.
- **`tailwind.config.mjs`**: The configuration file for Tailwind CSS.

---

## 🛠️ Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |
| `pnpm run check`   | Run Astro's diagnostic checks                |

---

## 🤝 Contributing

We welcome contributions to **Cmdlets and Coffee**! If you'd like to contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes.**
4. **Submit a pull request** with a clear description of your changes.

Before contributing, please read our [**Coding Style Guide**](CODING_STYLE.md) to ensure your code is consistent with the project's standards.

### Adding a Blog Post

1.  **Create a new file** in the `src/data/blog/` directory. The filename should be a slugified version of your title (e.g., `my-awesome-post.mdx`).
2.  **Add the frontmatter** to the top of your post. It should include the following fields:
    - `cover`: An object with `src` (path to the cover image) and `alt` text.
    - `title`: The title of your post.
    - `subtitle`: A brief subtitle.
    - `description`: A short description for SEO purposes.
    - `category`: The primary category of the post.
    - `pubDatetime`: The publication date in `YYYY-MM-DD` format.
    - `tags`: An array of relevant tags.
    - `authorId`: The ID of the author (from `src/data/authors.ts`).
    - `isDraft`: Set to `true` if the post is not ready to be published.
3.  **Write your content** in Markdown or MDX format.
4.  **Add any images** to the `src/data/blog/images/` directory and reference them in your post.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE.md](LICENSE.md) file for details.
