import Mock from 'mockjs';

Mock.mock(
  /\/redux\/demo3\/category\/list/,
  'get',
  {
    "data": [{
      "cateId": "1000004",
      "name": "本地推广",
      "childList": [{
        "cateId": "8",
        "name": "本地推广"
      }]
    }, {
      "cateId": "1000002",
      "name": "招聘用人",
      "childList": [{
        "cateId": "1",
        "name": "招聘"
      }]
    }, {
      "cateId": "1000003",
      "name": "房产交易",
      "childList": [{
        "cateId": "3",
        "name": "房屋出租"
      }, {
        "cateId": "4",
        "name": "房屋出售"
      }]
    }, {
      "cateId": "1000005",
      "name": "车辆交易",
      "childList": [{
        "cateId": "17",
        "name": "车辆出售"
      }, {
        "cateId": "18",
        "name": "车辆求购"
      }]
    }, {
      "cateId": "1000015",
      "name": "生意转让",
      "childList": [{
        "cateId": "5",
        "name": "生意转让"
      }]
    }, {
      "cateId": "1000011",
      "name": "打折优惠",
      "childList": [{
        "cateId": "31",
        "name": "打折优惠"
      }]
    }, {
      "cateId": "1000006",
      "name": "物品交易",
      "childList": [{
        "cateId": "14",
        "name": "出售"
      }]
    }, {
      "cateId": "1000014",
      "name": "农林牧渔",
      "childList": [{
        "cateId": "34",
        "name": "农作物"
      }, {
        "cateId": "35",
        "name": "畜禽水产"
      }, {
        "cateId": "36",
        "name": "肥药饲料"
      }, {
        "cateId": "37",
        "name": "农机农具"
      }]
    }, {
      "cateId": "1000013",
      "name": "土特产",
      "childList": [{
        "cateId": "33",
        "name": "土特产"
      }]
    }],
    "msg": "操作成功",
    "code": 0
  }
);

Mock.mock(
  /\/redux\/demo3\/submit/,
  'post',
  {
    "data": null,
    "msg": "操作成功",
    "code": 0
  }
);

export default Mock;
