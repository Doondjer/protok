const mix = require('laravel-mix');
const {css} = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .copy('node_modules/@tabler/core/dist/css/tabler.css', 'public/css/tabler.css')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .css('resources/css/app.css', 'public/css').version();
  //  .postCss('resources/css/app.css', 'public/css', [
        //
   // ]);

/*mix.webpackConfig({
    output: {
        publicPath: '/',
        chunkFilename: 'js/[name].[hash].js',
    }
});*/
