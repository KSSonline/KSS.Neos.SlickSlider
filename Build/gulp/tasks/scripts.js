var config       = require('../config').scripts;
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var uglify 		 = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(uglify(config.output))
    .pipe(gulp.dest(config.dest));
});