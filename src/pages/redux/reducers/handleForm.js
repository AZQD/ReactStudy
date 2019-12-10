import * as actionData from '../constant';

const initState = {
  name: '',
  phone: ''
};

function handleForm (state = initState, action) {
  console.log('handleForm：', state, action);
  switch (action.type) {
  case actionData.INPUT_ON_CHANGE:
  // 加大括号的目的：no-case-declarations：该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中。
  {
    const {type, value} = action.payload;
    return {
      ...state,
      [type]: value
    };
  }
  default:
    return state;
  }
}

export default handleForm;
