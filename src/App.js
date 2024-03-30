
// 项目的根组件
// App -> index.js -> public/index.html(root)

const count = 100;

function getName() {
  return 'jack'
}

const list = [
  {id:1001, name:"Vue"},
  {id:1002, name:"React"},
  {id:1003, name:"Angular"}
]

function App() {
  return (
    <div className="App">
      this is App
     {/* 渲染列表 */}
     <ul>
       {list.map(item=> <li key={item.id}>{item.name}</li>)}
     </ul>
    </div>
  );
}

export default App;
