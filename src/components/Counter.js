import { useState } from 'react'

export default function Counter() {
  // the first (count) is always the state variable, next comes the "setter" which should be called set"name of variable"
  const [count, setCount] = useState(0)
  return (
    <>
  <h1>Counter: {count} </h1>
  <button onClick={() => setCount(count+1)}>+1</button>
  </>
  )
}