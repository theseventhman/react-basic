
// 项目的根组件
// App -> index.js -> public/index.html(root)
function App() {
  const handleClick = (name,e) =>{
    console.log('button被点击了',name,e)
  }
  return (
    <div className="App">
      <button onClick={(e)=>handleClick('jack',e)}>click me</button>
    
    </div>
  )
}

export default App;
