/**
 * CSS TO RN 常用API
 */
/*
import React from 'react'
import transform, { getPropertyName, getStylesForProperty } from 'css-to-react-native'
import './Index.less'


console.log('transform:', transform);
let result = transform([
  ['font', 'bold 14px/16px "Helvetica"'],
  ['margin', '5px 7px 2px'],
  ['border-left-width', '5px'],
  ['transform', 'translate(10px, 5px) scale(5)'],
]);
console.log('result1:', result);


let result2 = getPropertyName('border-width');
let result3 = getStylesForProperty('borderWidth', '1px 0px 2px 0px');
console.log('result2:', result2);
console.log('result3:', result3);


let result41 = transform([['border-radius', '50px']]);
console.log('result41:', result41);

let result42 = getStylesForProperty('borderRadius', '50px');
console.log('result42:', result42);


let result51 = transform([['border-radius', '50px']], ['borderRadius']);
console.log('result51:', result51);

let result52 = getStylesForProperty('borderRadius', '50px', false);
console.log('result52:', result52);


export default class Index extends React.Component {
  render() {
    return <div className="container">
      CSS TO RN
    </div>
  }
}*/


/**
 * CSS TO RN：获取具体的方法
 */

/*
import React from 'react'
import camelizeStyleName from 'camelize'
import { getStylesForProperty } from 'css-to-react-native'
import './Index.less'
document.write(getStylesForProperty);

// transform第二个参数接收字符串，哪个不需要处理简写，如margin；
/!*
* issue：https://github.com/styled-components/css-to-react-native/issues/124
* 如果tranform函数的第二个参数shorthandBlacklist误传一个字符串，比如：‘fontmargin’，同样会允许使用缩写。
* 或许在这里添加TypeScript或者校验一下数据类型会更严谨。
*
* *!/
function transform (rules) {
  console.log(23, arguments);
  console.log(23, arguments.length);
  console.log(23, arguments[1]);
  var shorthandBlacklist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  console.log(1111, shorthandBlacklist);
  return rules.reduce(function (accum, rule) {
    var propertyName = getPropertyName(rule[0]);
    var value = rule[1];
    /!*是否要用简写，存在的坑，第二个参数如果是fontmaigin同样会被作为不处理简写，不够严谨，最合理的方式应该是判断数组*!/
    console.log(34, shorthandBlacklist instanceof Object);
    var allowShorthand = shorthandBlacklist.indexOf(propertyName) === -1;
    return Object.assign(accum, getStylesForProperty(propertyName, value, allowShorthand));
  }, {});
}

function getPropertyName (propName) {
  var isCustomProp = /^--\w+/.test(propName);
  if (isCustomProp) {
    return propName;
  }
  return camelizeStyleName(propName);
}


/!*function getStylesForProperty (propName, inputValue, allowShorthand) {
  var isRawValue = allowShorthand === false || !(propName in transforms);
  var propValues = isRawValue ? _defineProperty({}, propName, transformRawValue(inputValue)) : transformShorthandValue(propName, inputValue.trim());
  return propValues;
}*!/


console.log('transform:', transform([
  ['font', 'bold 14px/16px "Helvetica"'],
  ['margin', '5px 7px 2px'],
  ['border-left-width', '5px'],
  ['transform', 'translate(10px, 5px) scale(5)'],
], ['fontsmargins']));
*/


import React from 'react'
import {getCheckedPropArr, humpHandle, postcssASTToPropValueArr, postcssParse} from "../AST/utils/util";


console.log('----------css-to-react-native begin------------');

import transform from 'css-to-react-native'

let result = transform([
  ['font', 'bold 14px/16px "Helvetica"'],
  ['background', 'yellow'],
  ['margin', '5px 7px 2px'],
  ['text-align', 'center'],
  ['border-radius', '12px'],
  ['text-decoration', 'underline'],
  // ['border-left-width', '5px'],
  ['border', '5px solid red'],
  ['transform', 'translate(10px, 5px) scale(5)'],
]);
console.log('transform:', result);

console.log('----------css-to-react-native end------------');


console.log('----------纯粹处理转RN begin------------');

let entryCss = '.container{text-decoration: underline solid blue; text-shadow: 1px 2px 3px red; box-shadow: 1px 2px 3px 4px .5;background: yellows; border-left: 1px solid red; padding: 10px 20px; margin: 12px 20px 15px 34px; color: red; line-height: 16px; border: 1px solid red; float: right; ab-cd: 12px;}';

