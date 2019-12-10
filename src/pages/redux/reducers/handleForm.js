import * as actionData from '../constant';

const initState = {
  name: '',
  phone: ''
};

function handleForm(state = initState, action){
  console.log('handleForm：', state, action);
  switch (action.type){
    case actionData.INPUT_ON_CHANGE:
      const {type, value} = action.payload;
      return {
        ...state,
        [type]: value
      };
    default:
      return state;
  }
}

export default handleForm;