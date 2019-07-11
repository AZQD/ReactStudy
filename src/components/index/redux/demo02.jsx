import React from 'react'

import {createStore} from 'redux'


const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'REDUCE':
      return state - 1;
    default:
      return state;
  }
};
let store = createStore(reducer);

const ctrlFun = (flag) => {
  store.dispatch({
    type: flag ? 'ADD' : 'REDUCE'
  });
}


const Demo01 = (() => {
  return (
    <div>
      <button onClick={() => ctrlFun(true)}>ADD</button>
      <span>{store.getState()}</span>
      <button onClick={() => ctrlFun(false)}>REDUCE</button>
    </div>
  )
});
store.subscribe(() => {
  console.log(store.getState());
})
export default Demo01;