const gulp = require('gulp');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const simpleVars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');

gulp.task('css', () => {
  const postCssPlugins = [
    autoprefixer({ browsers: ['last 2 version'] }),
    simpleVars({ silend: true }),
  ];

  return gulp.src('./src/**/*.css')
  .on('error', console.log)
  .pipe(postcss(postCssPlugins))
  .pipe(gulp.dest('./dist'));
});

gulp.task('pug', () => {
  const pugConfig = {
    pretty: true,
  };

  return gulp.src('./src/**/*.pug')
  .pipe(pug(pugConfig))
  .pipe(gulp.dest('./dist'));
});
