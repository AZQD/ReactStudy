import React from 'react';
import Loadable from 'react-loadable';

export default (loader) => Loadable({
  loader,
  loading () {
    return <div>组件加载中...</div>
  },
})
