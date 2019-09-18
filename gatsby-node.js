'use strict';

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');

var fs = require('fs-extra')
var path = require('path')
console.log('Copy README.md')
fs.copySync(path.join(__dirname, '/README.md'), path.join(__dirname, '/public/README.md'))