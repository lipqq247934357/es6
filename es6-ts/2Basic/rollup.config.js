// 默认rollup 打包的时候会查找当前目录下 rollup.config.js这个文件
// 采用es模块来编写配置文件

// node中有模块规范默认是 commonjs , 也可以改成esm模块规范

import ts from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { fileURLToPath } from "url"

// 当前文件的绝对路径 file://xxxx/xxx/xxx
const __filename = fileURLToPath(import.meta.url); // 当前文件的绝对路径
const __dirname = path.dirname(__filename); // 当前文件所在的文件夹目录 绝对路径

// 打包的配置对象
export default {
    input: './src/index.ts', // 项目入口
    output: {
        file: path.resolve(__dirname, 'dist/bundle.js'), // 当前的文件在当前目录下的dist目录
        format: 'iife', // (function(){})()
        sourcemap:true
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts']
        }), // （第三方包的入口）入口文件可以是js 也可以是ts
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        })
    ]
}