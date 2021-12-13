// vue.config.js
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const resolve = (dir) => path.join(__dirname, dir)
const systemInfo = require('./src/config/systemStyleSetting')
const target = ''

const vueConfig = {
    publicPath: '/', // 公共路径
    indexPath: 'index.html', // 相对于打包路径index.html的路径
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    pwa: {}, // 向 PWA 插件传递选项。
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.symlinks(true) // 修复热更新失效
        // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
        config.plugin('html').tap(args => {
            // 修复 Lazy loading routes Error
            args[0].chunksSortMode = 'none'
            return args
        })
        config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'))
            .set('@request', resolve('src/request'))
    },
    configureWebpack: {
        plugins: [
            new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            })
        ]
    },
    css: {
        loaderOptions: {
            // 给 less-loader 传递 Less.js 相关选项
            less: {
                modifyVars: systemInfo,
                // 'primary-color': '#1DA57A',
                // 'link-color': '#1DA57A',
                // 'border-radius-base': '8px'
                javascriptEnabled: true

            }
        }
    },
    devServer: {
        // development server port 8000
        port: 8080,
        // 本地调试接口的时候，可以使用代理的方式
        publicPath: '/',
        proxy: {
            '/': {
                target: target,
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    }
}
module.exports = vueConfig
