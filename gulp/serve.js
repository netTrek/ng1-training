'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');


browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'],  function() {

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: {
      baseDir: 'app'
    },
    browser: 'default'
  });

});