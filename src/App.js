
// 定义组件
// App -> index.js -> public/index.html(root)
const Button = () =>{
  //业务逻辑组件逻辑
  return <button>click me!</button>
}
function App() {
  return (
    <div className="App">
      {/* 使用组件 （渲染组件) */}
      {/* 自闭合 */}
      <Button/>
      <Button></Button>
      
    
    </div>
  )
}

export default App;
