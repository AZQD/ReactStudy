import csstree from 'css-tree' // 引入CSS语法树


/**
 * 花括号内CSS转义为语法树(csstree)
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
 * @param params
 * @returns {*}
 */
export function csstreeASTToPropArr(params) {
  if (typeof params !== 'object') {
    console.log('语法树格式有误，请检查格式！');
    return;
  }
  if (params === null) { // 为空返回空数组，避免报错；
    return [];
  }
  const {data, next} = params;
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
    if (typeof targetItem === 'object') { // postcss
      targetItem = targetItem.prop;
    }
    let flag = false;
    for (let j = 0; j < collectArr.length; j++) {
      let collectItem = collectArr[j];
      if (targetItem === collectItem) {
        flag = true;
        break;
      }
    }
    (flag ? passedPropArr : notPassedPropArr).push(targetItem);
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