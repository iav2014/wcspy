/**
 * Created by ariza on 14/05/17.
 */
var gulp   = require('gulp'),
	jshint = require('gulp-jshint');

gulp.task('hint', function() {
	gulp.src('./*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', ['hint']);
