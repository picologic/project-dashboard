var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function () {
    server.run(['./src/server.js']);
    gulp.watch(['./src/**/*.js'], [server.run]);
});