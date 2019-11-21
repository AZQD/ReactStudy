export default function borderAbbrev (valueArr) {
  let result = [];

  valueArr[0] && result.push.apply(result, [
    {
      prop: 'borderWidth',
      value: valueArr[0]
    }
  ]);
  valueArr[1] && result.push.apply(result, [
    {
      prop: 'borderStyle',
      value: valueArr[1]
    }
  ]);
  valueArr[2] && result.push.apply(result, [
    {
      prop: 'borderColor',
      value: valueArr[2]
    }
  ]);

  return result;
}
