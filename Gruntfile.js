/**
 * Grunt
 *
 * @param grunt {object}
 */
module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * JSDoc
		 */

		jsdoc : {
			dist: {
				jsdoc: 'node_modules/.bin/jsdoc.cmd',
				src: [
					'app/modules/calls/**/*.js'
				],
				options: {
					destination: 'docs',
					configure: 'node_modules/angular-jsdoc/conf.json',
					template: 'node_modules/angular-jsdoc/template'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-jsdoc');

	grunt.registerTask('default', ['jsdoc']);
};
