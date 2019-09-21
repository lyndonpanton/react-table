const gulp = require("gulp");
const sass = require("gulp-sass");

// compile sass
gulp.task("sass", function() {
	gulp.src("src/*.sass")
		.pipe(sass())
		.on("error", sass.logError)
		.pipe(gulp.dest("src"));
});