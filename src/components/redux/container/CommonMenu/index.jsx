import React from 'react'
import './index.less'

export default class CommonMenu extends React.Component {

  toggleMenu(type) {
    if (type === 1) {
      this.props.history.replace('/');
    } else if (type === 2) {
      this.props.history.replace('/demo2');
    }
  }

  render() {
    return (
      <div className="menuBox">
        <div className="menuItem" onClick={() => {
          this.toggleMenu(1)
        }}>Demo1
        </div>
        <div className="menuItem" onClick={() => {
          this.toggleMenu(2)
        }}>Demo2
        </div>
      </div>
    )
  }
}