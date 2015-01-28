var gulp   = require("gulp");
var path   = require("path");
var less   = require("gulp-less");
var rename = require("gulp-rename");
var minify = require("gulp-minify-css");

var dest = "./dist/stylesheets/";

gulp.task("less", function () {
  gulp.src("./less/mui.less")
      .pipe(less({
        paths: [ path.join(__dirname, "less") ]
      }))
      .pipe(gulp.dest(dest))
      .pipe(minify())
      .pipe(rename("mui.min.css"))
      .pipe(gulp.dest(dest));
});

gulp.task("default", ["less"]);
