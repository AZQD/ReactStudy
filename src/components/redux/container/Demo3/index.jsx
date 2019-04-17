import React from 'react';
import ajax from 'ajax-promise-simple';
import CommonMenu from '../CommonMenu'

class Demo3 extends React.Component{
  
  componentDidMount(){
    // ajax.getJSON('https://suggest.taobao.com/sug?code=utf-8&q=%E5%8C%97%E4%BA%AC')
    ajax.getJSON('https://ewxtongzhen.58.com/shop/posts/category/b/list')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        <CommonMenu history={this.props.history} />
        <div className="demo3Box">
          666
        </div>
      </div>
    )
  };
}

export default Demo3;