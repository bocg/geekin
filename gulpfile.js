'use strict'

var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    // copy = require('gulp-copy'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    autoprefix = require('gulp-autoprefixer'),
    del = require('del'),
    browsersync = require('browser-sync').create();


    //Lint our scripts (NOT VENDOR)
    gulp.task('jslint', function() {
        return gulp.src('assets/scripts/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
    });

    // Compile Our Sass for build (NOT VENDOR)
    gulp.task('sass-dev', function() {
        return gulp.src('assets/stylesheets/scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('assets/stylesheets/css'));           //Default file name is style.css
    });

    //DEVELOPMENT SERVER via browsersync
    gulp.task('server-dev', function(){
      browsersync.init({
        server: './',
        port: 3030
      });
    });

    //RELOAD TASK
    gulp.task('reload', function(){
      browsersync.reload();
      return gutil.log('Reloading your browser....');
    });

    gulp.task('dev', ['jslint', 'sass-dev', 'server-dev'], function(){
      gulp.watch('assets/stylesheets/scss/*.scss', ['sass-dev'])
      gulp.watch('assets/scripts/*.js', ['jslint', 'reload']);
      gulp.watch('assetes/stylesheets/css/.css', ['reload']);
      gulp.watch('*.html', ['reload']);
      return gutil.log('Gulp is running your development server ...watching Javascripts and SCSS for changes.');
    });
