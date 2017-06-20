/// <binding AfterBuild='copy' />
var gulp = require('gulp');

gulp.task('copy', ['copy:node']);

gulp.task('copy:node', function () {
    return gulp.src([
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    
    'node_modules/@angular/**/bundles/*',
      
      'node_modules/rx*/**',
      'node_modules/core-js*/**',
    ]).pipe(gulp.dest('./wwwroot/lib/'));
});