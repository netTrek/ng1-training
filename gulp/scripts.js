'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');
var webpack = require('webpack-stream');

var $ = require('gulp-load-plugins')();

function errorHandler (title) {
  'use strict';

  return function(err) {
    $.util.log ($.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};

function webpackWrapper(watch, callback) {
  var webpackOptions = {
    resolve: { extensions: ['', '.ts'] },
    watch: watch,
    module: {
      /*preLoaders: [{ test: /\.ts$/, exclude: /node_modules/, loader: 'tslint-loader'}],*/
      /*preLoaders: [{ test: /.ts$/, exclude: /node_modules/, loader: 'tslint'}],*/
      loaders: [{ test: /\.ts$/, exclude: /node_modules/, loaders: [/*'ng-annotate',*/ 'ts-loader']}]
    },
    output: { filename: 'index.js' }
  };

  if(watch) {
    webpackOptions.devtool = 'inline-source-map';
  }

  var webpackChangeHandler = function(err, stats) {
    if(err) {
      errorHandler('Webpack')(err);
    }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }));
    browserSync.reload();
    if(watch) {
      watch = false;
      callback();
    }
  };

  return gulp.src('app/index.ts')
    .pipe(webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest('app/js'));
}

gulp.task('scripts', function () {
  return webpackWrapper(false);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpackWrapper(true, callback);
});
