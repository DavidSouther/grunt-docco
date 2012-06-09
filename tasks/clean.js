// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

module.exports = function(grunt) {

	// ### TASKS
	grunt.registerMultiTask('clean', 'Clean files.', function() {
		var src = grunt.file.expand(this.file.src);
		grunt.log.writeln("Cleaning: " + src.join(", "));
		src.forEach(function(target){
			grunt.helper('clean', target);
		});
	});

	// ### Helpers
	grunt.registerHelper('clean', function(p){
		var fs = require('fs');
		var path = require('path');
		var lstat = process.platform === "win32" ? "stat" : "lstat";
		var lstatSync = lstat + "Sync";
		var d = path.resolve(p);
		var s;

		try {
			s = fs[lstatSync](d);
		} catch (er) {
			if (er.code === "ENOENT") { return true; }
			throw er;
		}

		if(!s.isDirectory()) { return fs.unlinkSync(d); }

		fs.readdirSync(d).forEach(function (f) {
			grunt.helper('clean', path.join(d, f));
		});

		fs.rmdirSync(d);
	});
};
