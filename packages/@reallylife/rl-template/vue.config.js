/*!
 *
 *   VUE_CLI_SERVICE_CONFIG_PATH
 */
const path = require('path')

function resolve (dir) {
    var _dir = path.join(__dirname, dir)
    console.log(`resolve: '${dir}' => '${_dir}'`)
    return _dir
}

module.exports = {
    // 选项...

    // project deployment base
    publicPath: './',

    // where to output built files
    outputDir: 'dist',

    // where to put static assets (js/css/img/font/...)
    assetsDir: '',

    // filename for index.html (relative to outputDir)
    // indexPath: 'index.html',
    // indexPath: './dev/index.js',

    // whether filename will contain hash part
    filenameHashing: true,

    // boolean, use full build?
    runtimeCompiler: true,

    // deps to transpile
    transpileDependencies: [
        /* string or regex */
    ],

    // sourceMap for production build?
    productionSourceMap: false,// !process.env.VUE_CLI_TEST,

    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores

    // multi-page config
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js', // 模板来源
            template: 'public/index.html', // 在 dist/index.html 的输出
            filename: 'index.html', // 当使用 title 选项时，
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
    },
    integrity: false,

    css: {
        extract: true,
    },

    lintOnSave: false,

    devServer: {
        host: 'localhost',
        port: 10888,
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [],
        },
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
    },
}
