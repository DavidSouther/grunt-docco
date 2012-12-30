// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

"use strict"
var docco = require('docco');

module.exports = function(grunt) {
  grunt.registerMultiTask('docco', 'Docco processor.', function() {
    var options = this.options({ output: this.file.dest }),
        _this = this,
        files = this.file.src,
        fdone = 0;
    var done = _this.async();
    files.forEach(function(file) {
      var files = grunt.file.expandFiles(file);
      docco.document(files, options, function(err, result, code){
        if(fdone++ == files.length) done();
      });
    });
  });
};
