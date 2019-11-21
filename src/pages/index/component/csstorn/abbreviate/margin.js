export default function marginAbbrev (valueArr) {
  let result = [];
  if (valueArr.length === 1) {
    result.push.apply(result, [
      {
        prop: 'marginLeft',
        value: valueArr[0]
      },
      {
        prop: 'marginRight',
        value: valueArr[0]
      },
      {
        prop: 'marginTop',
        value: valueArr[0]
      },
      {
        prop: 'marginBottom',
        value: valueArr[0]
      }
    ]);
  } else if (valueArr.length === 2) {
    result.push.apply(result, [
      {
        prop: 'marginTop',
        value: valueArr[0]
      },
      {
        prop: 'marginBottom',
        value: valueArr[0]
      },
      {
        prop: 'marginLeft',
        value: valueArr[1]
      },
      {
        prop: 'marginRight',
        value: valueArr[1]
      }
    ]);
  } else if (valueArr.length === 3) {
    result.push.apply(result, [
      {
        prop: 'marginTop',
        value: valueArr[0]
      },
      {
        prop: 'marginLeft',
        value: valueArr[1]
      },
      {
        prop: 'marginRight',
        value: valueArr[1]
      },
      {
        prop: 'marginBottom',
        value: valueArr[2]
      }
    ]);
  } else if (valueArr.length === 4) {
    result.push.apply(result, [
      {
        prop: 'marginTop',
        value: valueArr[0]
      },
      {
        prop: 'marginRight',
        value: valueArr[1]
      },
      {
        prop: 'marginBottom',
        value: valueArr[2]
      },
      {
        prop: 'marginLeft',
        value: valueArr[3]
      }
    ]);
  }

  return result;
}
