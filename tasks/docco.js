// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

module.exports = function(grunt) {

	// Please see the grunt documentation for more information regarding task and
	// helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

	// ==========================================================================
	// TASKS
	// ==========================================================================

	grunt.registerMultiTask('docco', 'Docco processor.', function() {
		var files = grunt.file.expandFiles(this.file.src);
		grunt.log.writeln('Doccoing ' + files.join(' '));
		grunt.helper("docco", files, {
			done: function(){
				grunt.log.writeln("Docco'd " + files.join(' '));
			}
		});
	});

	// ==========================================================================
	// HELPERS
	// ==========================================================================

	grunt.registerHelper('docco', function(paths, options) {
		return grunt.utils.spawn({
			cmd: 'docco',
			args: paths
		}, function(err, result, code){
			if (!err) { return options.done(null); }
			// Something went horribly wrong.
			grunt.verbose.or.writeln();
			grunt.log.write('Running Docco...').error();
			if (code === 127) {
				grunt.warn('Docco not found.', options.code);
			} else {
				result.split('\n').forEach(grunt.log.error, grunt.log);
				grunt.warn('Docco exited unexpectedly with exit code ' + code + '.', options.code);
			}
			options.done(code);
		});
	});

};
