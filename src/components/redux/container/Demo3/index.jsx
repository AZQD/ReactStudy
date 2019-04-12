import React from 'react';
import CommonMenu from '../CommonMenu'

class Demo3 extends React.Component{
  render() {
    return (
      <div>
        <CommonMenu history={this.props.history} />
        <div className="demo3Box">
          1234
        </div>
      </div>
    )
  };
}

export default Demo3;