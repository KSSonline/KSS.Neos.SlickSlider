var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean', function (cb) {
  del([config.publicDirectory + '/JavaScript/*', config.publicDirectory + '/Build/*', config.publicDirectory + '/Styles/*', config.publicDirectory + '/Images/*','!' + config.publicDirectory + '/Components/**' ], {force: true}, cb);
});