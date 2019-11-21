export default function borderLeftAbbrev (valueArr) {
  let result = [];

  valueArr[0] && result.push.apply(result, [
    {
      prop: 'borderLeftWidth',
      value: valueArr[0]
    }
  ]);
  valueArr[1] && result.push.apply(result, [
    {
      prop: 'borderLeftStyle',
      value: valueArr[1]
    }
  ]);
  valueArr[2] && result.push.apply(result, [
    {
      prop: 'borderLeftColor',
      value: valueArr[2]
    }
  ]);

  return result;
}
