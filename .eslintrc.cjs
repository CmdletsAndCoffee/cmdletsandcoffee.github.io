module.exports = {
    // ...
    extends: [
        "eslint:recommended",
        "plugin:astro/recommended",
    ],
    // ...
    overrides: [
        {
            // Define the configuration for `.astro` file.
            files: ["*.astro"],
            // ...
        },
    ],
};
