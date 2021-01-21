<<<<<<< HEAD
const { watch,src,dest,parallel,series } = require('gulp');
var gulp = require ('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const imagemin =require('gulp-imagemin');
const distRoot ='./dist';

/////////////////////////////////////////////////////////////////////////////////////

plugins = require('gulp-load-plugins')({
    pattern:'*',
    rename:{
      jshint:'jslint'
    }
});
  
plugins.browserSync.create();
async function debug() {
    await console.log(plugins);
}
  
//////////////////////////////////////// CSS ////////////////////////////////////////

function cssTask(){
    return src('css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(),cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
    }
//////////////////////////////////////// JS ////////////////////////////////////////
=======
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
>>>>>>> f64aa316f444b2629841e327b0f66b1dab008d00

function jsTask() {
    return src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/js'));
  }
<<<<<<< HEAD
//////////////////////////////////////// JQuery ////////////////////////////////////////

function jqueryTask() {
  return src('js/jquery.js')
    .pipe(gulp.dest('dist/js'));
}

//////////////////////////////////////// HTML ////////////////////////////////////////

function htmlTask() {
=======

                 /***** HTML *******/

function copyHtml() {
>>>>>>> f64aa316f444b2629841e327b0f66b1dab008d00
    return src('*.html')
      .pipe(gulp.dest('dist'));
  }

<<<<<<< HEAD
function htmlCommonTask() {
=======
function copyHtmlCommon() {
>>>>>>> f64aa316f444b2629841e327b0f66b1dab008d00
    return src('common/**/*.html')
      .pipe(gulp.dest('dist/common'));
  }

<<<<<<< HEAD
//////////////////////////////////////// FONT ////////////////////////////////////////

function fontTask() {
=======
               /***** FONT *******/

  function copyFont() {
>>>>>>> f64aa316f444b2629841e327b0f66b1dab008d00
    return src('font/**/*')
    .pipe(gulp.dest('dist/font'));
  }

<<<<<<< HEAD
//////////////////////////////////////// JSON ////////////////////////////////////////

function jsonTask() {
    return src('*.json')
    .pipe(gulp.dest('dist'));
    
}
//////////////////////////////////////// Image ////////////////////////////////////////

function imageTask() {
=======
              /***** image *******/

 function copyImage() {
>>>>>>> f64aa316f444b2629841e327b0f66b1dab008d00
    return src('img/**/*')
    .pipe(imagemin())    //ppur mimiser la taille de l'image 
    .pipe(gulp.dest('dist/img'));
    
<<<<<<< HEAD
}

//////////////////////////////////////////////////////////////////////////////////////  

function watchTask(){
    watch(parallele(cssTask,jsTask,htmlTask,htmlCommonTask,fontTask, jsonTask,imageTask,jqueryTask));
=======
  }

               /***** JSON *******/

 function copyJson() {
  return src('*.json')
  .pipe(gulp.dest('dist'));
  
}
   /***** watch *******/

function watchTask() {
  watch(parallel((jsTask,cssTask,copyHtml,copyFont,copyHtmlCommon,copyImage,copyJson)))
>>>>>>> f64aa316f444b2629841e327b0f66b1dab008d00
}

exports.cssTask=cssTask;
exports.jsTask=jsTask;
<<<<<<< HEAD
exports.htmlCommonTask=htmlCommonTask;
exports.htmlTask=htmlTask;
exports.fontTask=fontTask;
exports.jsonTask=jsonTask;
exports.imageTask=imageTask;
exports.jqueryTask=jqueryTask;

//////////////////////////////////////// Servce ////////////////////////////////////////

gulp.task('serve',gulp.series(parallel(cssTask,jsTask,htmlTask,htmlCommonTask,fontTask, jsonTask,imageTask,jqueryTask),
=======
exports.copyHtml=copyHtml;
exports.copyFont=copyFont;
exports.copyHtmlCommon=copyHtmlCommon;
exports.copyImage=copyImage;
exports.copyJson=copyJson;
 
             /***** gulp-serve *******/

gulp.task('serve',gulp.series(parallel(copyJson,cssTask,jsTask,copyHtml,copyFont,copyHtmlCommon,copyImage),
>>>>>>> f64aa316f444b2629841e327b0f66b1dab008d00
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
<<<<<<< HEAD
gulp.task('default',gulp.parallel('serve'));
=======
gulp.task('default',gulp.parallel('serve'));
>>>>>>> f64aa316f444b2629841e327b0f66b1dab008d00
