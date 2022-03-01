import React, {useState, useEffect, useReducer, Fragment} from 'react'
import ToDo from './Todo'

export const ACTIONS = {
  ADD_TODO : 'add-todo',
  TOOGLE_TODO: 'toogle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer (todos,action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOOGLE_TODO: 
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    case ACTIONS.DELETER_TODO: 
      return todos.filter(todo => todo.id !== action.payload.id)
  }
}

function newTodo(name) {
  return {id: Date.now(), name, completed: false}
}


export default function App() {

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO,payload: {name}})
    setName('')
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </Fragment>
  )
}

// here useReducer has helped us as we are passing dispatch which is doing all the work of delter add toggle.
// without it we would have passing handleToogle, handleDelete and so on for further requirements.
