'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('sass', function() {
  return gulp.src('app/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe($.sass())
      .pipe(gulp.dest('app/style'))
      .pipe(browserSync.stream());
});