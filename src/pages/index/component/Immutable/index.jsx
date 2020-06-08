import React from 'react'
import Immutable from 'immutable'

// 常用API：

// fromJS()
// toJS()
// Map(obj)
// List(arr)
// is()

// 详细说明：https://www.cnblogs.com/chris-oil/p/8494337.html
// API简介快速入门：https://blog.csdn.net/ZQ_KING/article/details/80914619

var obj = {
  company: '阿里',
  address: '北京',
  product: function () {
    console.log('淘宝');
  }
};
var arr = [
  {name: '景甜'},
  {name: '杨幂'},
  {name: '刘亦菲'}
];

var Immutable_fromJS_obj = Immutable.fromJS(obj);
var Immutable_fromJS_arr = Immutable.fromJS(arr);
console.log(11, Immutable_fromJS_obj);
console.log(11, Immutable_fromJS_arr);

var Immutable_toJS_obj = Immutable_fromJS_obj.toJS();
var Immutable_toJS_arr = Immutable_fromJS_arr.toJS();
console.log(22, Immutable_toJS_obj);
console.log(22, Immutable_toJS_arr);

console.log(33, Immutable.Map(obj));

console.log(44, Immutable.List(arr));

console.log(55, Immutable.is(Immutable.fromJS(obj), Immutable.Map(obj)));
console.log(55, Immutable.is(Immutable.fromJS(arr), Immutable.List(arr)));


class Index extends React.Component{
  constructor (props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <h3>Immutable常用API：</h3>
        fromJS()<br/>
        toJS()<br/>
        Map(obj)<br/>
        List(arr)<br/>
        is()<br/><br/>

        <h3>特点：</h3>
        1.一旦创建，就不能再被更改的数据；<br/>
        2.原理：持久化数据结构；<br/>
        3.deepCopy：结构共享；
      </div>
    )
  }
}
export default Index;