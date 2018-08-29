var custom = require('./custom-library');
custom.log(5, 10);

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
