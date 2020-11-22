import React from 'react';

import loadScript from '@util/loadScript'; // 路由动态加载

window._trackURL = JSON.stringify({
    testName: 'tongzhen_log_test'
});
loadScript('https://tracklog.58.com/referrer_m.js', () => {
    console.log('referrer_m.js加载完成，可以调用window.clickLog了!');
    // window.clickLog('from=log_start');
});

/**
 * 当窗口即将被卸载（关闭）时,会触发该事件.此时页面文档依然可见,且该事件的默认动作可以被取消.
 * 参考文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
 * @param e
 * @returns {string}
 */
window.onbeforeunload = function (e) {
    e = e || event;

    // 兼容IE8和Firefox 4之前的版本
    if (e) {
        window.clickLog('from=onbeforeunload1');
        e.returnValue = '关闭提示1';
    }

    // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    window.clickLog('from=onbeforeunload2');
    return '关闭提示2';
};

/**
 * 关闭窗口资源和内容的时候触发
 * 参考文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onunload
 */
window.onunload = function () {
    window.clickLog('from=onunload');
};


class Index extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <h3>log埋点常用方法</h3>
                <a href="https://www.baidu.com">123</a>
            </div>
        )
    }
}

export default Index;