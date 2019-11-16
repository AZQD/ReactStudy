import React from 'react'
import transform, { getPropertyName, getStylesForProperty } from 'css-to-react-native'
console.log('transform:', transform);
// document.write(getPropertyName);

/*function transform2 (rules) {
  var shorthandBlacklist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return rules.reduce(function (accum, rule) {
    var propertyName = getPropertyName(rule[0]);
    var value = rule[1];
    var allowShorthand = shorthandBlacklist.indexOf(propertyName) === -1;
    return Object.assign(accum, getStylesForProperty(propertyName, value, allowShorthand));
  }, {});
}

function getPropertyName2 (propName) {
  var isCustomProp = /^--\w+/.test(propName);
  if (isCustomProp) {
    return propName;
  }
  return camelizeStyleName(propName);
}
getPropertyName2();*/


/*console.log(234, transform2([
  ['font', 'bold 14px/16px "Helvetica"'],
  ['margin', '5px 7px 2px'],
  ['border-left-width', '5px'],
  ['transform', 'translate(10px, 5px) scale(5)'],
]));*/


let result = transform([
  ['font', 'bold 14px/16px "Helvetica"'],
  ['margin', '5px 7px 2px'],
  ['border-left-width', '5px'],
  ['transform', 'translate(10px, 5px) scale(5)'],
]);
console.log('result1:', result);


let result2 = getPropertyName('border-width');
let result3 = getStylesForProperty('borderWidth', '1px 0px 2px 0px');
console.log('result2:', result2);
console.log('result3:', result3);


let result41 = transform([['border-radius', '50px']]);
console.log('result41:', result41);

let result42 = getStylesForProperty('borderRadius', '50px');
console.log('result42:', result42);

let result51 = transform([['border-radius', '50px']], ['borderRadius']);
console.log('result51:', result51);

let result52 = getStylesForProperty('borderRadius', '50px', false);
console.log('result52:', result52);




import './Index.less'

export default class Index extends React.Component {
  render() {
    return <div className="container">
      12345
    </div>
  }
}