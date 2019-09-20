import React from 'react'
import cssCollect from '../utils/cssCollect'
import rnCollect from '../utils/rnCollect'
import {
  postcssParse,
  postcssASTToPropValueArr,
  getCheckedPropArr,
  humpHandle
} from '../utils/util'
import './Postcss.less'


console.log('--------postcss begin----------');


// 1.传入花括号样式（后续使用node工具的fs读取文件）
let entryCss = '{color: red; width: 12px; border: 1px solid red; line-height: 16px; font-size: 16px; float: right; a: 1;}';
console.log('第一步：传入花括号样式：', entryCss);


// 2.花括号内CSS转义为语法树(postcss)
let postcssAST = postcssParse(entryCss);
console.log('第二步：花括号内CSS转义为语法树：', postcssAST);


// 3.通过语法树，获取属性prop和value数组
let propValueArr = postcssASTToPropValueArr(postcssAST);
console.log('第三步：通过语法树，获取属性数组：', propValueArr);


// 4.检测CSS支持结果：true：属性都支持；false：有不支持的属性，具体看console；
let {totalPropArr: cssTotalPropArr, passedPropArr: cssPassedPropArr, notPassedPropArr: cssNotPassedPropArr} = getCheckedPropArr(propValueArr, cssCollect);
console.log('第四步：检测CSS支持结果：', `W3School 的 CSS 参考手册校验${!cssNotPassedPropArr.length ? '通过' : '未通过'}`);


// 检测CSS支持结果如果是true，则转换驼峰，并校验是否是RN支持的属性；
// 目前不管是否是CSS支持的，都直接执行下一步；
// 5.css属性转换驼峰属性
let humpPropArr = cssTotalPropArr.map((item) => {
  return {
    ...item,
    prop: humpHandle(item.prop)
  }
});
console.log('第五步：转换驼峰：', humpPropArr);


// 6.检测RN主持结果：true：属性都支持；false：有不支持的属性，具体看console；
let {totalPropArr: RNTotalPropArr, passedPropArr: RNPassedPropArr, notPassedPropArr: RNNotPassedPropArr} = getCheckedPropArr(humpPropArr, rnCollect);
console.log('第六步：检测RN支持结果：', `React Native Styling Cheat Sheet校验${!RNNotPassedPropArr.length ? '通过' : '未通过'}`);


console.log('--------postcss end----------');


export default class Postcss extends React.Component {
  render() {
    return <div className="postcssBox">
      <h3>传入的花括号样式：</h3>
      <p>{entryCss}</p>
      <br/>
      <h3>CSS语法树转译结果：</h3>

      <div className="infoBox">
        <div className="infoItem">
          <h4>支持的CSS：</h4>
          {
            cssPassedPropArr && cssPassedPropArr.map((item, index) => {
              return <div className="item" key={index}>样式信息：<span className="value">{item.prop}: {item.value};</span>
              </div>
            })
          }
        </div>
        <div className="infoItem">
          <h4>不支持的CSS：</h4>
          {
            cssNotPassedPropArr && cssNotPassedPropArr.map((item, index) => {
              return <div className="item" key={index}>样式信息：<span
                className="value false">{item.prop}: {item.value};</span></div>
            })
          }
        </div>
      </div>

      <div className="infoBox">
        <div className="infoItem">
          <h4>支持的RN样式：</h4>
          {
            RNPassedPropArr && RNPassedPropArr.map((item, index) => {
              return <div className="item" key={index}>样式信息：<span className="value">{item.prop}: {item.value};</span>
              </div>
            })
          }
        </div>
        <div className="infoItem">
          <h4>不支持的RN样式：</h4>
          {
            RNNotPassedPropArr && RNNotPassedPropArr.map((item, index) => {
              return <div className="item" key={index}>样式信息：<span
                className="value false">{item.prop}: {item.value};</span></div>
            })
          }
        </div>
      </div>
    </div>
  }
}