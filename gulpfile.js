const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
var inlinesource = require('gulp-inline-source');

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

//インラインで書き出し
gulp.task( 'inlinesource', function() { //タスク「inlinesource」の内容を書こう
    return gulp.src( 'index.html' ) //どのファイルに対して行うかを指定
    .pipe( inlinesource() ) //インラインで読みこんで書き出し
    .pipe( gulp.dest( '.' ) ); //「作業フォルダ/out」フォルダ内にファイルを作成
});