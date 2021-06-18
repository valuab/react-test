import React, { useContext , useMemo} from 'react';
import {ColorContext,UPDATE_COLOR} from './color'

function Buttons(word){
  const {dispatch} = useContext(ColorContext)

  function chlidren(word){
    console.log('change',word)
    return word + 'asd'
  }

  const actionMethod = useMemo(()=>chlidren(word),[word])

  return(
    <div>
      <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'red'})}}>红色</button>
      <button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'yellow'})}}>黄色</button>
      <div>{actionMethod}</div>
    </div>
  )
}

export default Buttons