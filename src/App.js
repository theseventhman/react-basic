// 父传子
// 1.父组件传递数据 子组件标签身上绑定属性

function Son(props){
  // props: 对象里面包含了父组件传递过来的所有的数据
  return <div>this is son, {props.name}</div>
}

function App(){
  const name = 'this is app name'
  return (
    <div>
      <Son name={name}/>
    </div>
  )
}


export default App