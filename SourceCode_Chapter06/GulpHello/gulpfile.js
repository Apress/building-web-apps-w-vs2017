var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function() {
	return del('./output/');
});

gulp.task('copy', ['clean'], function() {
	return gulp.src('hello.txt')
		.pipe(gulp.dest('./output/'));

});
