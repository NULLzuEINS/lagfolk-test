'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc'
            },
            files: [
                'Gruntfile.js',
                'test/**/*.js',
                'package.json'
            ]
        },
        casper: {
            options: {
                test: true,
                includes: 'test/inc/inc.js',
                // post : 'test/inc/post.js',
                // pre : 'test/inc/pre.js',
                'log-level': 'warning',
                'fail-fast': true,
                concise: true,
                engine: 'phantomjs'
            },

            test: {
                files: {
                    'report/xunit/casper-results.xml': ['test/casper/*Test.js']
                }

            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-casper');

    grunt.registerTask('test', ['jshint', 'casper']);
    grunt.registerTask('default', ['test']);
};
