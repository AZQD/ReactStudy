import * as actionData from '../constant'

export function onAddClick(payload) {
  return {
    type: actionData.ADD,
    payload
  }
}
export function onReduceClick(payload) {
  return {
    type: actionData.REDUCE,
    payload
  }
}
export function onDoubleClick(payload) {
  return {
    type: actionData.DOUBLE,
    payload
  }
}