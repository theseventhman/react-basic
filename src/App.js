
// 定义组件
// App -> index.js -> public/index.html(root)
// useState 实现一个计数器按钮
import { useState } from "react";
function App() {
  // 1.调用 useState添加一个状态变量
  // count 状态变量
  // setCount 修改装填变量的方法
  const[count,setCount] = useState(0)

  // 2. 点击事件回调
  const handleClick = () =>{
    // 作用: 1.用传入的值修改count
    // 2.重新使用新的count渲染UI
    setCount(count+1)
  }

  // 修改对象状态
  const[form,setForm] = useState({name:'jack'})

  const changeForm =() =>{
    setForm({
      ...form,
      name: 'john'
    })
  }

  return (
    <div className="App">
     <button onClick={handleClick}>{count}</button>
     <button onClick={changeForm}>修改Form{form.name}</button>
    </div>
  )
}

export default App;
