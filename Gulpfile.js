/*
 * bootstrap3-grid
 * https://github.com/pandorajs/bootstrap3-grid
 *
 * Copyright (c) 2014 pandorajs
 * Licensed under the MIT license.
 */

'use strict';

/* global process:true */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var wrap = require('gulp-wrap');

var color = require('colorful');

var myReporter = map(function (file, cb) {
  if (!file.jshint.success) {
    console.log(color.green('JSHINT fail:'));
    file.jshint.results.forEach(function (err) {
      if (err) {
        err = err.error;
        console.log(' '+ color.gray(file.path) + ': line ' + err.line + ', col ' + err.character + ', code ' + err.code + ', ' + color.red(err.reason));
      }
    });
    process.exit(2);
  }
  cb(null, file);
});

gulp.task('jshint', function() {
  return gulp.src(['index.js', './src/*.js'])
    .pipe(jshint())
    .pipe(myReporter);
});

gulp.task('wrap', function() {
  var comments = '/* ' + new Date() + ' */\r\n';
  return gulp.src('./dist/**/*.js')
    .pipe(wrap( comments + '<%= contents %>'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('prebuild', ['jshint']);
gulp.task('postbuild', ['wrap']);
