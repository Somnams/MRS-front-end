const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.resolve(__dirname, 'index.txt'), { encoding: 'utf-8' });

const images = data.split(/<img.*src="([a-zA-Z0-9-/\\.?=: _]+)">/g);

const ans = images.filter(item => /^http/.test(item)).filter(item => /140$/.test(item));

fs.writeFileSync(
    path.resolve(__dirname, 'ans.txt'),
    `const IMAGES = ${JSON.stringify(ans, null, 2).replace(/"/g, '\'')};`,
    { encoding: 'utf-8' }
);
