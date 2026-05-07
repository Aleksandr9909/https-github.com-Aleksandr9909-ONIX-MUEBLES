const Jimp = require('jimp');

async function processImage() {
    try {
        console.log("Loading image...");
        const image = await Jimp.read("images/onyx-logo-new.jpg");
        
        console.log("Autocropping...");
        // This will crop away the white border based on the top-left pixel
        image.autocrop(false); 
        
        console.log("Removing white background...");
        // Make white pixels transparent
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            // If pixel is very close to white
            if (r > 230 && g > 230 && b > 230) {
                // Set alpha to 0
                this.bitmap.data[idx + 3] = 0;
            } else if (r > 200 && g > 200 && b > 200) {
                // Anti-aliasing edges - make them partially transparent
                const opacity = (255 - r) / 55; // 0 to 1
                this.bitmap.data[idx + 3] = Math.floor(opacity * 255);
            }
        });
        
        console.log("Saving...");
        await image.writeAsync("images/onyx-logo-new.png");
        console.log("Done!");
    } catch (e) {
        console.error(e);
    }
}

processImage();
