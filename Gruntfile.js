'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var config = {
        dev: 'src',
        dist: 'web'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        config: config,

        express: {
            dev: {
                options: {
                    port: 9099,
                    hostname: 'localhost',
                    bases: 'src',
                    livereload: true,
                }
            }
        },
        watch: {
            // css: {
            //     files: [
            //         'src/assets/**/*.scss',
            //         'src/assets/styles/*.css'
            //     ],
            //     tasks: [
            //         'sass:dev',
            //         'cssmin',
            //     ],
            //     options: {
            //         livereload: true
            //     }
            // },
            js: {
                files: ['/**/*.js'],
                // tasks: [
                //     'uglify:dev',
                // ],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['/**/*.html'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);

    grunt.registerTask('server', [
        'express',
        'watch',
        'express-keepalive'
    ]);

};