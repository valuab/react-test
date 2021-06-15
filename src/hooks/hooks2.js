import React, { useState , createContext , useContext } from 'react';

const CountContext = createContext()

function Counter(){
  let count = useContext(CountContext)

  return (
    <h2>{count}</h2>
  )
}

function Hooks2(){
  const [count,setCount] = useState(0)
  return(
    <div>
      <p>YOU CLICKED { count } times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default Hooks2