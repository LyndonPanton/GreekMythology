const gulp = require("gulp"); // gulp module
const imagemin = require("gulp-imagemin"); // optimize images
const uglify = require("gulp-uglify"); // minify files
const sass = require("gulp-sass"); // compile sass
const concat = require("gulp-concat"); // concatenate files
const rename = require("gulp-rename"); // rename files
const inject = require("gulp-inject"); // inject dependencies

gulp.task("copyHTML", async function() {
	gulp.src("src/*.html") // get HTML file(s)
		.pipe(gulp.dest("build")); // send to build folder
});

// compile sass
gulp.task("sass", async function() {
	gulp.src("src/sass/*.sass") // get sass files
		.pipe(sass()) // compile files
		.on("error", sass.logError) // log errors if any
		.pipe(gulp.dest("build/css")); // send to build folder
});

// optimize images
gulp.task("imagemin", async function() {
	gulp.src("src/img/*") // get image files
		.pipe(imagemin()) // optimize files
		.pipe(gulp.dest("build/img")); // send to build folder
});

// concatenate, minify scripts
gulp.task("js", async function() {
	gulp.src("src/js/*.js") // get js files
		.pipe(concat("main.js")) // concatenate files into file
		.pipe(uglify()) // minify file
		.pipe(gulp.dest("build/js")); // send to build folder
});

// inject dependencies
gulp.task("inject-build", async function() {
	// reading is not necessary for this operation
	const sources = gulp.src(["./build/js/*.js", "./build/css/*.css"], {read: false});

	gulp.src("./build/index.html")
		.pipe(inject(sources));
});

// default task
gulp.task("default", gulp.series(["copyHTML", "sass", "imagemin", "js"]));

gulp.task("watch", async function() {
	gulp.watch("src/*.html", gulp.series("copyHTML"));
	gulp.watch("src/sass/*.sass", gulp.series("sass"));
	gulp.watch("src/img/*", gulp.series("imagemin"));
	gulp.watch("src/js/*.js", gulp.series("js"));
	gulp.watch("src/**/*", gulp.series("inject-build"));
});