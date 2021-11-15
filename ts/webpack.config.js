const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = env => {
    console.log(env, 'env.mode');
    return ({
            context: process.cwd(), // http://nodejs.cn/api/process/process_cwd.html
            entry: './src/index.ts',
            mode: 'development', // 
            devtool: 'source-map', // 映射方式
            output: {
                path: path.resolve(__dirname, 'dist'), // __dirname 表示文件的绝对路径,一个全局变量
                filename: 'bundle.js', // 文件名增加hash hash,chunkHash,contentHash
            },
            resolve: {
                extensions: ['.js', '.ts', '.tsx'],
            },
            module: {
                rules:[
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                      },
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template:'./src/index.html'
                }),
                new CleanWebpackPlugin({
                    cleanOnceBeforeBuildPatterns:['**/*']
                }),
            ],
            devServer: {
                contentBase: path.resolve(__dirname, 'static'), // 当前目录下的文件夹作为公共资源使用
                writeToDisk:true, // 打包后的文件写到硬盘上
                compress:true, // 是否启动压缩
                port:8080, // 指定HTTP服务器的端口号
                open:false, // 是否自动打开浏览器
                proxy:{
                    '/api': {
                        target: 'http://localhost:3000',
                        pathRewrite: { // 正则匹配，路径重写
                            '^/api': ''
                        }
                    }
                }
            },
            watch: true
        })
}
