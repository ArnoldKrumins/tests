/**
 * Created by akrumins on 15/01/2016.
 */

module.exports = function(config) {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        files: [
            'Specs/*.js'
        ]
    });
};