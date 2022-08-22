# qiankun

## 创建子应用为vue，react的qiankun项目

### 创建react子应用

    1. 安装create-react-app
    2. 导出需要被父应用使用的钩子函数
    3. 让webpack可配置（https://www.jianshu.com/p/e396de262315）
    4. 修改webpack配置
       导出为umd，让父应用可以解析到

### 创建父应用（react）

    1. 安装create-react-app
    2. 配置路由 参考官网（https://qiankun.umijs.org/zh/guide/getting-started）
    3. 增加路由的container对应的DIV id=xxx 的容器
    4. 启动项目
