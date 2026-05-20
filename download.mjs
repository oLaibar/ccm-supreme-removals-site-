import fs from 'fs';
import https from 'https';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

await download('https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg', 'public/images/google-g-logo.svg');
await download('https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', 'public/images/google-2015-logo.svg');
console.log('Downloaded');
