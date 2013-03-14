// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

"use strict";
var _ = require('underscore'),
    docco = require('docco');

// Default configuration for `docco` which needs to be reapplied each time to ensure clean slate
// for subsequent targets.
var defaultConfig = {
  layout: 'parallel',
  output: 'docs/',
  template: null,
  css: null,
  extension: null
};

module.exports = function(grunt) {
  grunt.registerMultiTask('docco', 'Docco processor.', function() {
    // Currently having to implement a dirty workaround for Docco 0.6's lack of functional API.
    var options = this.options(),
      args = ['node', 'docco'],
      config = _.extend({}, defaultConfig, _.pick(options, _.keys(defaultConfig)));

    // Building a mock array of CLI arguments to be parsed by internally by `docco`.
    _.chain(config).keys().each(function(arg) {
      if (!_.isNull(config[arg])) args.push('--' + arg, config[arg]);
    });

    // Appending source files to CLI arguments so `docco` runs them in bulk.
    args = args.concat(this.filesSrc);

    // Running `docco` as if it was called from a CLI. Since `docco` now works synchronously
    // there's no need for async handling here.
    docco.run(args);
  });
};
