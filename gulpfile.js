const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

function buildStyles() {
  return src("./src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./src/css"))
    .pipe(browserSync.stream());
}

function watchChanges() {
  watch(
    ["./src/sass/**/*.scss", "./*.html", "./src/js/**/*.js"],
    series(buildStyles, reload)
  );
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

exports.default = series(buildStyles, serve, watchChanges);

/*
Referensi setingan gulp -> https://github.com/gulpjs/gulp/blob/master/docs/recipes/minimal-browsersync-setup-with-gulp4.md
*/
