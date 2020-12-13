import React from 'react';
import Chimee from 'chimee-mobile-player';
import './chimee-mobile-player.browser.scss';

class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    new Chimee({
      wrapper: '.chimee-video-wrapper',  // video dom容器
      src: 'https://wos2.58cdn.com.cn/HiJeDcBazHNm/simplevideo/1607713384238videofile.mp4',
      autoplay: true,
      controls: true,
      playsInline: true,
      preload: 'auto',
      x5VideoPlayerFullscreen: true,
      x5VideoOrientation: 'landscape|portrait',
      xWebkitAirplay: true,
      muted: true,
      // removeInnerPlugins: ['chimeeMobiControlbar', 'chimeeState'] // 需要移除的插件
    });
  }

  // 参考文档：http://chimee.org/docs/chimee_api.html
  render () {
    return (
      <div>
        <h3>Chimee API介绍：</h3>
        <div className="chimee-video-wrapper"></div>
      </div>
    )
  }
}

export default Index;