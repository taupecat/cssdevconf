var gulp			= require('gulp'),
	gutil			= require('gulp-util'),
	compass			= require('gulp-compass'),
	watch			= require('gulp-watch'),
	autoprefixer	= require('gulp-autoprefixer');


gulp.task( 'compass', function() {
	gulp.src('scss/**/*.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: 'css',
			sass: 'scss'
		}))
		.on('error', gutil.log)
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'));
});

gulp.task( 'default', ['compass'] );

gulp.task( 'watch', function() {
	gulp.watch('scss/**/*.scss', function() {
		gulp.run('compass');
	});
});
