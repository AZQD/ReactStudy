import React from 'react';
import qs from 'qs';

// hash	设置或返回从井号 (#) 开始的 URL（锚）。
// host	设置或返回主机名和当前 URL 的端口号。
// hostname	设置或返回当前 URL 的主机名。
// href	设置或返回完整的 URL。
// pathname	设置或返回当前 URL 的路径部分。
// port	设置或返回当前 URL 的端口号。
// protocol	设置或返回当前 URL 的协议。
// search	设置或返回从问号 (?) 开始的 URL（查询部分）。

// 例如：https://www.baidu.com/?a=1&b=2
// hash: ""
// host: "www.baidu.com"
// hostname: "www.baidu.com"
// href: "https://www.baidu.com/?a=1&b=2"
// origin: "https://www.baidu.com"
// pathname: "/"
// port: ""
// protocol: "https:"
// search: "?a=1&b=2"

// URL获取参数的方式：
// window.location.search;
// url.split('?')[1];

// qs参考文档：https://www.npmjs.com/package/qs

console.log(qs.parse('a=1&b=2')); // {a: "1", b: "2"}
console.log(qs.parse('?a=1&b=2', {ignoreQueryPrefix: true})); // {a: "1", b: "2"}
console.log(qs.parse('?a=1;b=2', {ignoreQueryPrefix: true, delimiter: ';'})); // {a: "1", b: "2"}


let obj = {c: 3, d: 4};
console.log(qs.stringify(obj)); // ?c=3&d=4
console.log(qs.stringify(obj, {addQueryPrefix: true})); // ?c=3&d=4

class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h3>qs常用方法</h3>
      </div>
    )
  }
}

export default Index;