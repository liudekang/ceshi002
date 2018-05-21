var gulp = require("gulp");
var clean = require("gulp-clean");
var sass = require("gulp-sass");
var cleancss = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var webserver = require("gulp-webserver");
// var enquse = require("gulp-enquse");

gulp.task("del", function() {
    gulp.src("buld")
        .pipe(clean())
});
gulp.task("css", function() {
    gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("buld/css"));
});
gulp.task("js", function() {
    gulp.src("./src/js/**/*.js")
        // .pipe(uglify())
        .pipe(gulp.dest("buld/js"));
});

gulp.task("html", ["css", "js"], function() {
    gulp.src("./src/*.html")
        .pipe(gulp.dest("buld"));
});

gulp.task("listen", ["html"], function() {
    gulp.watch(["./src/scss/*.scss", "./src/js/**/*.js", "./src/*.html"], ["html"])
});
gulp.task("webserver", ["listen"], function() {
    gulp.src("buld")
        .pipe(webserver({
            port: "8080",
            // open: true,
            // livereload: true,
            // middleware: function() {
            //     next();
            // }
        }))
});
gulp.task("default", ["webserver"]);
// 1.实现上图布局，--------------
// 2.实现拖动进度效果
// 3.图片上传功能
// 4.项目过程中使用gulp进行构建，使用gulp启动服务器------------
// （四）评分要求
// 1.正确显示结构  10分----------
// 2.使用gulp完成服务端配置 10分----------
// 3.关联git远程仓库，上交的时候附上github地址  10分-----------
// 4.实现拖动进度样式 10分
// 5.实现拖动进度效果  10分
// 6.实现图片上传（可使用插件 可百度搜索）  30分
// 7.使用gulp打包整个文件 10分
// 8.界面美观  10分