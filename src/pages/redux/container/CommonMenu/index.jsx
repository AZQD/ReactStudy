import React from 'react'
import './index.less'

export default class CommonMenu extends React.Component {

  toggleMenu(type) {
    if (type === 1) {
      this.props.history.replace('/');
    } else if (type === 2) {
      this.props.history.replace('/demo2');
    } else if (type === 3) {
      this.props.history.replace('/demo3');
    } else if (type === 4) {
      this.props.history.replace('/demo4');
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
        <div className="menuItem" onClick={() => {
          this.toggleMenu(3)
        }}>Demo3
        </div>
        <div className="menuItem" onClick={() => {
          this.toggleMenu(4)
        }}>Demo4
        </div>
      </div>
    )
  }
}