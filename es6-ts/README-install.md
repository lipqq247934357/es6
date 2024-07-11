# typescript 安装&使用

## 全局安装

1.npm install typescript -g 全局的包只能在命令行中使用

2.tsc ./1demo/1.ts 就会将1.ts转化成1.js

## code runner 运行

1.安装code runner
2.安装 ts-node
  npm install ts-node -g

这种比较适合临时测试

## 使用构建工具将代码转化成js去运行

  1.webpack
  2.rollup
  3.esbulid
  4.vite

### 使用rollup启动开发

  1.安装依赖
  npm i rollup typescript rollup-plugin-typescript2 @rollup/plugin-node-resolve -D
  2.新建rollup.config.js
  3.在rollup.config.js中加入如下代码:

```js
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
```

具体功能没看，这部分不属于学习重点；

## 增加入口和代码

1.新建src/index.ts
2.增加tsconfig.json
3.在src下增加.env.d.ts
4.package.json增加

```json
  "scripts": {
    "dev": "rollup -c -w"
  },
```

5.npm run dev启动；
