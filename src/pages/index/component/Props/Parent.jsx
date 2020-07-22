import React, {Component, PureComponent} from 'react'
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

    addItem = () => {
        // let listData = this.state.listData;
        // let listDataNew = Object.assign([], listData);
        let listDataNew = this.state.listData;
        listDataNew.unshift({
            id: Math.random(),
            name: '啦啦啦啦啦啦啦'
        });
        this.setState({listData: listDataNew});
    };

    render () {
        const {listData} = this.state;
        return (
            <div>
                <h3>Parent</h3>
                <button onClick={this.getList}>获取列表数据</button>
                <br/>
                <button onClick={this.addItem}>增加一项</button>

                <hr/>

                <Child listData={listData} />
            </div>
        )
    }
}