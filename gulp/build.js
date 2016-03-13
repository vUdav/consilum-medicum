/* Build */
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
    runSequence(
        'clean',
        'bower',
        'js',
        'png-sprite',
        'images',
        'svg',
        'svg-sprite',
        'fonts',
        'less',
        'txt',
        'jade',
        'generate-favicon',
        'inject-favicon-markups',
        // 'js-doc',
        // 'scss-doc',
        //'gh-pages',
        callback)
});
