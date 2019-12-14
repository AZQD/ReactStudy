/**
 * Mock语法规范：https://github.com/nuysoft/Mock/wiki/Syntax-Specification
 * 数据模板定义示例：http://mockjs.com/examples.html
 */
import Mock, {Random} from 'mockjs';

Mock.mock(
  /\/redux\/demo3\/category\/list/,
  'get',
  {
    'data|10': [{
      'id': '@id',
      'cateId|+1': 1000001,
      'name|1': '@province'
    }],
    'msg': '操作成功',
    'code': 0
  }
);

Mock.mock(
  /\/redux\/demo3\/submit/,
  'post',
  {
    'data': {
      // String
      'string1|1-10': '★',
      'string2|3': '★★★',

      // Number
      'number1|+1': 202,
      'number2|1-100': 100,
      'number3|1-100.1-10': 1,
      'number4|123.1-10': 1,
      'number5|123.3': 1,
      'number6|123.10': 1.123,

      // Boolean
      // 'name|1': boolean：随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
      'boolean2|1': true,
      // 'name|min-max': value： 随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
      'boolean3|1-2': true,

      // Object
      'object1|2': {
        '310000': '上海市',
        '320000': '江苏省',
        '330000': '浙江省',
        '340000': '安徽省'
      },
      'object2|2-4': {
        '110000': '北京市',
        '120000': '天津市',
        '130000': '河北省',
        '140000': '山西省'
      },

      // Array
      'array1|1': [
        'AMD',
        'CMD',
        'UMD'
      ],
      'array2|+1': [
        'AMD',
        'CMD',
        'UMD'
      ],
      'array3|1-10': [
        {
          'name|+1': [
            'Hello',
            'Mock.js',
            '!'
          ]
        }
      ],
      'array4|1-10': [
        'Mock.js'
      ],
      'array5|1-10': [
        'Hello',
        'Mock.js',
        '!'
      ],
      'array6|3': [
        'Mock.js'
      ],
      'array7|3': [
        'Hello',
        'Mock.js',
        '!'
      ],

      // Function
      'foo': 'Syntax Demo foo',
      'fooFun': function () {
        return this.foo
      },

      // RegExp
      'regexp': /[a-z][A-Z][0-9]/,

      // 数据占位符定义
      // Date
      'datetime': '@datetime', // 随机生成日期时间
      'nowtime': '@now', // 当前日期时间

      // Image
      "imgUrl": Random.image('200x100', '#F00', '#FFF', 'Mock.js'),

      // Color
      "color": '@color',

      // Text
      'cparagraph': '@cparagraph',
      'cword': '@cword(6)',
      'ctitle': '@ctitle',
      'nickname': '@cname', // 随机生成中文名字

      // Email
      'email': '@email',

      // Address
      'province': '@province',
      'city': '@city',
      'county': '@county',
      'area': Random.county(true),

      // ID
      'id': '@id'
    },
    'msg': '操作成功',
    'code': 0
  }
);

export default Mock;
