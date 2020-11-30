import React from 'react';
import dompurify from 'dompurify';
import xss from 'xss';

class Index extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const originHTML = '<iframe src="https://www.baidu.com"></iframe><script>alert(11);</script><><img src=x onerror=alert(22);//>';
        const dompurifyHTML = dompurify.sanitize(originHTML);
        const xssHTML = xss(originHTML);
        console.log(1, '原始数据：', originHTML);
        console.log(2, 'dompurify处理：', dompurifyHTML);
        console.log(3, 'xss处理：', xssHTML);
        return (
            <div>
                <h3>防XSS攻击：</h3>
                <ul>
                    <li>
                        <h5>原始数据：</h5>
                        <div dangerouslySetInnerHTML={{ __html: originHTML }} ></div>
                    </li>
                    <li>
                        <h5>dompurify处理：</h5>
                        <div dangerouslySetInnerHTML={{ __html: dompurifyHTML }} ></div>
                    </li>
                    <li>
                        <h5>xss处理：</h5>
                        <div dangerouslySetInnerHTML={{ __html: xssHTML }} ></div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Index;