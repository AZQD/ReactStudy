import React from 'react'
import classNames from 'classnames';
import cssCollect from './cssCollect'
import rnCollect from './rnCollect'
import {csstreeParse, getCurlyBracesPropertyArr, checkProperty, humpFun} from './util'
import './cssTree.less'


// 1.传入花括号样式（后续使用node工具的fs读取文件）
let entryCurlyBracesCss = '{color: red; width: 12px; border: 1px solid red; line-height: 16px; font-size: 16px; float: right;}';
console.log('第一步：传入花括号样式：', entryCurlyBracesCss);


// 2.花括号内CSS转义为语法树
let curlyBracesCssAST = csstreeParse(entryCurlyBracesCss);
console.log('第二步：花括号内CSS转义为语法树：', curlyBracesCssAST);


// 3.通过语法树，获取属性数组
let propertyArr = getCurlyBracesPropertyArr(curlyBracesCssAST.children.head);
console.log('第三步：通过语法树，获取属性数组：', propertyArr);


// 4.检测CSS支持结果：true：属性都支持；false：有不支持的属性，具体看console；
let {checkFlagArr: checkFlagCSSArr, checkReturnFlag: checkCSSResult} = checkProperty(propertyArr, cssCollect);
console.log('第四步：检测CSS支持结果：', `W3School 的 CSS 参考手册校验${checkCSSResult ? '通过' : '未通过'}`);


// 检测CSS支持结果如果是true，则转换驼峰，并校验是否是RN支持的属性；
let checkFlagRNArr = [], humpPropertyArr = [];
if (checkCSSResult) {
  // 5.css属性转换驼峰属性
  humpPropertyArr = propertyArr.map((item) => humpFun(item));
  console.log('第五步：转换驼峰：', humpPropertyArr);


  // 6.检测RN主持结果：true：属性都支持；false：有不支持的属性，具体看console；
  let {checkFlagArr, checkReturnFlag: checkRNResult} = checkProperty(humpPropertyArr, rnCollect);
  checkFlagRNArr = checkFlagArr;
  console.log('第六步：检测RN支持结果：', `React Native Styling Cheat Sheet校验${checkRNResult ? '通过' : '未通过'}`);
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
          return <div key={index} className="infoBox">
            <div className="item">属性下标：<span className="value">{index}</span></div>
            <div className="item">属性名称：<span className="value">{item}</span></div>
            <div className="item">CSS支持情况：<span
              className={classNames('value', {'false': !checkFlagCSSArr[index]})}>{checkFlagCSSArr[index] ? '支持' : '不支持'}</span>
            </div>
            {
              checkFlagRNArr.length > 0 &&
              <div className="item">RN支持情况：<span
                className={classNames('value', {'false': !checkFlagRNArr[index]})}>{checkFlagRNArr[index] ? '支持' : '不支持'}</span>
              </div>
            }
            {
              checkFlagRNArr.length > 0 &&
              <div className="item">属性名称：<span className="value">{checkFlagRNArr[index] ? humpPropertyArr[index] : '--'}</span></div>
            }
          </div>;
        })
      }
    </div>
  }
}