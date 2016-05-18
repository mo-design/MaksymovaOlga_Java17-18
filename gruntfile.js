module.exports = function(grunt) {

  grunt.initConfig({
	  
	pkg: grunt.file.readJSON('package.json'),

	  
    concat: {
		options: {
			separator: ';'
		},
		dist: {
			src: ['js/*.js'],
			dest: 'js/build/script.main.js'
		}
	},
	
	
	uglify: {
		dist:{
			src: ['js/build/script.main.js'],
			dest: 'js/build/script.main.min.js'
		}
	},
	
	
	imagemin: {
		dynamic: {
			files: [{
				expand: true,
				cwd: 'img/',
				src: ['**/*.jpg'],
				dest: 'img/build/'
			}]
		}
	},
	
	
	
	cssmin: {
		target: {
			files: [{
			expand: true,
			src: ['css/*.css'],
			dest: 'css/build',
			}]
		}
	}

	
  });

 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin']);
  
  
};