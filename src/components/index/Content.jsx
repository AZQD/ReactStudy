import React from 'react'
import '../../css/content'
import pig from '../../images/pig.png'

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