import cssColorKeywords from 'css-color-keywords';
let cssColorKeywordsArr = Object.keys(cssColorKeywords)
export default function backgroundAbbrev (valueArr) {
  let result = [];
  let value;
  for (let i = 0; i < valueArr.length; i++) {
    let valueItem = valueArr[i];
    if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(valueItem)) { // 校验颜色正则
      value = valueItem;
      break;
    } else if (cssColorKeywordsArr.includes(valueItem)) { // 色值关键字
      value = cssColorKeywords[valueItem];
      break;
    }
  }

  if (value) {
    result.push.apply(result, [
      {
        prop: 'backgroundColor',
        value: value
      }
    ]);
  } else {
    result.push.apply(result, [
      {
        prop: 'background',
        value: valueArr.join(' ')
      }
    ]);
    console.error(`background的属性值${valueArr.join(' ')}不能解析！`);
  }

  return result;
}
