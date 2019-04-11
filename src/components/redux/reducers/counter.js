// Reducer
const initState = {
  count: 0,
};

function counter(state = initState, action) {
  const count = state.count;
  const type = action.type;
  switch (type) {
    case 'add':
      return {count: count + 1};
    case 'reduce':
      return {count: count - 1};
    case 'double': //翻倍
      return {count: count*2};
    default:
      return state
  }
}

export default counter;