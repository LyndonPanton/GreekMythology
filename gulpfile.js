const gulp = require("gulp"); // gulp module
const imagemin = require("gulp-imagemin"); // optimize images
const uglify = require("gulp-uglify"); // minify files
const sass = require("gulp-sass"); // compile sass
const concat = require("gulp-concat"); // concatenate files

gulp.task("copyHTML", async function() {
	gulp.src("src/*.html") // get HTML file(s)
		.pipe(gulp.dest("build")); // send to build folder
});

gulp.task("copyMD", async function() {
	gulp.src("src/*.md") // get markdown file(s)
		.pipe(gulp.dest("build")); // send to build folder
});

// compile sass
gulp.task("sass", async function() {
	gulp.src("src/sass/*.sass") // get sass files
		.pipe(sass()) // compile files
		.on("error", sass.logError) // log errors if any
		.pipe(gulp.dest("build/css")); // send to build folder
});