// 1.传入花括号样式（后续使用node工具的fs读取文件）
console.log('第一步：传入花括号样式：', entryCss);

// 2.花括号内CSS转义为语法树(postcss)
let postcssAST = postcssParse(entryCss);
console.log('第二步：花括号内CSS转义为语法树：', postcssAST);

// 3.通过语法树，获取属性prop和value数组
let propValueArr = postcssASTToPropValueArr(postcssAST);
console.log('第三步：通过语法树，获取属性数组：', propValueArr);

// 4.检测CSS支持结果：true：属性都支持；false：有不支持的属性，具体看console；
let {totalPropArr: cssTotalPropArr, passedPropArr: cssPassedPropArr, notPassedPropArr: cssNotPassedPropArr} = getCheckedPropArr(propValueArr, 'postcss', 'css');
console.log('第四步：检测CSS支持结果：', `W3School 的 CSS 参考手册校验${!cssNotPassedPropArr.length ? '通过' : '未通过'}`);
console.log('第四步：检测CSS支持结果：', cssTotalPropArr);

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


import {rnCollectFilter, rnCollectFilterAbbrevia} from '../AST/utils/rnCollectFilter'
import marginAbbrev from './abbreviate/margin';
import paddingAbbrev from './abbreviate/padding';
import borderAbbrev from './abbreviate/border';
import borderLeftAbbrev from './abbreviate/borderLeft';
import borderRightAbbrev from './abbreviate/borderRight';
import borderTopAbbrev from './abbreviate/borderTop';
import borderBottomAbbrev from './abbreviate/borderBottom';
import backgroundAbbrev from './abbreviate/background';
import boxShadowAbbrev from './abbreviate/boxShadow';
import texShadowAbbrev from './abbreviate/texShadow';
import textDecorationAbbrev from './abbreviate/textDecoration';


handlePropValue(humpPropArr);

function handlePropValue (humpPropArr) {
  if (!humpPropArr.length) {
    console.log('传入数组为空，请校验！');
    return false;
  }
  let passedPropArr = []; // 通过的数组
  let notPassedPropArr = []; // 未通过的数组
  // 遍历数组，确定是否是可支持的属性；item示例：{prop: "color", value: "red"}
  humpPropArr.map((item, index) => {
    item.value = item.value.split(' ').map(valueItem => {
      if (/\dpx$/.test(valueItem)) { // 单位处理!!!(可以扩展处理rem)思路：value值先split，正则处理每一块，然后再join；
        return parseFloat(valueItem);
      } else {
        return valueItem;
      }
    }).join(' ');
    if (rnCollectFilter.includes(item.prop)) {// js判断某个值是否在rnCollect数组中
      if (rnCollectFilterAbbrevia.includes(item.prop)) {// js判断某个值是否在简写数组中
        console.log('RN支持的样式，且要处理简写的有：', item);
        let valueArr = item.value.split(' ');
        let abbrevArr = [
          {type: 'margin', abbrevFun: marginAbbrev},
          {type: 'padding', abbrevFun: paddingAbbrev},
          {type: 'border', abbrevFun: borderAbbrev},
          {type: 'borderLeft', abbrevFun: borderLeftAbbrev},
          {type: 'borderRight', abbrevFun: borderRightAbbrev},
          {type: 'borderTop', abbrevFun: borderTopAbbrev},
          {type: 'borderBottom', abbrevFun: borderBottomAbbrev},
          {type: 'background', abbrevFun: backgroundAbbrev},
          {type: 'boxShadow', abbrevFun: boxShadowAbbrev},
          {type: 'textShadow', abbrevFun: texShadowAbbrev},
          {type: 'textDecoration', abbrevFun: textDecorationAbbrev},
        ];
        abbrevArr.map(abbrevItem => {
          if (item.prop === abbrevItem.type) {
            passedPropArr.push.apply(passedPropArr, abbrevItem.abbrevFun(valueArr));
          }
        });
      } else {
        console.log('RN支持的样式有：', item);
        passedPropArr.push(item);
      }
    } else {
      console.log('不是RN支持的样式有：', item);
      notPassedPropArr.push(item);
    }
  });

  const totalPropArr = passedPropArr.concat(notPassedPropArr);
  console.log('最终结果passedPropArr：', passedPropArr);
  console.log('最终结果notPassedPropArr：', notPassedPropArr);
  console.log('最终结果的数组：', totalPropArr);
  return totalPropArr;
}


console.log('----------纯粹处理转RN end------------');

export default class Index extends React.Component {
  render () {
    return <div className="container">
      CSS TO RN
    </div>
  }
}
