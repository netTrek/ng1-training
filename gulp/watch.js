'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['sass', 'scripts:watch' ], function(){
  gulp.watch('app/**/*.scss', ['sass']);
  gulp.watch('app/*.html').on('change', browserSync.reload);
});
