import Mock from 'mockjs';

Mock.mock(
  /\/redux\/demo3\/category\/list/,
  'get',
  {
    'data|10': [{
      "cateId|+1": 1000001,
      "name|1": "@province"
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
      "mtime": "@datetime",//随机生成日期时间
      "score|1-5": 'hello',//随机生成1-5的字符串
      "rank|1-5":  100,//随机生成1-100的数字
      "stars|1-5": 5,//随机生成1-5的数字
      "end|+1": 5,
      "end|1": true,
      "obj|2": {
        "score|1-5": 'hello',
        "rank|1-5":  100,
        "stars|1-5": 5,
      },
      "arr|6": [{
        "id|+1": 0,
        "cateId|+1": 1000001,
        "name|1": '@province'
      }],
      "nickname": "@cname",//随机生成中文名字
    },
    'msg': '操作成功',
    'code': 0
  }
);

export default Mock;
