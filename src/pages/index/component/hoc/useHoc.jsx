import React from 'react'
import withHeader from './HOC'

@withHeader
export default class UseHoc extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    console.log(22222, this.props);
  }
  componentDidUpdate(){
    console.log(3333, this.props);
  }

  render() {
    return <div>使用高阶组件</div>
  }
}