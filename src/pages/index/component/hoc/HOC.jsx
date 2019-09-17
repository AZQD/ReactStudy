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
      return <div>
        {WrapComp && <WrapComp getDate={this.getDate} {...this.state}/>}
        <div className="title">我是高阶组件的内容</div>
      </div>
    }
  };
export default withHeader;