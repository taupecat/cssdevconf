var gulp			= require('gulp'),
	gutil			= require('gulp-util'),
	compass			= require('gulp-compass'),
	watch			= require('gulp-watch'),
	autoprefixer	= require('gulp-autoprefixer'),
	cmq				= require('gulp-combine-media-queries'),
	del				= require('del'),
	rename			= require('gulp-rename');


gulp.task( 'styles', function() {
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

gulp.task( 'cmq', function() {
	gulp.src('css/main.css')
		.pipe( cmq( { log: true } ) )
		.pipe( rename( 'css/main.cmq.css' ) )
		.pipe( gulp.dest( '.' ) );
});

gulp.task( 'clean', function() {
	del(['css/main*.css'], function (err) {
		console.log('Files deleted');
	});
});

gulp.task( 'default', ['styles'] );

gulp.task('watch', function() {
	gulp.start('default');

	// Watch .scss files
	gulp.watch('scss/*.scss', ['styles']);
});
