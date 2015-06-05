////
//// Usage: node ./node_modules/gulp/bin/gulp.js build, clean, etc.
////

var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var git = require('gulp-git');
var bump = require('gulp-bump');
var parcelify = require('parcelify');
var del = require('del');
var buffer =  require('vinyl-buffer');

var paths = {
    // tests: ['tests/*.test.js'],
    docable: ['lib/*.js']
};

// Browser runtime environment construction.
gulp.task('build', ['patch-bump', 'doc']);

gulp.task('patch-bump', function(){
    gulp.src('./package.json')
	.pipe(bump({type: 'patch'}))
	.pipe(gulp.dest('./'));
});

// Build docs directory with JSDoc.
gulp.task('doc', function() {
    gulp.src(paths.docable)
        .pipe(jsdoc('./doc'));
});

// // See what browserify-shim is up to.
// process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;
// gulp.task('browserify', function() {
//     return browserify()
// 	.bundle()
//     //Pass desired output filename to vinyl-source-stream
// 	.pipe(source('./lib/widget.js'))
// 	.pipe(rename('widget.js'))
//     // Start piping stream to tasks!
// 	.pipe(gulp.dest('./dist/'));
// });

// gulp.task('compress', function() {
//     return gulp.src('./dist/widget.js')
// 	.pipe(rename('widget.min.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('./dist/'));
// });

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

//gulp.task('release', ['build', 'publish-npm', 'git-commit', 'git-tag']);
gulp.task('release', ['build', 'publish-npm']);

// Needs to have ""
gulp.task('publish-npm', function() {
    var npm = require("npm");
    npm.load(function (er, npm) {
	// NPM
	npm.commands.publish();	
b    });
});

gulp.task('git-commit', function(){
    console.log('TODO: WORK IN PROGRESS');
    // Make a note in the git repo.
    var pkg = require('./package.json');
    var pver = pkg.version;
    gulp.src('./*')
	.pipe(git.commit('Package/version tracking for go-exp/widget: ' + pver));
});

gulp.task('git-tag', function(){
    console.log('TODO: WORK IN PROGRESS');
    // Make a note in the git repo.
    var pkg = require('./package.json');
    var pver = pkg.version;
    git.tag('go-exp-widget-' + pver, 'version message', function (err){
	if(err) throw err;
    });
});

gulp.task('browserify',function() {
    return browserify('entry.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
	.pipe(rename('bundle.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('parcelify',function() {
    return browserify('entry.js')
        .bundle()
        .pipe(source('bundle.css'))
        .pipe(gulp.dest('./'));
});

// The default task (called when you run `gulp` from cli)
//gulp.task('default', ['watch', 'scripts', 'images']);


gulp.task('default', ['browserify','parcelify']);
