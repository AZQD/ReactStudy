import React from 'react'
import csstree from 'css-tree' // 引入CSS语法树

// 传入的花括号样式
let entryCurlyBracesCss = '{color: red; width: 12px; border: 1px solid red;}';

// 花括号内CSS转义为语法树
let curlyBracesCssAST = csstree.parse(entryCurlyBracesCss, {
  context: 'block'
});

// 获取属性数组
let propertyArr = getCurlyBracesPropertyArr(curlyBracesCssAST.children.head);
console.log('获取属性数组', propertyArr);

// 使用递归函数，遍历语法树，将属性合并成数组，并返回；
function getCurlyBracesPropertyArr(params) {
  if (typeof params !== 'object') {
    console.log('语法树格式有误，请检查格式！');
    return;
  }
  if (params === null) { // 为空返回空数组，避免报错；
    return [];
  }
  const {data, next} = params;
  if (data) {
    console.log('data', data);
    if (next) {
      console.log('next', next);
      return [data.property].concat(getCurlyBracesPropertyArr(next)); // 递归函数
    } else {
      console.log('没有next');
      return [data.property];
    }
  } else {
    console.log('没有data');
    return [];
  }
}


export default class CssTree extends React.Component {
  render() {
    return <div>
      <h3>传入的花括号样式：</h3>
      <p>{entryCurlyBracesCss}</p>
      <br/>
      <h3>CSS语法树转译结果：</h3>
      {
        propertyArr && propertyArr.map((item, index) => {
          return <div key={index}>属性名称：{item}；属性下标：{index};</div>;
        })
      }
    </div>
  }
}