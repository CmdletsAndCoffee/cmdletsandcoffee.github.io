import fs from "fs";
import path from "path";
import slug from "slug";

const blogDir = path.join(process.cwd(), "src/data/blog");

console.log(`Scanning for files in: ${blogDir}`);

fs.readdir(blogDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file) => {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);

    // Check if the basename needs sluggifying (contains spaces or uppercase letters)
    if (basename.includes(" ") || basename !== basename.toLowerCase()) {
      const newBasename = slug(basename);
      const newFile = newBasename + ext;
      const oldPath = path.join(blogDir, file);
      const newPath = path.join(blogDir, newFile);

      if (file !== newFile) {
        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            console.error(`Error renaming file: ${file}`, err);
          } else {
            console.log(`Renamed: ${file} -> ${newFile}`);
          }
        });
      }
    }
  });
});
