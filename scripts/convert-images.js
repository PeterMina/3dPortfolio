import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  const files = await imagemin(['src/assets/*.{jpg,png}'], {
    destination: 'src/assets',
    plugins: [
      imageminWebp({
        quality: 80,
        method: 6
      })
    ]
  });

  console.log('Images optimized:');
  files.forEach(file => console.log(`✓ ${file.destinationPath}`));
})();
