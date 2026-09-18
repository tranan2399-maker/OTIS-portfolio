import fs from 'fs';
import path from 'path';

const srcDir = 'E:\\nháp\\New folder';
const destDir = 'src/assets/images/projects/my-art';

// Clean old files
const oldFiles = fs.readdirSync(destDir);
for (const file of oldFiles) {
  if (file.startsWith('b24-') && file.endsWith('.webp')) {
    fs.unlinkSync(path.join(destDir, file));
  }
}

// Copy new ones
const files = fs.readdirSync(srcDir);
let count = 1;
for (const file of files) {
  if (file.match(/\.(png|jpg|jpeg)$/i)) {
    const srcPath = path.join(srcDir, file);
    // Determine extension
    const ext = path.extname(file);
    const destPath = path.join(destDir, `b24-new-${count}${ext}`);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} -> b24-new-${count}${ext}`);
    count++;
  }
}
