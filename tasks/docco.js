// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

"use strict"
var docco = require('docco');

module.exports = function(grunt) {
  grunt.registerMultiTask('docco', 'Docco processor.', function() {
    var fdone = 0;
    var flength = this.files.length;
    var done = this.async();
    this.files.forEach(function(file) {
      var files = grunt.file.expand(file.src);
      docco.document(files, { output: file.dest }, function(err, result, code){
        if(++fdone === flength) done();
      });
    });
  });
};
