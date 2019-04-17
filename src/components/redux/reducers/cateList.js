import * as actionData from '../constant';

const initCateList = {
  cateList: []
};

function cateList(state = initCateList, action) {
  switch (action.type){
    case actionData.GET_CATE_LIST:
      return {
        cateList: [...state.cateList]
      };
    default :
      return state;
  }
}

export default cateList;
