import React, {useState, useEffect, useContext, useRef} from 'react'

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
    let countRef = useRef(count); // 用法1：为了每次都拿到最新值，通过一个 ref 并且将数据都挂载到 ref.current 上面；
    let inputRef = useRef(null); // 用法2：和常规ref类似；

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

    const inputChange = () => {
        console.log(inputRef.current.value);
    };
    const addFun = () => {
        setCount(count + 1);
        countRef.current = count + 1;
        setTimeout(() => {
            // 多次点击触发，countRef.current是准确的
            console.log('count:', count);
            console.log('countRef.current:', countRef.current);
        }, 2000);
    };

    return (
        <div>
            <h3>React Hooks应用：useState, useEffect, useContext</h3>
            <div>{count}</div>
            <button onClick={() => addFun()}>翻倍</button>
            <div>当前组件count：{count}</div>
            <div>当前组件countRef.current：{countRef.current}</div>

            <MyContext.Provider value={{count, setCount}}>
                {
                    [1, 2, 3].map((n, i) => (
                        <Child key={n} index={i}/>
                    ))
                }
            </MyContext.Provider>

            <hr/>
            <input onChange={() => inputChange()} ref={inputRef} type="text"/>

        </div>
    )
}

function Child (props) {
    let {count, setCount} = useContext(MyContext);

    useEffect(() => {
        console.log(props.index, 'update');
    }, [count]);

    return (
        <div>
            Child count: {count}
            <button onClick={() => setCount(count+1)}>增加</button>
        </div>
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


// useRef用法：
// // 1.用法1；
// // 2.用法2；
// 参考示例：
// https://zhuanlan.zhihu.com/p/77762141
// http://www.ptbird.cn/react-hook-useEffect-useRef-current-data.html
