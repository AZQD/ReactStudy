export default function flexAbbrev (valueArr) {
  let result = [];

  valueArr[0] && result.push.apply(result, [
    {
      prop: 'flexGrow',
      value: valueArr[0]
    }
  ]);
  valueArr[1] && result.push.apply(result, [
    {
      prop: 'flexShrink',
      value: valueArr[1]
    }
  ]);
  valueArr[2] && result.push.apply(result, [
    {
      prop: 'flexBasis',
      value: valueArr[2]
    }
  ]);

  return result;
}
