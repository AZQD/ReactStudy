import {
  postcssParse,
  postcssASTToPropValueArr,
  getCheckedPropArr,
  humpHandle
} from './utils/util'


export const entryCss = '{color: red; line-height: 16px; border: 1px solid red; float: right; ab-cd: 12px;}';


console.log('----------测试 begin------------');


// 测试：
let CSSToRNtransformResult = CSSTransformRN(entryCss);
console.log(' CSS 转 RN 结果：', CSSToRNtransformResult);


/**
 * 封装的 CSS 转 RN 的函数
 * @param entryCss
 * @constructor
 */
function CSSTransformRN(entryCss) {
  let postcssAST = postcssParse(entryCss);
  let propValueArr = postcssASTToPropValueArr(postcssAST);
  let {totalPropArr: cssTotalPropArr, passedPropArr: cssPassedPropArr, notPassedPropArr: cssNotPassedPropArr} = getCheckedPropArr(propValueArr, 'postcss', 'css');
  let humpPropArr = cssTotalPropArr.map((item) => {
    return {
      ...item,
      prop: humpHandle(item.prop)
    }
  });
  let {totalPropArr: RNTotalPropArr, passedPropArr: RNPassedPropArr, notPassedPropArr: RNNotPassedPropArr} = getCheckedPropArr(humpPropArr, 'postcss', 'rn');
  console.log('RNTotalPropArr', RNTotalPropArr);
  console.log('RNPassedPropArr', RNPassedPropArr);
  console.log('RNNotPassedPropArr', RNNotPassedPropArr);
  return {RNTotalPropArr, RNPassedPropArr, RNNotPassedPropArr};
}


console.log('----------测试 end------------');


// 备注：
// CSS属性简写汇总：https://my.oschina.net/u/1866405/blog/291247
// 目前只处理了border、margin、padding，其他的后面视情况调整；