import * as actionData from '../constant'

// Reducer
const initState = {
  count: 0,
};

function counter(state = initState, action) {
  const count = state.count;
  const type = action.type;
  switch (type) {
    case actionData.ADD:
      return {count: count + 1};
    case actionData.REDUCE:
      return {count: count - 1};
    case actionData.DOUBLE: //翻倍
      return {count: count * 2};
    default:
      return state
  }
}

export default counter;