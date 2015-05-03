var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var batch = require('gulp-batch');




// SASS
gulp.task('sass', function() {
	return sass('src/scss', { sourcemap: true })
	.on('error', function (err) {
		console.error('Error', err.message);
	})

	.pipe(sourcemaps.write('maps', {
			includeContent: false,
			sourceRoot: '/src/scss'
	}))

	.pipe(gulp.dest('css'));
});




// WATCH
gulp.task('watch', function () {
	watch('src/scss/', batch(function () {
		gulp.start('sass');
	}));
});