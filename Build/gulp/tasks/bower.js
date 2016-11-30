var gulp 			= require('gulp');
var plumber     	= require('gulp-plumber');
var del 			= require('del');
var rename			= require('gulp-rename');
var mainBowerFiles 	= require('main-bower-files');
var config       	= require('../config');
 
gulp.task('bower', ['bowercss', 'bowerscss', 'bowerjs', 'bowerjsmin']);

gulp.task('bowerdelcss', function(cb) {
	del(config.bower.css, {force: true}, cb);
});

gulp.task('bowerdelscss', function(cb) {
	del([config.bower.scss + '/**/*', '!' + config.bower.scss + '/**/_module.scss'], {force: true}, cb);
});

gulp.task('bowerdeljs', function(cb) {
	del(config.bower.js, {force: true}, cb);
});

gulp.task('bowerdeljsmin', function(cb) {
	del(config.bower.jsmin, {force: true}, cb);
});

gulp.task('bowercss', ['bowerdelscss'], function() {
    return gulp.src(mainBowerFiles('**/*.css'))
        .pipe(gulp.dest(config.bower.css))
});

gulp.task('bowerscss', ['bowerdelscss'], function() {
    return gulp.src(mainBowerFiles('**/*.scss'), { base: './bower_components' })
        .pipe(gulp.dest(config.bower.scss))
});

gulp.task('bowerjs', ['bowerdeljs'], function() {
    return gulp.src(mainBowerFiles(['**/*.js', '!**/*.min.js']))
        .pipe(gulp.dest(config.bower.jsmin))
});

gulp.task('bowerjsmin', ['bowerdeljsmin'], function() {
    return gulp.src(mainBowerFiles(['**/*.min.js', '**/*.min.map']))
        .pipe(gulp.dest(config.bower.jsmin))
});