import React, {useState, useEffect} from 'react'

function getSavedValue(key,intialValue) {
  const savedValue = JSON.parse(sessionStorage.getItem(key))
  if(savedValue) return savedValue

  // if we dont have saved value and the intial value is function
  // then we probably want to call and return the intalValue function return value

  if(intialValue instanceof Function) return intialValue();
  
  return intialValue;
}

export default function useLocalStorage(key,intialValue) {
  const [value, setValue] = useState(() => getSavedValue(key,intialValue));

  // useEffect to set value in local storage
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value,setValue]
}