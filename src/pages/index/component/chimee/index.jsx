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
      wrapper: '.chimee-video-wrapper',
      src: 'https://wos2.58cdn.com.cn/HiJeDcBazHNm/simplevideo/1607713384238videofile.mp4',
      poster: 'https://pic3.58cdn.com.cn/nowater/pinche/n_v24e4fe1b239534e0faedec8c95792e99d.jpg',
      autoplay: true,
      controls: true,
      playsInline: true,
      preload: true,
      x5VideoPlayerFullscreen: true,
      x5VideoOrientation: true,
      xWebkitAirplay: true,
      x5VideoPlayerType: 'h5' // 加上这个可以开启x5同层播放,避免z-index:失效
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