/* eslint-disable func-names */
//  'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass'); // Compile Sass
const cssnano = require('gulp-cssnano'); // Minify CSS
const rename = require('gulp-rename'); // Rename Files
const postcss = require('gulp-postcss'); // Concate CSS
const mqpacker = require('css-mqpacker'); // Concate de media queries CSS
const autoprefixer = require('gulp-autoprefixer'); // Autoprefixer for old browsers
const imagemin = require('gulp-imagemin'); // Minify imgs
const webpack = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps'); // Create map for CSS and JS
const webpackConfig = require('./webpack.config.js');

// Variables

// External map destination
const mapDest = './map';

// Sass source
const scssFiles = './src/scss/**/*.scss';

// CSS destination
const cssDest = './css';

// Sass output style = expanded and compressed options
const sassOutput = {
  outputStyle: 'expanded',
};

// JS source
const jsFiles = './src/js/script.js';

// JS destination
const jsDest = './js/';

// img source
const imgFiles = './src/img/**/*';

// img destination
const imgDest = './img';

// Tasks

// Task 'sassrun' - Run with command 'gulp sass'
gulp.task('sassrun', function () {
  return gulp
    .src(scssFiles)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOutput).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(cssnano())
    .pipe(postcss([mqpacker()]))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write(mapDest))
    .pipe(gulp.dest(cssDest));
});

// Task 'minjs' - Run with command 'gulp minjs'
gulp.task('minjs', function () {
  return gulp
    .src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(rename('main.min.js'))
    .pipe(
      webpack({
        config: webpackConfig,
      }),
    )
    .pipe(sourcemaps.write(mapDest))
    .pipe(gulp.dest(jsDest));
});

// Task 'minimg' - Run with command 'gulp mimimg'
gulp.task('minimg', function () {
  return gulp.src(imgFiles).pipe(imagemin()).pipe(gulp.dest(imgDest));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function () {
  gulp.watch(scssFiles, gulp.series('sassrun'));
  gulp.watch(jsFiles, gulp.series('minjs'));
  gulp.watch(imgFiles, gulp.series('minimg'));
});

// Default task - Run witch command 'gulp'
gulp.task('default', gulp.series('sassrun', 'minjs', 'minimg', 'watch'));
