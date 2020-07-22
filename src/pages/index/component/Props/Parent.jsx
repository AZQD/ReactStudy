import React, {Component, PureComponent} from 'react'
import ajax from 'ajax-promise-simple';
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

    // 防抖（只执行一次）
    /**
     * 定义：规定一个期限时间，在首次触发事件时，不立即执行回调函数，而是在期限时间后再执行，如果期限时间内回调函数被重复执行，则期限时间重新计时。
     * 应用：1.百度搜索输入框，延迟请求；2.window的scroll、resize事件调整窗口；
     */
    debounce = (fn, delay) => {
        let timer = null;
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(fn, delay)
        }
    };

    render () {
        const {listData} = this.state;
        return (
            <div>
                <h3>Parent</h3>
                <button onClick={this.debounce(this.getList, 1000)}>获取列表数据</button>
                <br/>
                <button onClick={this.addItem}>增加一项</button>

                <hr/>

                <Child listData={listData} />
            </div>
        )
    }
}