export default function boxShadowAbbrev (valueArr) {
  let result = [];
  if (valueArr.length === 2) {
    result.push.apply(result, [
      {
        prop: 'shadowOffset',
        value: { width: valueArr[0], height: valueArr[1] }
      }
    ]);
  } else if (valueArr.length === 3) {
    result.push.apply(result, [
      {
        prop: 'shadowOffset',
        value: { width: valueArr[0], height: valueArr[1] }
      },
      {
        prop: 'shadowRadius',
        value: valueArr[2]
      }
    ]);
  } else if (valueArr.length === 4) {
    result.push.apply(result, [
      {
        prop: 'shadowOffset',
        value: { width: valueArr[0], height: valueArr[1] }
      },
      {
        prop: 'shadowRadius',
        value: valueArr[2]
      },
      {
        prop: 'shadowColor',
        value: valueArr[3]
      }
    ]);
  } else if (valueArr.length === 5) {
    result.push.apply(result, [
      {
        prop: 'shadowOffset',
        value: { width: valueArr[0], height: valueArr[1] }
      },
      {
        prop: 'shadowRadius',
        value: valueArr[2]
      },
      {
        prop: 'shadowColor',
        value: valueArr[3]
      },
      {
        prop: 'shadowOpacity',
        value: valueArr[4]
      }
    ]);
  } else { // 兼容
    result.push.apply(result, [
      {
        prop: 'boxShadow',
        value: valueArr.join(' ')
      }
    ]);
  }

  return result;
}
