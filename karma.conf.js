module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine'],

        files: [
            'src/**/*.js',
            'src/**/*.jsx',
            'test/**/*.js',
            'test/**/*.jsx'
        ],

        exclude: [
        ],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify'],
            'src/**/*.jsx': ['browserify'],
            'test/**/*.jsx': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        }
    });
};