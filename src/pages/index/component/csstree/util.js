import csstree from 'css-tree' // 引入CSS语法树


/**
 * 花括号内CSS转义为语法树
 * @param entryCurlyBracesCss
 * @returns {number | any}
 */
export function csstreeParse(entryCurlyBracesCss) {
  return csstree.parse(entryCurlyBracesCss, {
    // csstree参数配置：// https://github.com/csstree/csstree/blob/HEAD/docs/parsing.md
    context: 'block'
  });
}


/**
 * 使用递归函数，遍历语法树，将属性合并成数组，并返回；
 * @param params
 * @returns {*}
 */
export function getCurlyBracesPropertyArr(params) {
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


/**
 * 判断是否为CSS/RN可支持的属性
 * @param targetArr
 * @param collectArr
 * @returns {boolean}
 */
export function checkProperty(targetArr, collectArr) {
  if (!targetArr.length) {
    console.log('传入数组为空，请校验！');
    return;
  }
  let checkFlagArr = []; // 检查结果
  // 遍历数组，确定是否是可支持的属性；
  for (let i = 0; i < targetArr.length; i++) {
    let targetItem = targetArr[i];
    let flag = false;
    for (let j = 0; j < collectArr.length; j++) {
      let collectItem = collectArr[j];
      if (targetItem === collectItem) {
        flag = true;
        break;
      }
    }
    checkFlagArr.push(flag);
  }

  // 打印属性支持情况，并返回结果（默认返回true，如有不支持的属性，则返回false）
  let checkReturnFlag = true;
  for (let i = 0; i < checkFlagArr.length; i++) {
    let flagItem = checkFlagArr[i];
    if (flagItem) {
      console.log(`${targetArr[i]}属性可用；`);
    } else {
      checkReturnFlag = false;
      console.log(`${targetArr[i]}属性不可用；`);
    }
  }
  let result = {checkFlagArr, checkReturnFlag};
  console.log(result);
  return result;
}


/**
 * CSS属性字符串转换为驼峰命名
 * eg: humpFun('ab-cd-e'); // abCdE
 * @param str
 * @returns {string}
 */
export function humpFun(str) {
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