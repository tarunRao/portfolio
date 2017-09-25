'use strict';

module.exports  = function(grunt) {
    require('jit-grunt')(grunt);

  grunt.initConfig({
    watch: {
      files: "app/style/*.less",
      task: ["less"],
      options: {
          nospawn: true
        }
    },
    less: {
      build: {
        options: {
          paths: ["app/style"],
          //yuicompress: true
        },
        files: [{
          expand: true,
          cwd: "app/style",
          src: ["*.less"],
          dest: "app/css/",
          ext: ".css"
        }]
      }
    }
  });

    //grunt.loadNpmTasks("grunt-contrib-less");
    //grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["less"]);
}
