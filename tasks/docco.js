// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

"use strict";
var docco = require('docco');

module.exports = function(grunt) {
  grunt.registerMultiTask('docco', 'Docco processor.', function() {
    var task = this,
        fdone = 0,
        flength = this.files.length,
        done = this.async();
    task.options({output: undefined});
    this.files.forEach(function(file) {
      docco.document(task.options({args: file.src}), function(){
        if(++fdone === flength) done();
      });
    });
  });
};
