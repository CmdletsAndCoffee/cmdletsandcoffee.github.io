# Cmdlets & Coffee ☕️

**Your daily brew for professional automation.**

[![Deploy Astro site to Pages](https://github.com/CmdletsAndCoffee/cmdletsandcoffee.github.io/actions/workflows/astro.yml/badge.svg)](https://github.com/CmdletsAndCoffee/cmdletsandcoffee.github.io/actions/workflows/astro.yml)

Welcome to the official source code for the **Cmdlets and Coffee** podcast and blog\! This repository is where we brew all of our website content and share the full recipe for every script and tutorial from the show.

---

## What's Inside?

This site is built with **Astro**, a fantastic tool for building content-focused websites. Here you'll find all the ingredients you need:

- **Website Source:** The complete codebase for the `cmdletsandcoffee.gihhub.io` website.
- **Blog Posts:** The source Markdown files for every article and show note.
- **Code Examples:** All the scripts and code snippets discussed on the podcast, ready for you to explore and use.

---

## Get Started

Ready to grab a cup and start scripting?

- **Listen to the Podcast:** Find the latest episodes and subscribe.
- **Visit the Blog:** Read the show notes, transcripts, and bonus tutorials.
- **Join the Community:** Ask questions and suggest topics in our official [Discussions repository](https://github.com/orgs/CmdletsAndCoffee/discussions).

---

## Brewing Locally

Want to get the site running on your own machine? It's as easy as pouring yourself a fresh cup.

### Prerequisites

Make sure you have **Node.js** and a package manager like **pnpm** installed. If you prefer npm or yarn, you can use them instead.

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/CmdletsAndCoffee/cmdletsandcoffee.github.io.git
   cd cmdletsandcoffee.github.io
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   ```

### Development & Testing

Once your dependencies are installed, you're ready to start brewing\!

1. **Start the development server:**

   ```sh
   pnpm run dev
   ```

   This command starts a local server with live reloading, so your changes will appear instantly in your browser at `http://localhost:4321`.

2. **Build for production:**

   ```sh
   pnpm run build
   ```

   This will compile all your Astro files into a set of static assets ready for deployment. The finished files will be located in the `dist/` directory.

3. **Run a production preview:**

   ```bash
   pnpm run preview
   ```

   If you want to see exactly what the production site will look like before deploying, this command will run a local server for the built files.
