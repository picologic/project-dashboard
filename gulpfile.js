var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function() {
    return del('./src/public/app');
});

gulp.task('package', ['package:app', 'package:vendor']);

gulp.task('package:app', function() {
    return gulp.src(['./src/app/**/*', '!./src/app/**/*.ts'])
               .pipe(gulp.dest('./src/public/app'));
});

gulp.task('package:vendor', function() {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/bootstrap/dist/**/*'
    ], { base: 'node_modules' })
    .pipe(gulp.dest('./src/public/vendor'));
});