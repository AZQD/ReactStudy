import React, {Component} from 'react'
import ajax from 'ajax-promise-simple';
import '@mockjs/index';
import Child from './Child';

// 类组件
export default class Parent extends Component {
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

    render () {
        const {listData} = this.state;
        return (
            <div>
                <h3>Parent</h3>
                <button onClick={this.getList}>获取列表数据</button>

                <hr/>

                <Child listData={listData} />
            </div>
        )
    }
}