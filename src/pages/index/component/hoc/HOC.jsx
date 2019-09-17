import React from 'react'

const withHeader = (WrapComp) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        uuid: ''
      }
    }

    componentDidMount() {
      let uuid = window.localStorage.getItem('58tj_uuid');
      this.setState({uuid});
    }

    getDate() {
      const timestamp = (new Date()).getTime();
      console.log(timestamp);
    }

    render() {
      console.log('初始props：', this.props);
      const { history, ...otherProps } = this.props;
      console.log('不传history, 只传递props：', otherProps);
      return <div>
        {WrapComp && <WrapComp getDate={this.getDate} {...this.state} {...otherProps}/>}
        <div className="title">我是高阶组件的内容</div>
      </div>
    }
  };
export default withHeader;