import * as actionData from '../constant';

const initCateList = {
  activeIndex: 0,
  cateList: [],
};

function cateList (state = initCateList, action) {
  switch (action.type) {
  /*case actionData.GET_CATE_LIST: // 不需要
    return {
      cateList: [...state.cateList],
    };*/
  case actionData.GET_CATE_LIST_SUCCESS:
    return {
      activeIndex: state.activeIndex,
      cateList: [...action.cateData],
    };
  case actionData.TOGGLE_CATE_ITEM:
    return {
      activeIndex: action.payload,
      cateList: [...state.cateList],
    };
  default:
    return state;
  }
}

export default cateList;
