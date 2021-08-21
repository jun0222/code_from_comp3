const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

gulp.task('pug', function(){
    gulp.src('src/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('.'))
});

gulp.task("sass", function(){
    gulp.src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
});