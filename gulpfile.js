"use strict";

const gulp = require("gulp");
var sass = require('gulp-sass')(require('sass'))
const concatCss = require("gulp-concat-css");
const rename = require("gulp-rename")
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');

const SCSS_SOURCE = "./src/styles/main.scss";

function merge(cb) {
    // gulp.src(["./src/styles/main.scss", './vendor/SaveTheDate-original.css'])
    gulp.src("./src/styles/main.scss")
        .pipe(sass.sync().on('error', sass.logError))
        // .pipe(concatCss('SaveTheDate.css'))
        .pipe(rename('SaveTheDate.css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(minifyCSS())
        .pipe(gulp.dest("build"))
    cb()
};

function watch(cb) {
    gulp.watch(SCSS_SOURCE, gulp.series(merge));
    cb();
}

exports.default = gulp.series(merge)
exports.watch = gulp.series(watch)
