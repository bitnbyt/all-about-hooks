import React, {useState} from 'react'

import useLocalStorage from './useLocalStorage'


// one of the key benifit of creating/using custom hooks is that we use them and 
// don't care about the implementation :)

export default function App() {
  // here setName will be used to set Name (or value in context of useLocalStorage)
  const [name,setName] = useLocalStorage("name", () => "")
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}