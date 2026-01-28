import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración
const config = {
  width: 1600,
  height: 900,
  quality: 85,
  fit: 'cover', // 'cover' recorta, 'contain' mantiene todo, 'fill' estira
  position: 'centre'
};

// Obtener argumentos
const inputPath = process.argv[2];
const outputName = process.argv[3] || 'project.webp';

if (!inputPath) {
  console.error('❌ Uso: node scripts/resize-image.js <ruta-imagen-original> [nombre-salida.webp]');
  console.log('\nEjemplo:');
  console.log('  node scripts/resize-image.js ~/Desktop/mi-imagen.png garagegest.webp');
  process.exit(1);
}

const outputPath = join(__dirname, '..', 'public', 'projects', outputName);

// Verificar que existe el archivo de entrada
if (!existsSync(inputPath)) {
  console.error(`❌ No se encontró el archivo: ${inputPath}`);
  process.exit(1);
}

console.log(`📸 Redimensionando imagen...`);
console.log(`   Entrada: ${inputPath}`);
console.log(`   Salida: ${outputPath}`);
console.log(`   Tamaño: ${config.width}×${config.height}px`);
console.log(`   Formato: WebP (calidad ${config.quality}%)\n`);

try {
  await sharp(inputPath)
    .resize(config.width, config.height, {
      fit: config.fit,
      position: config.position
    })
    .webp({ quality: config.quality })
    .toFile(outputPath);
  
  console.log(`✅ ¡Imagen procesada exitosamente!`);
  console.log(`   Guardada en: ${outputPath}\n`);
} catch (error) {
  console.error('❌ Error al procesar la imagen:', error.message);
  process.exit(1);
}
