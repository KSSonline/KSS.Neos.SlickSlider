var changed     = require('gulp-changed');
var config      = require('../config').images;
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin({
        progressive: true,
        use: [pngquant({ quality: '65-80', speed: 3 })]
    }))
    .pipe(gulp.dest(config.dest));
});