var fs = require('fs');

module.exports = function (grunt) {
  grunt.initConfig({

    concat: {
      options: { separator: '\n\n' },
      basic_and_extras: {
        files: {
          'temp/test.html': ['src/test.html', 'src/plugins/**/test.html'],
          'temp/readme.md': ['src/readme.md', 'src/plugins/**/readme.md']
        }
      }
    },

    sass: {
      dist: {
        options: { sourcemap: 'none', style: 'compressed' },
        files: {
          'web/style/style.min.css': 'web/style/style.scss',
          'mozui.min.css': 'src/mozui.scss'
        }
      },
      dev: {
        options: { sourcemap: 'none', style: 'nested' },
        files: {
          'mozui.css': 'src/mozui.scss'
        }
      }
    },

    copy: {
      main: {
        files: [
          { src: 'mozui.min.css', dest: 'releases/mozui.min.css' },
          { src: 'mozui.min.css', dest: 'releases/plugins.min.css' },
        ]
      }
    },

    usebanner: {
      taskName: {
        options: {
          position: 'top',
          linebreak: true
        },
        files: { src: 'mozui.min.css' }
      }
    },

    watch: {
      scripts: {
        files: [ 'package.js', 'Gruntfile.js', 'src/**/*.*', 'web/**/*.*' ],
        tasks: ['default'],
        options: { spawn: false },
      }
    },

    bytesize: {
      all: {
        src: [
          'mozui.min.css'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.registerTask('default', ['concat', 'sass', 'usebanner', 'copy', 'jade', 'bytesize']);
};
