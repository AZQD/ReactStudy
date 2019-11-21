export default function borderTopAbbrev (valueArr) {
  let result = [];

  valueArr[0] && result.push.apply(result, [
    {
      prop: 'borderTopWidth',
      value: valueArr[0]
    }
  ]);
  valueArr[1] && result.push.apply(result, [
    {
      prop: 'borderTopStyle',
      value: valueArr[1]
    }
  ]);
  valueArr[2] && result.push.apply(result, [
    {
      prop: 'borderTopColor',
      value: valueArr[2]
    }
  ]);

  return result;
}
