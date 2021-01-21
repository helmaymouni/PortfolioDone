const gulp = require ('gulp');

const plugins = require('gulp-load-plugins')({
  pattern:'*',
  rename:{
    jshint:'jslint'
  }
})
plugins.browserSync.create();
async function debug() {
  await console.log(plugins);
}
const { watch,src, parallel,dest,series } = require('gulp');
const sass = require ('gulp-sass');
const sourcemaps = require ('gulp-sourcemaps');
const postcss = require ('gulp-postcss');
const cssnano = require ('cssnano');
const autoprefixer = require ('autoprefixer');
const concat = require ('gulp-concat');
const terser = require ('gulp-terser');
const imagemin = require ('gulp-imagemin');
const distRoot = './dist' ;

                    /***** CSS *******/

function cssTask() {
    return src('css/**/*.css')
      .pipe(sourcemaps.init())
      .pipe(concat('style.css'))
      .pipe(postcss([
          autoprefixer(),cssnano()
      ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css'));
  }

                     /***** JS *******/

function jsTask() {
    return src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/js'));
  }

                 /***** HTML *******/

function copyHtml() {
    return src('*.html')
      .pipe(gulp.dest('dist'));
  }

function copyHtmlCommon() {
    return src('common/**/*.html')
      .pipe(gulp.dest('dist/common'));
  }

               /***** FONT *******/

  function copyFont() {
    return src('font/**/*')
    .pipe(gulp.dest('dist/font'));
  }

              /***** image *******/

 function copyImage() {
    return src('img/**/*')
    .pipe(imagemin())    //ppur mimiser la taille de l'image 
    .pipe(gulp.dest('dist/img'));
    
  }

               /***** JSON *******/

 function copyJson() {
  return src('*.json')
  .pipe(gulp.dest('dist'));
  
}
   /***** watch *******/

function watchTask() {
  watch(parallel((jsTask,cssTask,copyHtml,copyFont,copyHtmlCommon,copyImage,copyJson)))
}

exports.cssTask=cssTask;
exports.jsTask=jsTask;
exports.copyHtml=copyHtml;
exports.copyFont=copyFont;
exports.copyHtmlCommon=copyHtmlCommon;
exports.copyImage=copyImage;
exports.copyJson=copyJson;
 
             /***** gulp-serve *******/

gulp.task('serve',gulp.series(parallel(copyJson,cssTask,jsTask,copyHtml,copyFont,copyHtmlCommon,copyImage),
  function () {
     plugins.browserSync.init({
       port:3010,
       server:{
         baseDir:distRoot ,
         https:true
       }
     }) ;
     watchTask
}));
gulp.task('default',gulp.parallel('serve'));