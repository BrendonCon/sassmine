
var gulp = require('gulp'), 
  loadPlugins = require('gulp-load-plugins'),
  plugins = loadPlugins(),
  bemForceFiles = [
    './src/scss/_config.scss',
    './src/scss/_function.scss',
    './src/scss/_mixin.scss'
  ];
    
gulp.task('sass', function () {
  return gulp.src('./example/*.scss')
    .pipe(plugins.sass({
      outputStyle: 'compact'
    }).on('error', plugins.sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('concat', function() {
  return gulp.src(bemForceFiles)
    .pipe(plugins.concat('_sassmine.scss'))
    .pipe(plugins.stripCssComments())
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./example/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'concat', 'sass:watch']);