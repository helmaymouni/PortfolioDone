const { watch } = require('gulp');
const gulp = require ('gulp');
const sass = require ('gulp-sass');

function cssTask() {
    return gulp.src('css/**/*.css')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'));
  }
  function watchTask() {
     watch(cssTask)
  }
exports.default=cssTask;