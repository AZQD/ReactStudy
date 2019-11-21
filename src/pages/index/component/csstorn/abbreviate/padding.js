export default function paddingAbbrev (valueArr) {
  let result = [];
  if (valueArr.length === 1) {
    result.push.apply(result, [
      {
        prop: 'paddingLeft',
        value: valueArr[0]
      },
      {
        prop: 'paddingRight',
        value: valueArr[0]
      },
      {
        prop: 'paddingTop',
        value: valueArr[0]
      },
      {
        prop: 'paddingBottom',
        value: valueArr[0]
      }
    ]);
  } else if (valueArr.length === 2) {
    result.push.apply(result, [
      {
        prop: 'paddingTop',
        value: valueArr[0]
      },
      {
        prop: 'paddingBottom',
        value: valueArr[0]
      },
      {
        prop: 'paddingLeft',
        value: valueArr[1]
      },
      {
        prop: 'paddingRight',
        value: valueArr[1]
      }
    ]);
  } else if (valueArr.length === 3) {
    result.push.apply(result, [
      {
        prop: 'paddingTop',
        value: valueArr[0]
      },
      {
        prop: 'paddingLeft',
        value: valueArr[1]
      },
      {
        prop: 'paddingRight',
        value: valueArr[1]
      },
      {
        prop: 'paddingBottom',
        value: valueArr[2]
      }
    ]);
  } else if (valueArr.length === 4) {
    result.push.apply(result, [
      {
        prop: 'paddingTop',
        value: valueArr[0]
      },
      {
        prop: 'paddingRight',
        value: valueArr[1]
      },
      {
        prop: 'paddingBottom',
        value: valueArr[2]
      },
      {
        prop: 'paddingLeft',
        value: valueArr[3]
      }
    ]);
  }

  return result;
}
