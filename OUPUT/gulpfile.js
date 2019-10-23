var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile 
gulp.task('sass', function () { 
	return gulp.src('app/scss/app.scss')
	.pipe(sass({
      outputStyle: 'compressed' // if css compressed **file size**
    })
		.on('error', sass.logError))
	.pipe(gulp.dest('app/css'));
});
// Compile and watch 
gulp.task('watch', function () {
    return gulp.watch('app/scss/*.scss', gulp.series('sass'));
});