import React from 'react'
import cssCollect from '../utils/cssCollect'
import rnCollect from '../utils/rnCollect'
import {
  csstreeParse,
  csstreeASTToPropArr,
  getCheckedPropArr,
  humpHandle
} from '../utils/util'
import './cssTree.less'


// http://api.postcss.org/postcss.html#.parse
// https://segmentfault.com/a/1190000015155639
// import postcss from 'postcss'
// console.log(postcss);
// var root = postcss.parse('color: red; width: 12px; border: 1px solid red;');
// console.log(111, root);
// console.log(111, root.nodes);
// for(let i = 0; i<root.nodes.length; i++){
//     let item = root.nodes[i];
//     console.log(item.prop);
//     console.log(item.value);
// }
//
//
// import parseCSS from "css/lib/parse";
// console.log(parseCSS);
// const { stylesheet } = parseCSS(`.foo { font-size: 1vh; } .foo2:after { color: red; border: 1px solid red;}`);
// console.log(222, stylesheet);
// console.log(222, stylesheet.rules);
// let rules = stylesheet.rules;
// for(let i = 0; i<rules.length; i++){
//     console.log(rules[i].selectors);
//     console.log(rules[i].selectors[0]);
//     let declarations = rules[i].declarations;
//     for(let j = 0; j<declarations.length; j++){
//         console.log(declarations[j].property);
//         console.log(declarations[j].value);
//     }
// }

console.log('--------csstree begin----------');


// 1.传入花括号样式（后续使用node工具的fs读取文件）
let entryCss = '{color: red; width: 12px; border: 1px solid red; line-height: 16px; font-size: 16px; float: right; a: 1;}';
console.log('第一步：传入花括号样式：', entryCss);


// 2.花括号内CSS转义为语法树(csstree)
let csstreeAST = csstreeParse(entryCss);
console.log('第二步：花括号内CSS转义为语法树：', csstreeAST);


// 3.通过语法树，获取属性数组
let propArr = csstreeASTToPropArr(csstreeAST.children.head);
console.log('第三步：通过语法树，获取属性数组：', propArr);


// 4.检测CSS支持结果：true：属性都支持；false：有不支持的属性，具体看console；
let {totalPropArr: cssTotalPropArr, passedPropArr: cssPassedPropArr, notPassedPropArr: cssNotPassedPropArr} = getCheckedPropArr(propArr, cssCollect);
console.log('第四步：检测CSS支持结果：', `W3School 的 CSS 参考手册校验${!cssNotPassedPropArr.length ? '通过' : '未通过'}`);


// 检测CSS支持结果如果是true，则转换驼峰，并校验是否是RN支持的属性；
// 目前不管是否是CSS支持的，都直接执行下一步；
// 5.css属性转换驼峰属性
let humpPropArr = cssTotalPropArr.map((item) => humpHandle(item));
console.log('第五步：转换驼峰：', humpPropArr);


// 6.检测RN主持结果：true：属性都支持；false：有不支持的属性，具体看console；
let {totalPropArr: RNTotalPropArr, passedPropArr: RNPassedPropArr, notPassedPropArr: RNNotPassedPropArr} = getCheckedPropArr(humpPropArr, rnCollect);
console.log('第六步：检测RN支持结果：', `React Native Styling Cheat Sheet校验${!RNNotPassedPropArr.length ? '通过' : '未通过'}`);


console.log('--------csstree end----------');


export default class CssTree extends React.Component {
  render() {
    return <div>
      <h3>传入的花括号样式：</h3>
      <p>{entryCss}</p>
      <br/>
      <h3>CSS语法树转译结果：</h3>

      <div className="infoBox">
        <div className="infoItem">
          <h4>支持的CSS：</h4>
          {
            cssPassedPropArr && cssPassedPropArr.map((item, index) => {
              return <div className="item" key={index}>属性名称：<span className="value">{item}</span></div>
            })
          }
        </div>
        <div className="infoItem">
          <h4>不支持的CSS：</h4>
          {
            cssNotPassedPropArr && cssNotPassedPropArr.map((item, index) => {
              return <div className="item" key={index}>属性名称：<span className="value false">{item}</span></div>
            })
          }
        </div>
      </div>

      <div className="infoBox">
        <div className="infoItem">
          <h4>支持的RN样式：</h4>
          {
            RNPassedPropArr && RNPassedPropArr.map((item, index) => {
              return <div className="item" key={index}>属性名称：<span className="value">{item}</span></div>
            })
          }
        </div>
        <div className="infoItem">
          <h4>不支持的RN样式：</h4>
          {
            RNNotPassedPropArr && RNNotPassedPropArr.map((item, index) => {
              return <div className="item" key={index}>属性名称：<span className="value false">{item}</span></div>
            })
          }
        </div>
      </div>
    </div>
  }
}

/*
* 问题汇总：
* 1.css支持，但是RN不支持的，怎么处理；比如：float；
* 2.css不支持的，但是RN支持，怎么处理；比如：backfaceVisibility；
* 3.语法树模拟器和控制台打印出来的不太一致；
* 4.postcss插件使用；
* */