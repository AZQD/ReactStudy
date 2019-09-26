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
