// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

module.exports = function(grunt) {

	// ### TASKS
	grunt.registerMultiTask('docco', 'Docco processor.', function() {
		var done = this.async();
		var src = grunt.file.expandFiles(this.file.src);
		grunt.utils.spawn({
			cmd: "docco",
			args: src
		}, function(err, result, code){
			grunt.log.writeln("Doccoed [" + src.join(", ") + "]; " + err ? err : "(No errors)" + "\n" + result + " " + code);
			done();
		});
	});
};
