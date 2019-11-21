export default function borderRightAbbrev (valueArr) {
  let result = [];

  valueArr[0] && result.push.apply(result, [
    {
      prop: 'borderRightWidth',
      value: valueArr[0]
    }
  ]);
  valueArr[1] && result.push.apply(result, [
    {
      prop: 'borderRightStyle',
      value: valueArr[1]
    }
  ]);
  valueArr[2] && result.push.apply(result, [
    {
      prop: 'borderRightColor',
      value: valueArr[2]
    }
  ]);

  return result;
}
