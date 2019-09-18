import React from 'react'
import csstree from 'css-tree' // 引入CSS语法树
import cssCollect from './cssCollect'
import rnCollect from './rnCollect'

// 传入的花括号样式
let entryCurlyBracesCss = '{color: red; width: 12px; border: 1px solid red; line-height: 16px;}';

// 花括号内CSS转义为语法树
let curlyBracesCssAST = csstree.parse(entryCurlyBracesCss, {
  context: 'block'
});

// 获取属性数组
let propertyArr = getCurlyBracesPropertyArr(curlyBracesCssAST.children.head);
console.log('获取属性数组', propertyArr);

// 检测CSS结果：true：属性都支持；false：有不支持的属性，具体看console；
let checkCSSResult = checkProperty(propertyArr, cssCollect);
console.log('检测结果：', checkCSSResult);

// checkResult如果是true，则转换驼峰，并校验是否是RN支持的属性；
if(checkCSSResult){
  console.log('准备转RN');
  let humpPropertyArr = propertyArr.map((item) => humpFun(item));
  console.log(111, humpPropertyArr);
  // 检测RN结果：true：属性都支持；false：有不支持的属性，具体看console；
  let checkRNResult = checkProperty(humpPropertyArr, rnCollect);
  console.log('检测结果：', checkRNResult);
}

/**
 * CSS属性字符串转换为驼峰命名
 * eg: humpFun('ab-cd-e'); // abCdE
 * @param str
 * @returns {string}
 */
function humpFun(str) {
  let arr = str.split('-');
  let newArr = [];
  arr.map((item, index) => {
    if (index) {
      newArr.push(item.charAt(0).toUpperCase() + item.slice(1));
    } else {
      newArr.push(item);
    }
  });
  return newArr.join('');
}

// 判断是否为CSS可支持的属性
function checkProperty(targetArr, collectArr) {
  if(!targetArr.length){
    console.log('传入数组为空，请校验！');
    return;
  }
  let flagArr = []; // 检查结果
  // 遍历数组，确定是否是可支持的属性；
  for (let i = 0; i < targetArr.length; i++) {
    let targetItem = targetArr[i];
    let flag = false;
    for (let j = 0; j < collectArr.length; j++) {
      let collectItem = collectArr[j];
      if(targetItem === collectItem){
        flag = true;
        break;
      }
    }
    flagArr.push(flag);
  }
  console.log(flagArr);

  // 打印属性支持情况，并返回结果（默认返回true，如有不支持的属性，则返回false）
  let returnFlag = true;
  for(let i = 0; i<flagArr.length; i++){
    let flagItem = flagArr[i];
      if(flagItem){
        console.log(`${targetArr[i]}属性可用；`);
      }else{
        returnFlag = false;
        console.log(`${targetArr[i]}属性不可用；`);
      }
  }
  return returnFlag;
}

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