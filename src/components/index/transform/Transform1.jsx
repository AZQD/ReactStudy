import React from 'react'
import {render} from 'react-dom'
import transform from "css-to-react-native-transform";
console.log(34, transform);

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
console.log('编译后的样式：', test3);

export default class Transform1 extends React.Component{
  render (){
    return (
      12345
    )
  }
}