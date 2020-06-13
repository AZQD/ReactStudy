import React from 'react'
import parse, {domToReact} from 'html-react-parser'
import Lazyload from 'react-lazyload'
import './index.less'

class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      content: "<p>娱乐圈中被称为“爷”的五位明星，星爷上榜，最后一位只有8岁。</p>\n<p><img data-size=\"600,600\" alt=\"timg (1)_副本.jpg\" data-spfp-1=\"1\" data-bpfp-1=\"1\" src=\"https://pic3.58cdn.com.cn/nowater/pinche/n_v21acb4ec390a64f0da3df5d4905ef210c.jpg\"></p>\n<p>其实爷这个字，一般人是不太会用来称呼自己的，如果用了，那也是外界对他们的一种评价，像周星驰就被大家称为“星爷”，而大家之所以称周星驰为“星爷”，完全是因为周星驰的江湖地位，完全是因为他靠作品征服观众了，才会被大家称为“爷”，算是实至名归了吧。</p>\n<p data-spfs-1=\"1\"><img data-size=\"600,600\" alt=\"webwxgetmsgimg (84)_副本.jpg\" data-spfp-1=\"1\" data-bpfp-1=\"1\" src=\"https://pic3.58cdn.com.cn/nowater/pinche/n_v2e12862055e8149a2bdd1d74841c795ed.jpg\"></p>\n<p data-bpfs-1=\"1\">刘诗诗有一个外号叫“诗爷”，而刘诗诗之所以被大家称为“诗爷”，完全是因为刘诗诗的性格原因，大大咧咧的，完全不像她的外表给大家的感觉，刘诗诗的外表给人一种柔柔弱弱，弱不禁风的样子，但是实则刘诗诗的性格有些“侠气”，有些男孩子气在里面，所以跟刘诗诗相处过的人，都会叫她“诗爷”。</p>\n<p><img data-size=\"600,375\" alt=\"u=2807885617,1446042117&amp;fm=26&amp;gp=0_副本.jpg\" src=\"https://pic3.58cdn.com.cn/nowater/pinche/n_v29609d401e06042aeaeb02dfca046a942.jpg\"></p>\n<p>就再就是范冰冰了，范冰冰被大家称为“范爷”，完全是因为她的霸气，之前那句我不嫁豪门，因为我自己就是豪门，一直流传到现在，不得不说，范冰冰不管是从外形，还是从气场，又或者是一些行为，确实是称得上“范爷”了。</p>\n<p><img data-size=\"600,832\" alt=\"timg (2)_副本.jpg\" src=\"https://pic3.58cdn.com.cn/nowater/pinche/n_v2c5c76de420c44243afa2841438d248b7.jpg\"></p>\n<p>再就是吴亦凡了，吴亦凡曾经在电影《老炮儿》当中，饰演过一个角色叫谭小飞，也被大家称为“小爷”，不过吴亦凡这个“爷”，其实知道的人并不多，毕竟《老炮儿》这部电影已经过去5年了，大家遗忘的也差不多了。</p>\n<p><img data-size=\"600,675\" alt=\"timg (3)_副本.jpg\" src=\"https://pic3.58cdn.com.cn/nowater/pinche/n_v2ceea947d383c4d99a9e8ab8bdd6003d1.jpg\"></p>\n<p>娱乐圈中被称为“爷”的五位明星，星爷上榜，最后一位只有8岁。而最后一位就是甜馨了，12年出生的她，今年才8岁，却被大家亲切的称为“馨爷”，也完全是因为甜馨在节目中呈现出来的效果，确实是挺“爷们”的，所以才招到了大家的喜爱。大家觉得呢？</p>",
    };
  }

  // 字符串转换为React节点
  parseStrToReact = (content) => {
    const tagWhiteList = [
      'div', 'p', 'span', 'section', 'iframe', 'pre', 'article',
      'img', 'video',
      'a', 'b', 'br', 'em', 'small', 'del',
      'ul', 'li', 'ol', 'dl', 'dt', 'dd',
      'table', 'thead', 'tbody', 'tfoot', 'tr', 'td',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
    ];

    const options = {
      replace: ({type, name, attribs, children}) => {
        if (type !== 'tag') {
          return
        }

        if (!tagWhiteList.includes(name)) {
          return (<span>{domToReact(children, options)}</span>)
        }

        if (attribs && attribs['data-lazy'] === 'img-lazy') {
          return (
            // height=25，即默认img空标签的高度
            <Lazyload height={300}>{domToReact(children)}</Lazyload>
          )
        }
      }
    };

    return parse(content, options)
  };

  // 获取最终渲染的文本内容
  getContent = () => {
    let content = this.state.content;

    content = content.replace(/<img([^>|]+)>/g, function (all, $1) {
      return `<div data-lazy="img-lazy"><img ${$1}></div>`
    });

    try {
      return <div id="content">{this.parseStrToReact(content)}</div>
    } catch (e) {
      return <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
    }
  };

  render () {
    const {content} = this.state;
    return (
      <div className="lazyLoadWrap">
        <h3>富文本图片懒加载解决方案</h3>
        {
          this.getContent()
        }
      </div>
    )
  }
}

export default Index;