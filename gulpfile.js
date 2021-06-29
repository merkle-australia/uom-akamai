"use strict";

const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const SCSS_SOURCE = "./src/styles/main.scss";

function css(cb) {
    gulp.src(SCSS_SOURCE)
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('vendor/*.css'))
        .pipe(minifyCSS())
        .pipe(rename('SaveTheDate.css'))
        .pipe(gulp.dest("./"))
    cb()
};

function watch(cb) {
    gulp.watch(SCSS_SOURCE, gulp.series(css));
    cb();
}

exports.default = gulp.series(css);
exports.watch = gulp.series(watch)
