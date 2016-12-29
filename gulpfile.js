var gulp = require('gulp');

var jshint = require('gulp-jshint');

var jsFiles = ['*.js', 'src/**/*.js'];

var jscs = require('gulp-jscs');

var nodemon = require('gulp-nodemon');

// returning the stream to make sure that this stream can be used at some other areas.

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function () {
    // this is a stream so we are pulling stream of wiredep.

    var wiredep = require('wiredep').stream;

    // gulp inject
    var inject = require('gulp-inject');

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    }

    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {
        read: false
    });

    var injectOptions = {
        ignorePath: '/public'
    };


    return gulp.src('./src/views/*.jade')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1, // in second
        env: {
            'PORT': 3000

        },
        watch: jsFiles
    }
    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting ...');
        });
});

