import React, {Component, PureComponent} from 'react'
import ajax from 'ajax-promise-simple';
import { debounce } from 'lcj'; // 防抖
import '@mockjs/index';
import Child from './Child';

// 类组件
export default class Parent extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            listData: []
        };
    }

    getList = () => {
        ajax.getJSON('/props/parent/list').then(res => {
            console.log('listData', res);
            this.setState({
                listData: res.data || []
            });
        });
    };

    addItem = () => {
        let newItem = {
            id: Math.random(),
            name: '啦啦啦啦啦啦啦'
        };
        let listData = this.state.listData;


        // 场景一、对于当前组件：如果是用Component创建的类组件，可以使用listData：
        // listData.unshift(newItem);
        // this.setState({listData: listData});


        // 场景二、对于当前组件：如果是用PureComponent创建的类组件，必须创建新的listData：
        // 方法1：
        // let listDataNew = Object.assign([], listData); // 创建新的listData
        // listDataNew.unshift(newItem); // 添加newItem

        // 方法2：
        // let listDataNew = listData.slice(); // 创建新的listData
        // listDataNew.unshift(newItem); // 添加newItem

        // 方法3：
        let listDataNew = [newItem, ...listData]; // 创建新的listData，添加newItem

        this.setState({listData: listDataNew});

    };

    render () {
        const {listData} = this.state;
        return (
            <div>
                <h3>Parent</h3>
                <button onClick={debounce(this.getList, 1000)}>获取列表数据</button>
                <br/>
                <button onClick={this.addItem}>增加一项</button>

                <hr/>

                <Child listData={listData} />
            </div>
        )
    }
}