
import { useState } from "react";

// 问题 布尔切换的逻辑 当前组件耦合在一起的使用 不方便使用
// 解决思路 自定义hook
// function App(){
//   const[value,setValue] = useState(true)

//   const toggle = () => setValue(!value)

//   return (
//     <div>
//       {value && <div> this is div</div>}
//       <button onClick={toggle}>toggle</button>
//     </div>
//   )
// }

function useToggle(){
  // 可复用的逻辑代码
  const[value,setValue] = useState(true)

  const toggle = () => setValue(!value)

  // 哪些状态和回调函数需要在其他组件中使用 return
  return {
    value,
    toggle
  }
}

//封装自动以hook通用思路

// 1. 声明一个以use打头的函数
// 2. 在函数体内封装可用的逻辑 {只要是可以复用的逻辑}
// 3. 把组件中用到的装填或者回调return出去 {以对象或者数组}
// 4. 在哪个组件中要用到这个逻辑，就执行这个函数， 解析出来状态和回调进行使用

function App(){
  const {value,toggle} = useToggle();
  return (
    <div>
      {value && <div>this is div </div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App