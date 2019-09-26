import csstree from 'css-tree';
import postcss from 'postcss';
import cssCollect from './cssCollect';
import rnCollect from './rnCollect';


/**
 * 花括号内CSS转义为语法树 (csstree使用)
 * @param entryCss
 * @returns {number | any}
 */
export function csstreeParse (entryCss) {
  return csstree.parse(entryCss, {
    // csstree参数配置：// https://github.com/csstree/csstree/blob/HEAD/docs/parsing.md
    context: 'block',
  });
}


/**
 * 使用递归函数，遍历语法树，将属性合并成数组，并返回；(csstree使用)
 * @param csstreeAST
 * @returns {*}
 */
export function csstreeASTToPropArr (csstreeAST) {
  if (typeof csstreeAST !== 'object') {
    console.log('语法树格式有误，请检查格式！');
    return;
  }
  if (csstreeAST === null) { // 为空返回空数组，避免报错；
    return [];
  }
  const { data, next } = csstreeAST;
  if (data) {
    // console.log('data', data);
    if (next) {
      // console.log('next', next);
      return [data.property].concat(csstreeASTToPropArr(next)); // 递归函数
    }
    // console.log('没有next');
    return [data.property];
  }
  console.log('没有data');
  return [];
}


/**
 * 花括号内CSS转义为语法树 (postcss使用)
 * @param entryCss
 * @returns {number | any}
 */
export function postcssParse (entryCss) {
  const postcssAST = postcss.parse(entryCss);
  console.log('postcss语法树：', postcssAST);
  return postcssAST;
}


/**
 * 遍历语法树，获取属性prop和value数组 (postcss使用)
 * @param postcssAST
 * @returns {Array}
 */
export function postcssASTToPropValueArr (postcssAST) {
  const propValueArr = [];
  postcssAST.nodes && postcssAST.nodes.length > 0 && postcssAST.nodes[0].nodes.map((item) => {
    propValueArr.push({ prop: item.prop, value: item.value });
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
export function getCheckedPropArr (targetArr, ASTTYPE, whiteListType) {
  const collectArr = whiteListType === 'rn' ? rnCollect : cssCollect;
  if (!targetArr.length) {
    console.log('传入数组为空，请校验！');
    return false;
  }
  let passedPropArr = []; // 通过的数组
  const notPassedPropArr = []; // 未通过的数组
  // 遍历数组，确定是否是可支持的属性；
  for (let i = 0; i < targetArr.length; i++) {
    const targetItem = targetArr[i]; // csstree
    let targetItemProp = targetItem;
    if (ASTTYPE === 'postcss') { // postcss
      targetItemProp = targetItem.prop;
    }
    let flag = 0;// 0:不通过；1：直接通过；2：简写通过；
    for (let j = 0; j < collectArr.length; j++) {
      const collectItem = collectArr[j];
      if (targetItemProp === collectItem) {
        flag = 1;
        break;
      }

      // 处理简写：只处理RN
      if (whiteListType === 'rn') {
        if (ASTTYPE === 'csstree') { // csstree
          if (targetItemProp === 'border') {
            flag = 2;
            passedPropArr = passedPropArr.concat([
              'border-left',
              'border-right',
              'border-top',
              'border-bottom',
            ]);
            break;
          }
          if (targetItemProp === 'margin') {
            flag = 2;
            passedPropArr = passedPropArr.concat([
              'margin-left',
              'margin-right',
              'margin-top',
              'margin-bottom',
            ]);
            break;
          }
          if (targetItemProp === 'padding') {
            flag = 2;
            passedPropArr = passedPropArr.concat([
              'padding-left',
              'padding-right',
              'padding-top',
              'padding-bottom',
            ]);
            break;
          }
        }
        if (ASTTYPE === 'postcss') { // postcss
          if (targetItemProp === 'border') {
            flag = 2;
            passedPropArr = passedPropArr.concat([
              {
                ...targetItem,
                prop: 'borderLeft',
              },
              {
                ...targetItem,
                prop: 'borderRight',
              },
              {
                ...targetItem,
                prop: 'borderTop',
              },
              {
                ...targetItem,
                prop: 'borderBottom',
              },
            ]);
            break;
          }
          if (targetItemProp === 'margin') {
            flag = 2;
            passedPropArr = passedPropArr.concat([
              {
                ...targetItem,
                prop: 'marginLeft',
              },
              {
                ...targetItem,
                prop: 'marginRight',
              },
              {
                ...targetItem,
                prop: 'marginTop',
              },
              {
                ...targetItem,
                prop: 'marginBottom',
              },
            ]);
            break;
          }
          if (targetItemProp === 'padding') {
            flag = 2;
            passedPropArr = passedPropArr.concat([
              {
                ...targetItem,
                prop: 'paddingLeft',
              },
              {
                ...targetItem,
                prop: 'paddingRight',
              },
              {
                ...targetItem,
                prop: 'paddingTop',
              },
              {
                ...targetItem,
                prop: 'paddingBottom',
              },
            ]);
            break;
          }
        }
      }
    }
    if (flag === 0) {
      notPassedPropArr.push(targetArr[i]);
    }
    if (flag === 1) {
      passedPropArr.push(targetArr[i]);
    }
  }
  const totalPropArr = passedPropArr.concat(notPassedPropArr); // 后面要处理简写
  const result = { totalPropArr, passedPropArr, notPassedPropArr };
  console.log('获取校验后的数组：', result);
  return result;
}


/**
 * CSS属性字符串转换为驼峰命名
 * eg: humpHandle('ab-cd-e'); // abCdE
 * @param str
 * @returns {string}
 */
export function humpHandle (str) {
  const arr = str.split('-');
  const newArr = [];
  arr.map((item, index) => {
    if (index) {
      newArr.push(item.charAt(0).toUpperCase() + item.slice(1));
    } else {
      newArr.push(item);
    }
  });
  return newArr.join('');
}
