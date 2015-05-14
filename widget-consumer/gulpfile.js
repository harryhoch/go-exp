////
//// Usage: node ./node_modules/.bin/gulp build, clean, etc.
////

var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

var paths = {
    // tests: ['tests/*.test.js'],
    docable: ['lib/*.js']
};

// Browser runtime environment construction.
gulp.task('build', ['browserify', 'compress']);

// See what browserify-shim is up to.
process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;
gulp.task('browserify', function() {
    return browserify('./js/app.js')
	.bundle()
	.pipe(source('./js/app-bundle.js'))
	.pipe(rename('app-bundle.js'))
	.pipe(gulp.dest('./static/'));
});

gulp.task('compress', function() {
  return gulp.src('./static/app-bundle.js')
	.pipe(rename('app-bundle.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./static/'));
});

// // 
// gulp.task('clean', function(cb) {
//     del(['./dist/*', '!./dist/README.org',
// 	 './doc/*', '!./doc/README.org']);
// });

// // Testing with mocha/chai.
// // NOTE: I'm using chai here.
// gulp.task('test', function() {
//     return gulp.src(paths.tests, { read: false }).pipe(mocha({
// 	reporter: 'spec',
// 	globals: {
// 	    // Use a different should.
// 	    should: require('chai').should()
// 	}
//     }));
// });

// The default task (called when you run `gulp` from cli)
//gulp.task('default', ['watch', 'scripts', 'images']);
gulp.task('default', function() {
    console.log("'allo 'allo!");
});
