module.exports = function(grunt) {
  grunt.initConfig({
    pkg: {
      name: "grunt-contrib",
      version: "0.3.9"
    },

    test: {
      tasks: ["*_test.js"],
      clean: ['clean_task.js']
    },

    docco: {
      app: {
        src: ['fixtures/docco/*.coffee']
      }
    }
  });

  grunt.loadTasks("../tasks");
  grunt.registerTask("default", "docco test:tasks");
};
