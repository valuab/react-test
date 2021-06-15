import React, { useState } from 'react';

function Hooks(){
  const [count,setCount] = useState(0)
  
  return(
    <div>
      <p>YOU CLICKED { count } times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

export default Hooks;