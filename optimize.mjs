import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { execSync } from 'child_process';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const ffmpegPath = ffmpegInstaller.path;

const imagesDir = 'src/assets/images/projects/my-art';
const videosDir = 'src/assets/videos';

async function optimizeImages() {
  console.log('🖼️  Optimizing images...');
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg|svg)$/i) && !file.endsWith('.min.webp')) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, `${path.parse(file).name}.min.webp`);
      
      console.log(`Converting ${file}...`);
      try {
        // We set density to high for SVGs so they render sharply before conversion
        await sharp(inputPath, { density: 300 })
          .resize({ width: 1920, withoutEnlargement: true })
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
          
        const origSize = fs.statSync(inputPath).size / 1024;
        const newSize = fs.statSync(outputPath).size / 1024;
        console.log(`✅ ${file}: ${(origSize/1024).toFixed(2)}MB -> ${(newSize/1024).toFixed(2)}MB`);
      } catch (err) {
        console.error(`❌ Failed to convert ${file}:`, err.message);
      }
    }
  }
}

async function optimizeVideo() {
  console.log('\n🎬 Optimizing video...');
  const inputVideo = path.join(videosDir, 'b24-intro.mp4');
  const outputVideo = path.join(videosDir, 'b24-intro.min.mp4');
  
  if (fs.existsSync(inputVideo)) {
    try {
      console.log(`Compressing ${inputVideo}...`);
      // 720p, 24fps, crf 28 (very compressed but good enough for background), fast preset
      const cmd = `"${ffmpegPath}" -y -i "${inputVideo}" -vf "scale=-2:720" -r 24 -vcodec libx264 -crf 28 -preset fast -an "${outputVideo}"`;
      execSync(cmd, { stdio: 'inherit' });
      
      const origSize = fs.statSync(inputVideo).size / (1024 * 1024);
      const newSize = fs.statSync(outputVideo).size / (1024 * 1024);
      console.log(`✅ Video: ${origSize.toFixed(2)}MB -> ${newSize.toFixed(2)}MB`);
    } catch (err) {
      console.error(`❌ Failed to compress video:`, err.message);
    }
  }
}

async function run() {
  await optimizeImages();
  await optimizeVideo();
  console.log('\n✨ All optimizations complete!');
}

run();
