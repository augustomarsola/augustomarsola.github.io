//  'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass'); //Compile Sass
var cssnano = require('gulp-cssnano'); //Minify CSS
var rename = require('gulp-rename'); //Rename Files
var postcss = require('gulp-postcss'); //Concate CSS
var mqpacker = require('css-mqpacker'); //Concate de media queries CSS
var autoprefixer = require('gulp-autoprefixer'); //Autoprefixer for old browsers
var uglify = require('gulp-uglify'); //Minify JS
const imagemin = require('gulp-imagemin'); //Minify imgs
var sourcemaps = require('gulp-sourcemaps'); //Create map for CSS and JS

// Variables

//External map destination
var mapDest = './map';

// Sass source
var scssFiles = './src/scss/**/*.scss';

// CSS destination
var cssDest = './css';

// Sass output style = expanded and compressed options
var sassOutput = {
  outputStyle: 'expanded'
};

// JS source
var jsFiles = './src/js/*.js';

//JS destination
var jsDest = './js';

//img source
var imgFiles = './src/img/**/*';

//img destination
var imgDest = './img';

// Tasks

// Task 'sassrun' - Run with command 'gulp sass'
gulp.task('sassrun', function() {
  return gulp.src(scssFiles)
    .pipe(sourcemaps.init())
      .pipe(sass(sassOutput).on('error', sass.logError))
      .pipe(rename('style.min.css'))
      .pipe(cssnano())
      .pipe(postcss([
        mqpacker()
      ]))
      .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write(mapDest))
    .pipe(gulp.dest(cssDest));
});

// Task 'minjs' - Run with command 'gulp minjs'
gulp.task('minjs', function() {
  return gulp.src(jsFiles)
    .pipe(sourcemaps.init())
      .pipe(rename('main.min.js'))
      // .pipe(uglify())
    .pipe(sourcemaps.write(mapDest))
    .pipe(gulp.dest(jsDest));
});

//Task 'minimg' - Run with command 'gulp mimimg'
gulp.task('minimg', function() {
  return gulp.src(imgFiles)
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, gulp.series('sassrun'));
  gulp.watch(jsFiles, gulp.series('minjs'));
  gulp.watch(imgFiles, gulp.series('minimg'));
});

// Default task - Run witch command 'gulp'
gulp.task('default', gulp.series('sassrun', 'minjs', 'minimg', 'watch'));