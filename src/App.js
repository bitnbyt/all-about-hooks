import React, {useState, useEffect, useReducer, Fragment} from 'react'

function init(intialState)  {
  return {count: intialState.count} 
}

function Counter({intialState}) {
  //useReducer(reducer,intialState, init) => [state, dispatch]
  // reducer(state, action) => newState
  // action({type: '', payload // optional : })
  console.log(intialState.count)
  const [state, dispatch] = useReducer(reducer, intialState, init );

  function demo(state,action) {
    return {count: state.count - action.payload}
  }

  function reducer (state,action) {
    switch (action.type) {
      case 'increment':
        (function () {
          console.log("hello")
          return {count: state.count + action.payload}
        })()
      case 'decrement': 
          // demo(state,action)
        return {count: state.count - action.payload}
      case 'reset': 
        return init(action.payload)
      default: 
        throw new Error();
    }
  }

  return (
    <Fragment>
      <div >
        {state.count}
      </div>
      <button onClick={() => dispatch({type: 'increment', payload: 2})}>increment</button>
      <button onClick={() => dispatch({type: 'decrement', payload: 2})}>decrement</button>
      <button onClick={() => dispatch({type: 'reset', payload: intialState})}>reset</button>
    </Fragment>
  )
}

export default function App() {
  return (
    <Counter intialState={{count : 10, "name": "Amit"}} />
  )
}