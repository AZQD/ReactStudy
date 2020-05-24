import React from 'react'

const withHeader = (params) => (WrapComp) =>{
  // return class extends React.Component { // 属性代理
  return class extends WrapComp { // 反向继承

    componentDidMount () {
      console.log('高阶组件内部：', params);
      console.log('高阶组件内部：', this.state);
      console.log('高阶组件内部：', this.props);
      let uuid = window.localStorage.getItem('58tj_uuid');
      this.setState({uuid});
    }

    getDate () {
      const timestamp = (new Date()).getTime();
      console.log(timestamp);
    }

    render () {
      console.log('初始props：', this.props);
      const {history, ...otherProps} = this.props;
      console.log('不传history, 只传递props：', otherProps);
      return <div>
        {WrapComp && <WrapComp getDate={this.getDate} {...this.state} {...otherProps}/>}
        <div className="title" onClick={this.clickFun}>我是高阶组件的内容</div>
        <button onClick={this.clickFun}>点击触发组件func</button>
        {/*{super.render()}*/} {/*反向继承时可用*/}
      </div>
    }
  };
};

export default withHeader;