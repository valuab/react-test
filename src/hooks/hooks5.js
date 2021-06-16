import React, { useState } from 'react';

function hooks5(){
  const [data1,setData1] = useState('小红今天吃鱼')
  const [data2,setData2] = useState('小明今天撸猫')

  return(
    <>
      <button onClick={()=>{setData1(new Date().getTime())}}>小红</button>
      <button onClick={()=>{setData2(new Date().getTime() + 'data')}}>小明</button>
      <ChildComponent name={data1}>{data2}</ChildComponent>
    </>
  )
}


function ChildComponent({name,child}){

  function changeXiaohong(){
    console.log('she is go')
    return name +　',' + new Date().getTime()
  }

  const actionXiaohong = changeXiaohong(name)

  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{child}</div>
    </>
  )
}

export default hooks5