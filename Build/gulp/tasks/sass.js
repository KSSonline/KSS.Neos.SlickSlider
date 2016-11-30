var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var gulpFilter   = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config');

gulp.task('sass', function() {

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map']);

  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options))
    .pipe(sourcemaps.write(config.sass.sourcemapPath))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.sass.dest));
});