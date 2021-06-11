import exec from 'child_process';
const execFunc = exec.exec;
const openDefaultBrowser = function (url) {
  console.log(process.platform)
  switch (process.platform) {
    case "darwin":
      execFunc('open ' + url);
      break;
    case "win32":
      execFunc('start ' + url);
      break;
    default:
      execFunc('xdg-open', [url]);
  }
}

export default openDefaultBrowser;
