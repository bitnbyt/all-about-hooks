import React from 'react'
import {ACTIONS} from './App'

export default function ToDo({todo, dispatch}) {
  return (
    <React.Fragment>
      <span style={{color: todo.completed ? '#AAA' : '#000'}}>{todo.name}</span>
      <button onClick={() => dispatch({type: ACTIONS.TOOGLE_TODO, payload: {id: todo.id}}) }>
        Toogle</button>
      <button onClick={() => dispatch({tyoe: ACTIONS.DELETE_TODO, payload: {id: todo.id}}) }>Delete</button>
    </React.Fragment>
  )
}