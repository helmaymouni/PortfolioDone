const gulp = require('gulp')

plugins = require('gulp-load-plugins')({
    pattern: '*',
    rename: {
      jshint: 'jslint'
    }
  });
// new run sequence adapt with gulp 4
//const runSequence = require('gulp4-run-sequence');

plugins.browserSync.create();

/* 2- Setting tasks */
async function debug() {
  await console.log(plugins);
}


const imagemin = require('gulp-imagemin');

const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

const sass = require('gulp-sass');

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const { src, series, parallel, dest, watch } = require('gulp');
const { AST_Export } = require('terser');

const jsPath = "js/**/app.js";
const cssPath = "css/**/*.css";


const distRoot = './dist';
function copyHtml(){
    return src('*.html').pipe(gulp.dest('dist'));
}

function copyCommon(){
  return src('common/*.html').pipe(gulp.dest('dist/common'));
}

function jqueryTask(){
  // to minify later
  return src('js/jquery.js').pipe(gulp.dest('dist/js'));
}

function copyFonts(){
  return src('font/**/*').pipe(gulp.dest('dist/font'));
}

function imgTask(){
    return src('img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
}

function appTask(){
    return src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/js'));
}


function cssTask(){
    return src(cssPath)
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(postcss([autoprefixer(),cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'));
}


function watchTask(){
    watch([cssPath, jsPath], {interval: 1000}, parallel(cssTask, appTask));
}
exports.cssTask = cssTask;
exports.appTask = appTask;
exports.imgTask = imgTask;
exports.copyHtml = copyHtml;
exports.copyCommon = copyCommon;
exports.copyFonts = copyFonts;
exports.jqueryTask=jqueryTask;

//exports.default = series(parallel(copyHtml, copyCommon, copyFonts, imgTask,jqueryTask, particlesTask, appTask, jsTask, cssTask), watchTask);


gulp.task('serve', gulp.series(parallel(jqueryTask,copyHtml, copyFonts, copyCommon, imgTask, appTask, cssTask),  function () {
    // Static server & Autoreload
    plugins.browserSync.init({
        port: 3010,
        server: {
    
          baseDir: distRoot,
          https: true
        }
      });
    watchTask
  }));

  // exports.build = compileScripts
gulp.task('default', gulp.parallel('serve'));
