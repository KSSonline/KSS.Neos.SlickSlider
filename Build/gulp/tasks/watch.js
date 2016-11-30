var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', ['build'], function(callback) {
  watch(config.images.src, function() { gulp.start('images'); });
  watch(config.sass.watch, function() { gulp.start('sass'); });
  watch(config.scripts.src, function() { gulp.start('scripts'); });
  watch(config.fonts.src, function() { gulp.start('fonts'); });
});