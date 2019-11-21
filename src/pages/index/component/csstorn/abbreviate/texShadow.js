export default function texShadowAbbrev (valueArr) {
  let result = [];
  if (valueArr.length === 4) {
    result.push.apply(result, [
      {
        prop: 'textShadowOffset',
        value: { width: valueArr[0], height: valueArr[1] }
      },
      {
        prop: 'textShadowRadius',
        value: valueArr[2]
      },
      {
        prop: 'textShadowColor',
        value: valueArr[3]
      }
    ]);
  } else { // 兼容
    result.push.apply(result, [
      {
        prop: 'texShadow',
        value: valueArr.join(' ')
      }
    ]);
  }

  return result;
}
