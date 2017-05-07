npm语法总结
=
[npm官网](https://www.npmjs.com/)<br>

npm基本语法总结：
1.npm是什么：
  npm是一个可以存放js代码的仓库，可以管理，复用，使用别人的js代码。
2.npm的安装：
  安装nodejs，nodejs包含npm
npm包有两种安装方式：install locally 或者install globally
3.install locally：npm install <package_name>??
or by 
package.json??
4.更新本地包： npm update 
5.删除本地包： npm uninstall <package_name>
删除，并且在package.json中配置了的 npm uninstall --save <package_name>
删除，并且在package.json中配置了的，并且是开发依赖安装的 npm uninstall --save-dev <package_name>
6.全局操作
  全局安装：npm install -g <package_name>
  全局更新：npm update -g <package_name>
  全局删除：npm uninstall -g <package_name>
