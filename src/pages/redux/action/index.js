import * as actionData from '../constant';

export function onAddClick (payload) {
  return {
    type: actionData.ADD,
    payload,
  };
}

export function onReduceClick (payload) {
  return {
    type: actionData.REDUCE,
    payload,
  };
}

export function onDoubleClick (payload) {
  return {
    type: actionData.DOUBLE,
    payload,
  };
}

export function getCateList (payload) {
  return {
    type: actionData.GET_CATE_LIST,
    payload,
  };
}
export function getCateListSuccess (payload) {
  return {
    type: actionData.GET_CATE_LIST_SUCCESS,
    payload,
  };
}
export function toggleCateItem (payload) {
  return {
    type: actionData.TOGGLE_CATE_ITEM,
    payload,
  };
}

export function inputOnChange (payload) {
  return {
    type: actionData.INPUT_ON_CHANGE,
    payload,
  };
}
