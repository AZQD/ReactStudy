import React from 'react'

const withHeader = (WrapComp) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        uuid: ''
      }
    }
    componentDidMount(){
      let uuid = window.localStorage.getItem('58tj_uuid');
      console.log(uuid);
      this.setState({uuid});
    }

    render() {
      return <div>
        <div className="title">我是标题</div>
        {WrapComp && <WrapComp {...this.state} {...this.props}/>}
      </div>
    }
  };
export default withHeader;