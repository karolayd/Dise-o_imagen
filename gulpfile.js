 var gulp= require('gulp'),
     stylus= require('gulp-stylus');

var config={
    scssdir:"./css",
    cssdir:"./stylus"

};
gulp.task('karol', function(){
      gulp.src(config.cssdir + '/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest(config.scssdir))
});
