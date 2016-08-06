var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function() {
    return del('./src/public/app');
});

gulp.task('package', function() {
    return gulp.src(['./src/app/**/*', '!./src/app/**/*.ts'])
               .pipe(gulp.dest('./src/public/app'));
});