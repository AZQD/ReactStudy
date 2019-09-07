import React from 'react'
import {render} from 'react-dom'

/*import transform from "css-to-react-native-transform";
let test1 = transform(`
.myClass {
  font-size: 18px;
  line-height: 24px;
  color: red;
  float: right;
  a: 1;
  b: 2;
  c-d: 3;
}
.test::before{
    content: 'hello'
}
.other {
  padding: 1rem;
}
`, { parseAllSelectors: true });

let test2 = transform(`
  .foo {
    color: #f00;
  }

  :export {
    myProp: #fff;
  }
`);

let test3 = transform(
  `
  .container {
    background-color: #f00;
  }

  @media (orientation: landscape) {
    .container {
      background-color: #00f;
    }
  }
`,
  { parseMediaQueries: true },
);
console.log('编译后的样式：', test3);*/




import transform, { getPropertyName, getStylesForProperty } from "css-to-react-native";

let test1 = transform([
  ['font', 'bold 14px/16px "Helvetica"'],
  ['margin', '5px 7px 2px'],
  ['border-left-width', '5px'],
]);

console.log('编译后的样式：', test1);

console.log(getPropertyName('border-width'));

console.log(getStylesForProperty('borderWidth', '1px 0px 2px 0px'));



export default class Transform1 extends React.Component{
  render (){
    return (
      12345
    )
  }
}