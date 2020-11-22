/**
 * 动态加载js
 * @param {String} url 资源路径
 * @param {Function} callback js下载成功回调, 可选
 * @param {boolean} async 是不是要异步加, 可选, 默认是
 */
function loadScript (url, callback, async = true) {
  let head = document.getElementsByTagName('head')[0];
  let script = document.createElement('script');
  let done = false;
  script.async = async;
  script.type = 'text/javascript';
  script.src = url;
  script.onload = script.onreadystatechange = function () {
    if (!done && (!this.readyState || /loaded|complete/.test(script.readyState))) {
      done = true;
      if (typeof callback === 'function') {
        callback();
      }
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
      head = script = null;
    }
  };
  head.appendChild(script);
}

module.exports = loadScript;
