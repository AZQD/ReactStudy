import React from 'react';
import qs from 'qs';

// 参考文档：https://www.npmjs.com/package/qs

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