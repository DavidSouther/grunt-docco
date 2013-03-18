// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

"use strict";
var docco = require('docco');

module.exports = function(grunt) {
  grunt.registerMultiTask('docco', 'Docco processor.', function() {
    docco.document(this.options({ args: this.filesSrc }), this.async());
  });
};
