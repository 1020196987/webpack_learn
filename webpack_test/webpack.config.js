const path = require('path');
console.log('aaa')
console.log(__dirname)
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    }
};
