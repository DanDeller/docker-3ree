// only ES5 is allowed in this file
require('babel-core/register')({
  presets: ['es2015'], // required for 'import'
});

// Persistence Layer
require('./dbSetup');
