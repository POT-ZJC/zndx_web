// vue.config.js
const path = require('path');
module.exports = {
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
      } else {
        // 为开发环境修改配置...
        // 只会在 开发环境中生效，当我们使用 build 去打包一个项目的时候，那么这里的配置不会生效

      }

      return {
          resolve: {
              alias: {
                  '@imgs': path.resolve(__dirname, './src/assets/imgs'),
              }
          }
      }
    },
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
    outputDir: "zndx_web",
    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "assets",
    //指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
    // indexPath: "myIndex.html",
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    filenameHashing: false,
    
    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: false,
    //如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
    // lintOnSave: process.env.NODE_ENV !== 'production',
    
    //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
    // runtimeCompiler: false,
    
    /**
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
     *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
     *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
     * */
    productionSourceMap: false,
    
    // 它支持webPack-dev-server的所有选项
    devServer: {
        host: 'localhost',
        port: 8088,
        https: false,
        hotOnly: false,
        proxy: {
            /*
             * 配置跨域；配置多个跨域；
             * 需要重启，方能生效；
             */
            '/api': {
                target: 'http://113.204.236.218:30255', //跨域地址
                // changeOrigin: true,  // 修改自身服务器的域名, 与后端接口一致, 形成跨域
                ws: false,  // 是否使用https
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // before: app => {
        // }
    }
}