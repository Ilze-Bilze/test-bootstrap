var gulp = require('gulp');
var sass = require('gulp-sass');

var sassPaths = [
  'node_modules/bootstrap/scss'
];

// Compile 
gulp.task('sass', function () { 
	return gulp.src('app/scss/*.scss')
	.pipe(sass({
		includePaths: sassPaths,
      	outputStyle: 'compressed' // if css compressed **file size**
    })
		.on('error', sass.logError))
	.pipe(gulp.dest('app/css'));
});

// Compile and watch 
gulp.task('watch', function () {
    return gulp.watch('app/scss/*.scss', gulp.series('sass'));
});