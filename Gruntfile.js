module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: { tests: ["docs"] },
    docco: {
      tests: {
        src: ['test/**/*.js', 'test/**/*.coffee'],
        dest: "docs/"
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('test', ['clean:tests', 'docco:tests', 'nodeunit:tests']);

  // Default task.
  grunt.registerTask('default', ['lint', 'docco']);

};
