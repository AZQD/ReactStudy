import React from 'react'
import postcss from 'postcss'
import cssCollect from '../utils/cssCollect'
import rnCollect from '../utils/rnCollect'
import {csstreeParse, getCurlyBracesPropertyArr, checkProperty, humpFun} from '../utils/util'
import classNames from 'classnames';

// 1.传入花括号样式（后续使用node工具的fs读取文件）
let entryCurlyBracesCss = '{color: red; width: 12px; border: 1px solid red; line-height: 16px; font-size: 16px; float: right; a: 1;}';
console.log('第一步：传入花括号样式：', entryCurlyBracesCss);

// 2.花括号内CSS转义为语法树(postcss)，遍历语法树，获取属性prop和value数组
let propValueArr = getCurlyBracesPropValueArr(entryCurlyBracesCss);


// 4.检测CSS支持结果：true：属性都支持；false：有不支持的属性，具体看console；
// let {checkFlagArr: checkFlagCSSArr, checkReturnFlag: checkCSSResult} = checkProperty(propertyArr, cssCollect);
// console.log('第四步：检测CSS支持结果：', `W3School 的 CSS 参考手册校验${checkCSSResult ? '通过' : '未通过'}`);

postcssCheckProperty(propValueArr);
function postcssCheckProperty(propValueArr) {
  let propArr = propValueArr.map((item => item.prop));
  let aa = checkProperty(propArr, cssCollect);
}









/**
 * 花括号内CSS转义为语法树(postcss)
 * 遍历语法树，获取属性prop和value数组
 * @param entryCurlyBracesCss
 * @returns {Array}
 */
function getCurlyBracesPropValueArr(entryCurlyBracesCss) {
  let root = postcss.parse(entryCurlyBracesCss);
  console.log('postcss语法树：', root);
  let propValueArr = [];
  root.nodes && root.nodes.length>0 && root.nodes[0].nodes.map((item) => {
    propValueArr.push({prop: item.prop, value: item.value});
  });
  console.log('解析后返回数组：', propValueArr);
  return propValueArr;
}





export default class Postcss extends React.Component {
  render() {
    return <div>
      Postcss
    </div>
  }
}