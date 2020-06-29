import React, {useState, useEffect, useContext} from 'react'

// 类组件
/*class Index extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      count: 1
    };
  }

  changeFun = () => {
    let count = this.state.count;
    this.setState({
      count: count*2
    });
  };

  render(){
    let count = this.state.count;
    return (
      <div>
        <h3>Hooks</h3>
        <div>{count}</div>
        <button onClick={this.changeFun}>翻倍</button>
      </div>
    )
  }
}*/

console.log('%cHooks', 'color: red; font-size: 30px;');
const MyContext = React.createContext();

// 函数组价
function Index (props) {
  let [count, setCount] = useState(1);

  // react hooks 中模拟 componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // react hooks 中模拟 componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate', count);
  }, [count]);

  // react hooks 中模拟 componentWillUnmount
  useEffect(() => {
    return () => {
      alert('componentWillUnmount');
    };
  }, []);

  return (
    <div>
      <h3>React Hooks应用：useState, useEffect, useContext</h3>
      <div>{count}</div>
      <button onClick={() => setCount(count * 2)}>翻倍</button>

      <MyContext.Provider value={count}>
        <Child/>
      </MyContext.Provider>
    </div>
  )
}

function Child () {
  let count = useContext(MyContext);
  return (
    <div>Child count: {count}</div>
  );
}

export default Index;


// HOOK—useState、useEffect的使用：https://www.jianshu.com/p/dcd6bc12dbee
// ReactJS useContext使用：https://blog.csdn.net/weixin_43676119/article/details/89150233

// useState:
// 参数：初始 state
// 返回值：当前状态和一个让你更新它的函数


// useEffect：（副作用函数）
// 第一个参数：函数；
// 第二个参数：传一个空数组[]时，相当于只在首次渲染的时候执行，也可以传某个值；


// useContext使用步骤：
// 1.创建Context
// 2.使用MyContext.Provider提供value
// 3.使用useContext(MyContext)获得数值value
