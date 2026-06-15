import fs from 'fs';
import path from 'path';

function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      content = content.replace(/https:\/\/ccmsupremeremovals\.co\.uk/g, 'https://www.ccmsupremeremovals.co.uk');
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

replaceInFiles('./src');
