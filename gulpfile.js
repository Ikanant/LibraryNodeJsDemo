var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'src/**/*.js'];

// We are going to create tasks
// The first task we are going to create is gonna be for our styles
gulp.task('style', function(){
    // Tell gulp where we are getting everything from
    // The returns means I am returning this stream so we can use it as a sub-tasks in some other areas
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }));
        //.pipe(jscs())
});