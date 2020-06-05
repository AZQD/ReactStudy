import * as actionData from '../constant';

const initState = {
  name: '',
  phone: '',
  submitFlag: false
};

function handleForm (state = initState, action) {
  // console.log('handleForm：', state, action);
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
  case actionData.SUBMIT_FORM_SUCCESS:
    return {
      ...state,
      submitFlag: action.payload
    };
  case actionData.FORM_RESET:
    return {
      ...initState
    };
  default:
    return state;
  }
}

export default handleForm;
