import * as actionData from '../constant';

const initCateList = {
  activeIndex: 0,
  cateList: [],
};

function handleList (state = initCateList, action) {
  switch (action.type) {

  /* case actionData.GET_CATE_LIST: // 不需要（因为这部分是在saga里面异步获取数据）
    return {
      cateList: [...state.cateList],
    };*/
  case actionData.GET_CATE_LIST_SUCCESS:
    return {
      ...state,
      cateList: action.payload,
    };
  case actionData.TOGGLE_CATE_ITEM:
    return {
      ...state,
      activeIndex: action.payload
    };
  default:
    return state;
  }
}

export default handleList;
