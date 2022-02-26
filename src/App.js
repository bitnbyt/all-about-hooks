import React, {useRef, useState, useEffect} from 'react'

// useRef is use to store something which does not go away in re-render
// also useRef doesn't cause re-render on its value change, opposite of useState
// useRef return {currnet: someValue}
// mainly useRef is used to get refernce to html elements 
// we should not try to mutate/edit/appendChild with the useRef becoz
// as it doesn't cause re-render so if we change something it might not give us the result
// and we can easily have lots of bug
// just use useRef when you need to attacheventlistner, focus etc, but don't directly mutate

// lets see a simple example 
// show the times of render/re-render

export default function App() {
  const [name, setName] = useState('');

  // if we run the above we can get into infinte loop as
  // every time render we are setting state which will again 
  // coz state to re-render and so on.
  // const [renderCount, setRenderCount] = useState(0)

  // useEffect(() => {
  //   setRenderCount(prev => prev + 1)  
  // })


  // instead if we use a ref
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const inputRef = useRef();

  function focus() {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value) } />
      <button onClick={focus}> Focus</button>
      <div> My name is {name} </div>
      <div> total renderd count: {renderCount.current}</div>
    </div>
  )
}