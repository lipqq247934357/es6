let str = `README.md browser cover dockerStart.sh docs index.js lib node_modules output package-lock.json package.json publish.sh publish2.sh publish3.sh publish4.sh remote-debug.md remote.js src start.config.js template-store test`;

console.log("str.split(' ').length", str.split(' ').length);
str = str.replace(/ +/g, ',')
// 删除不需要的问题件
str = str.replace('cover,', '')
str = str.replace('node_modules,', '')
str = str.replace('output', '')
str = str.replace('browser,', '')
// 增加需要文件
str += ',browser/90_0_4430_85/ungoogled-chromium_90.0.4430.85_3.vaapi_linux'
console.log('str\n', str);
