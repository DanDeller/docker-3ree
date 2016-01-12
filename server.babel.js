// only ES5 is allowed in this file
require('babel-core/register')({
  presets: ['react', 'es2015', 'stage-0'], // required for 'import'
});

// Load Server Setup
require('./server.js');
