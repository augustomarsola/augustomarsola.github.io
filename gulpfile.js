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
var gutil = require( 'gulp-util' ); //For FTP
var ftp = require( 'vinyl-ftp' ); //For FTP

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
var jsDest = './js'

//img source
var imgFiles = './src/img/**/*';

//img destination
var imgDest = './img';

//Files for deploy in FTP
var globs = [
  'img/**',
  'src/**',
  'css/**',
  'js/**',
];

//Infos for deploy FTP
var user = 'user';  
var password = 'pass';  
var host = 'host';  
var port = 21; 
var remoteFolder = '/path';

//Function for deploy FTP
function getFtpConnection() {  
  return ftp.create({
      host: host,
      port: port,
      user: user,
      password: password,
      parallel: 5,
      log: gutil.log
  });
}

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
      .pipe(autoprefixer({
        browsers: ['> 1%', 'last 2 versions'],
        cascade: false
      }))
    .pipe(sourcemaps.write(mapDest))
    .pipe(gulp.dest(cssDest));
});

// Task 'minjs' - Run with command 'gulp minjs'
gulp.task('minjs', function() {
  return gulp.src(jsFiles)
    .pipe(sourcemaps.init())
      .pipe(rename('main.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write(mapDest))
    .pipe(gulp.dest(jsDest));
});

//Task 'minimg' - Run with command 'gulp mimimg'
gulp.task('minimg', function() {
  return gulp.src(imgFiles)
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest));
});

// Task 'ftp-deploy' - Run with command 'gulp ftp-deploy'
gulp.task('ftp-deploy', function () {
  var conn = getFtpConnection();
  return gulp.src(globs, {
      base: '.',
      buffer: false
    })
    .pipe(conn.newer(remoteFolder)) // only upload newer files 
    .pipe(conn.dest(remoteFolder));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sassrun']);
  gulp.watch(jsFiles, ['minjs']);
  gulp.watch(imgFiles, ['minimg']);
  gulp.watch(globs, ['ftp-deploy']);
});

// Default task - Run witch command 'gulp'
gulp.task('default', ['sassrun', 'minjs', 'minimg', 'ftp-deploy', 'watch']);