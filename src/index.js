import React from 'react';
import {render} from 'react-dom';

class Index extends React.Component {
  render() {
    return (
      <div>123</div>
    )
  }
}
render(<Index />, document.getElementById("box"));