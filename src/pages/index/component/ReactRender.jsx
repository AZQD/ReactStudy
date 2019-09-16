import React from 'react'

// export default class ReactRender extends React.PureComponent {
export default class ReactRender extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listData: [
        {
          id: 1,
          name: 'China'
        },
        {
          id: 2,
          name: 'Russia'
        },
        {
          id: 3,
          name: 'America'
        }
      ]
    }
  }

  deleteFun = (index) => {
    console.log(index);
    if(confirm('确认删除吗？')){
      // 如果使用的是React.PureComponent：
      // 浅比较会忽略属性或状态突变的情况，其实也就是，数据引用指针没变而数据被改变的时候，也不新渲染组件。但其实很大程度上，我们是希望重新渲染的。所以，这就需要开发者自己保证避免数据突变。
      // 如果正确渲染，也很简单，改为let listData = this.state.listData.slice(0); 就行啦~（这时的listData是在原来state的基础上复制出来一个新数组，所以引用地址当然变啦）
      let listData = this.state.listData;
      listData.splice(index, 1);
      this.setState({listData});
    }
  };
  
  render() {
    const { listData } = this.state;
    return (
      <div>
        <h3>react setState后render没有更新</h3>

        {
          listData.map((item, index)=>{
            console.log(item, index);
            return (
              <div key={index}>
                <span className="name">{item.name}</span>&emsp;
                <button onClick={() => this.deleteFun(index)}>删除</button>
              </div>
            );
          })
        }
      </div>
    )
  }
}