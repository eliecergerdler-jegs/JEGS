import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const workspaceRoot = process.cwd();
const portfolioDir = path.join(workspaceRoot, 'public', 'Imagenes', 'Portfolio');
const ogImagePath = path.join(workspaceRoot, 'public', 'Imagenes', 'og-image-v1.png');

// Helper to convert filename to kebab-case
function toKebabCase(filename) {
  const ext = path.extname(filename);
  const name = path.basename(filename, ext);
  
  let cleanName = name
    .toLowerCase()
    // Replace '&' with 'and' or '-'
    .replace(/&/g, 'and')
    // Replace spaces, underscores, and special characters with hyphens
    .replace(/[\s_\W]+/g, '-')
    // Clean up multiple hyphens
    .replace(/-+/g, '-')
    // Trim leading/trailing hyphens
    .replace(/^-+|-+$/g, '');

  // Specific normalization for known files to match new names:
  // e.g., sapori_di_rachetta -> sapori-di-racchetta (with double c)
  cleanName = cleanName.replace('rachetta', 'racchetta');
  
  return cleanName + '.webp';
}

async function optimizeFolder(folderPath, maxWidth, label) {
  if (!fs.existsSync(folderPath)) {
    console.warn(`[WARN] Folder does not exist: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);
  console.log(`\nOptimizing ${label} folder: ${folderPath}`);
  console.log('----------------------------------------------------');

  for (const file of files) {
    if (path.extname(file).toLowerCase() !== '.png') {
      continue;
    }

    const inputFilePath = path.join(folderPath, file);
    const outputFileName = toKebabCase(file);
    const outputFilePath = path.join(folderPath, outputFileName);

    try {
      const statsBefore = fs.statSync(inputFilePath);
      const beforeKB = (statsBefore.size / 1024).toFixed(2);

      // Perform sharp optimization
      await sharp(inputFilePath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputFilePath);

      const statsAfter = fs.statSync(outputFilePath);
      const afterKB = (statsAfter.size / 1024).toFixed(2);
      const reduction = (((statsBefore.size - statsAfter.size) / statsBefore.size) * 100).toFixed(2);

      console.log(`[OK] ${file} (${beforeKB} KB) -> ${outputFileName} (${afterKB} KB) | Saved: ${reduction}%`);

      // Delete the original PNG file
      fs.unlinkSync(inputFilePath);
    } catch (err) {
      console.error(`[ERROR] Failed to process ${file}:`, err.message);
    }
  }
}

async function optimizeOgImage() {
  if (!fs.existsSync(ogImagePath)) {
    console.warn(`[WARN] OG Image not found at: ${ogImagePath}`);
    return;
  }

  console.log(`\nOptimizing OG Image: ${ogImagePath}`);
  console.log('----------------------------------------------------');

  try {
    const statsBefore = fs.statSync(ogImagePath);
    const beforeKB = (statsBefore.size / 1024).toFixed(2);

    const tempPath = ogImagePath + '.temp.png';

    // Optimize PNG: keep PNG format, apply compression level 9 and quality 80
    await sharp(ogImagePath)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(tempPath);

    // Overwrite the original
    fs.renameSync(tempPath, ogImagePath);

    const statsAfter = fs.statSync(ogImagePath);
    const afterKB = (statsAfter.size / 1024).toFixed(2);
    const reduction = (((statsBefore.size - statsAfter.size) / statsBefore.size) * 100).toFixed(2);

    console.log(`[OK] og-image-v1.png (${beforeKB} KB) -> Optimized PNG (${afterKB} KB) | Saved: ${reduction}%`);
  } catch (err) {
    console.error(`[ERROR] Failed to optimize OG Image:`, err.message);
  }
}

async function cleanUnusedPortfolioPngs() {
  console.log(`\nCleaning unused portfolio top-level PNGs...`);
  console.log('----------------------------------------------------');
  
  const files = fs.readdirSync(portfolioDir);
  for (const file of files) {
    if (path.extname(file).toLowerCase() === '.png') {
      const filePath = path.join(portfolioDir, file);
      try {
        fs.unlinkSync(filePath);
        console.log(`[DELETED] Unused file: ${file}`);
      } catch (err) {
        console.error(`[ERROR] Failed to delete ${file}:`, err.message);
      }
    }
  }
}

async function main() {
  console.log('Starting image optimization process...');
  
  // Optimize Cards_Home folder (max width 800px)
  await optimizeFolder(path.join(portfolioDir, 'Cards_Home'), 800, 'Cards_Home');

  // Optimize FullPages folder (max width 1400px)
  await optimizeFolder(path.join(portfolioDir, 'FullPages'), 1400, 'FullPages');

  // Optimize OG Image (keep PNG, target < 200 KB)
  await optimizeOgImage();

  // Clean the unused root portfolio files
  await cleanUnusedPortfolioPngs();

  console.log('\nImage optimization process finished!');
}

main().catch(err => {
  console.error('Fatal error running image optimization script:', err);
  process.exit(1);
});
