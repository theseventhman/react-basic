// // 1. 通过子传父 A -> App
// // 2. 通过父传子 App -> B

import { useContext } from "react"

const { createContext } = require("react")

// import { useState } from 'react'


// function A({onGetAName}){
//   // Son组件中的数据
//   const name= 'this is name'
//   return (
//     <div>
//       this is A component,
//       <button onClick={() =>{
//         onGetAName(name)
//       }}>send</button>
//     </div>
//   )
// }

// function B({name}){
//   return (
//     <div>
//       this is B component,
//       {name}
//     </div>
//   )
// }

// function App(){
//   const[name,setName] = useState('')
//   const getAName = (name) =>{
//     console.log(name)
//     setName(name)
//   }
//   return (
//     <div>
//       this is App
//       <A onGetAName={getAName}/>
//       <B name={name}/>
//     </div>
//   )
// }

// export default App

// 使用context实现跨层通信
// App -> A -> B

// 1. createContext方法创建一个上下文对象

const MsgContext = createContext() 

// 2. 在顶层组件 通过provider组件提供数据
// 3. 在底层组件 通过useContext钩子函数使用数据

function A() {
  return (
    <div>
      this is A component
      <B/>
    </div>
  )
}

function B() {
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B component, {msg}
    </div>
  )
}

function App() {
  const msg = 'this is app msg'
  return (
    <div>
      <MsgContext.Provider value={msg}>
        this is App
        <A/>
      </MsgContext.Provider>
    </div>
  )
}

export default App
