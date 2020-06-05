import React from 'react'
import './Content.less'
import pig from '../../images/test/pig.png'

export default class Content extends React.Component{
  render (){
    return (
      <div className="contentBox">
        <div className="imgBox">
          <img src={pig} alt=""/>
        </div>
        <div className="imgBgBox">

        </div>
      </div>
    )
  }
}