import React from 'react'
import { createStore } from 'redux'
console.log(createStore);


function fn(){}

const store = createStore(fn);

const action = {
  type: 'ADD_TODO',
  payload: "Learn Redux"
};
store.dispatch(action);
console.log(store);
console.log(store.getState());
const Demo02 = ((props)=>{
  // console.log(props);
  return (
    <div>
      456
    </div>
  )
});

export default Demo02;