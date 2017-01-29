const gulp = require('gulp');
const scss = require('gulp-sass');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');;

gulp.task('scss', () => {
  return gulp.src('./scss/*.scss')
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('browserSync', () => {
  browserSync.init(['./public'], {
    server: {
      baseDir: './public'
    }
  })
})


gulp.task('watch',['browserSync'], () => {
  gulp.watch('./scss/**/*.scss', ['scss'])
})

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('default',['scss', 'watch', 'start']);