import React from 'react';

import loadScript from '@util/loadScript'; // 路由动态加载

window._trackURL = JSON.stringify({
    testName: 'tongzhen_log_test'
});
loadScript('https://tracklog.58.com/referrer_m.js', () => {
    console.log('referrer_m.js加载完成，可以调用window.clickLog了!');
    // window.clickLog('from=log_start');
});

window.addEventListener("load", event => {
    console.log('load：', event);
    window.clickLog('from=onload');
}, false);

/**
 * 当窗口即将被卸载（关闭）时,会触发该事件.此时页面文档依然可见,且该事件的默认动作可以被取消.
 * 参考文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onbeforeunload
 * @param e
 * @returns {string}
 */
window.onbeforeunload = function (e) {
    e = e || event;
    console.log('onbeforeunload：', e);

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
    window.clickLog('from=onunload1');
};
// window.addEventListener("unload", event => {
//     console.log('unload：', event);
//     window.clickLog('from=onunload2');
// }, false);


/**
 * 当其选项卡的内容变得可见或被隐藏时，会在文档上触发 visibilitychange (能见度更改)事件。
 * 参考文档：https://wiki.developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event
 */
document.addEventListener("visibilitychange", function(e) {
    window.clickLog('from=visibilitychange');
    if (document.visibilityState === 'visible') {
        console.log('visibilitychange：页面显示', e.type);
    } else {
        console.log('visibilitychange：页面隐藏', e.type);
    }
});


/**
 * 当一条会话历史记录被执行的时候将会触发页面显示(pageshow)事件
 * 参考文档：https://wiki.developer.mozilla.org/zh-CN/docs/Web/Events/pageshow
 */
window.addEventListener("pageshow", event => {
    console.log('pageshow：', event.persisted);
    if (event.persisted) { // persisted：维持, 保持, 持续存在
        /* the page isn't being discarded, so it can be reused later */
        // 该页不会被丢弃，因此可以在以后重用
    }
}, false);


/**
 * 当浏览器在显示与会话历史记录不同的页面的过程中隐藏当前页面时, pagehide(页面隐藏)事件会被发送到一个Window
 * 参考文档：https://wiki.developer.mozilla.org/zh-CN/docs/Web/API/Window/pagehide_event
 */
window.addEventListener("pagehide", event => {
    console.log('pagehide：', event.persisted);
    window.clickLog('from=pagehide');
    if (event.persisted) { // persisted：维持, 保持, 持续存在
        /* the page isn't being discarded, so it can be reused later */
        // 该页不会被丢弃，因此可以在以后重用
    }
}, false);


// const events = [
//     "pagehide", "pageshow",
//     "unload", "load"
// ];
//
// const eventLogger = event => {
//     switch (event.type) {
//         case "pagehide":
//         case "pageshow":
//             let isPersisted = event.persisted ? "persisted" : "not persisted";
//             console.log('Event:', event.type, '-', isPersisted);
//             break;
//         default:
//             console.log('Event:', event.type);
//             break;
//     }
// };
//
// events.forEach(eventName =>
//     window.addEventListener(eventName, eventLogger)
// );

class Index extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <h3>log埋点常用方法</h3>
                <p><a href="https://www.baidu.com">打开页面</a></p>
                <p><a href="https://www.baidu.com" target="_blank">打开新窗口</a></p>
            </div>
        )
    }
}

export default Index;