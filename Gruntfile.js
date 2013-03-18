"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: { tests: ["docs"] },
    docco: {
      tests: {
        src: ['test/**/*.js', 'test/**/*.coffee'],
        options: { output: "docs/" }
      },
      'custom-css-test': {
        src: ['test/**/*.js'],
        options: {
            css: 'test/fixtures/custom.css',
            output: 'docs/'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'tasks/**/*.js'],
      options: {
        globalstrict: true,
        node: true
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('test', ['clean:tests', 'docco', 'nodeunit:tests']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'clean', 'docco']);

};
