const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/js/script.js'],
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'main.min.js',
  },
  mode: 'development',
};
