#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Helper script to replace images in the team.svg file
 * 
 * Usage:
 * 
 * node replace-svg-images.js <image-id> <path-to-new-image>
 * 
 * Example:
 * node replace-svg-images.js image0_715_2910 ./new-team-member.png
 */

function imageToBase64(imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64String = imageBuffer.toString('base64');
    const mimeType = path.extname(imagePath).toLowerCase() === '.png' ? 'png' : 'jpeg';
    return `data:image/${mimeType};base64,${base64String}`;
  } catch (error) {
    console.error('Error reading image file:', error.message);
    return null;
  }
}

function replaceSvgImage(svgPath, imageId, newImagePath) {
  try {
    // Read the SVG file
    let svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // Convert new image to base64
    const newImageData = imageToBase64(newImagePath);
    if (!newImageData) {
      return false;
    }
    
    // Find and replace the image data
    const imagePattern = new RegExp(
      `(<image id="${imageId}"[^>]*xlink:href=")data:image/[^;]+;base64,[^"]*(")`
    );
    
    if (!imagePattern.test(svgContent)) {
      console.error(`Image ID "${imageId}" not found in SVG file`);
      return false;
    }
    
    svgContent = svgContent.replace(imagePattern, `$1${newImageData}$2`);
    
    // Write back to file
    fs.writeFileSync(svgPath, svgContent);
    console.log(`Successfully replaced ${imageId} with ${newImagePath}`);
    return true;
    
  } catch (error) {
    console.error('Error processing SVG file:', error.message);
    return false;
  }
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length !== 2) {
    console.log('Usage: node replace-svg-images.js <image-id> <path-to-new-image>');
    console.log('');
    console.log('Available image IDs:');
    console.log('  image0_715_2910, image1_715_2910, image2_715_2910, ..., image11_715_2910');
    console.log('');
    console.log('Example:');
    console.log('  node replace-svg-images.js image0_715_2910 ./assets/new-member.png');
    process.exit(1);
  }
  
  const [imageId, imagePath] = args;
  const svgPath = './public/assets/images/join/team.svg';
  
  if (!fs.existsSync(imagePath)) {
    console.error(`Image file not found: ${imagePath}`);
    process.exit(1);
  }
  
  if (!fs.existsSync(svgPath)) {
    console.error(`SVG file not found: ${svgPath}`);
    process.exit(1);
  }
  
  const success = replaceSvgImage(svgPath, imageId, imagePath);
  process.exit(success ? 0 : 1);
}

module.exports = { replaceSvgImage, imageToBase64 };
