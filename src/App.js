// 父传子
// 1.父组件传递数据 子组件标签身上绑定属性

import { useState } from "react"

function Son({onGetSonMsg}){
  // Son组件中的数据
  const sonMsg = 'this is son msg'
  return (
    <div>
      this is Son 
      <button onClick={()=> onGetSonMsg(sonMsg)}></button>
    </div>
    )
}

function App(){
  const[msg,setMsg] = useState('')
  const getMsg = (msg) =>{
    console.log(msg);
    setMsg(msg);
  }
  return (
    <div>
      this is App, {msg}
      <Son onGetSonMsg={getMsg}/>
    </div>
  )
}


export default App