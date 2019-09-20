import csstree from 'css-tree'
import postcss from 'postcss'


/**
 * 花括号内CSS转义为语法树 (csstree使用)
 * @param entryCss
 * @returns {number | any}
 */
export function csstreeParse(entryCss) {
  return csstree.parse(entryCss, {
    // csstree参数配置：// https://github.com/csstree/csstree/blob/HEAD/docs/parsing.md
    context: 'block'
  });
}


/**
 * 使用递归函数，遍历语法树，将属性合并成数组，并返回；(csstree使用)
 * @param csstreeAST
 * @returns {*}
 */
export function csstreeASTToPropArr(csstreeAST) {
  if (typeof csstreeAST !== 'object') {
    console.log('语法树格式有误，请检查格式！');
    return;
  }
  if (csstreeAST === null) { // 为空返回空数组，避免报错；
    return [];
  }
  const {data, next} = csstreeAST;
  if (data) {
    // console.log('data', data);
    if (next) {
      // console.log('next', next);
      return [data.property].concat(csstreeASTToPropArr(next)); // 递归函数
    } else {
      // console.log('没有next');
      return [data.property];
    }
  } else {
    console.log('没有data');
    return [];
  }
}


/**
 * 花括号内CSS转义为语法树 (postcss使用)
 * @param entryCss
 * @returns {number | any}
 */
export function postcssParse(entryCss) {
  let postcssAST = postcss.parse(entryCss);
  console.log('postcss语法树：', postcssAST);
  return postcssAST;
}


/**
 * 遍历语法树，获取属性prop和value数组 (postcss使用)
 * @param postcssAST
 * @returns {Array}
 */
export function postcssASTToPropValueArr(postcssAST) {
  let propValueArr = [];
  postcssAST.nodes && postcssAST.nodes.length > 0 && postcssAST.nodes[0].nodes.map((item) => {
    propValueArr.push({prop: item.prop, value: item.value});
  });
  // console.log('解析后返回数组：', propValueArr);
  return propValueArr;
}

/**
 * 判断是否为CSS/RN可支持的属性，获取校验后的数组；
 * @param targetArr
 * @param collectArr
 * @returns {*}
 */
export function getCheckedPropArr(targetArr, collectArr) {
  if (!targetArr.length) {
    console.log('传入数组为空，请校验！');
    return false;
  }
  let passedPropArr = []; // 通过的数组
  let notPassedPropArr = []; // 未通过的数组
  // 遍历数组，确定是否是可支持的属性；
  for (let i = 0; i < targetArr.length; i++) {
    let targetItem = targetArr[i]; // csstree
    let targetItemProp = targetItem;
    if (typeof targetItem === 'object') { // postcss
      targetItemProp = targetItem.prop;
    }
    let flag = false;
    for (let j = 0; j < collectArr.length; j++) {
      let collectItem = collectArr[j];
      if (targetItemProp === collectItem) {
        flag = true;
        break;
      }
    }
    (flag ? passedPropArr : notPassedPropArr).push(targetArr[i]);
  }
  let totalPropArr = targetArr; // 后面要处理简写
  let result = {totalPropArr, passedPropArr, notPassedPropArr};
  console.log('获取校验后的数组：', result);
  return result;
}


/**
 * CSS属性字符串转换为驼峰命名
 * eg: humpHandle('ab-cd-e'); // abCdE
 * @param str
 * @returns {string}
 */
export function humpHandle(str) {
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