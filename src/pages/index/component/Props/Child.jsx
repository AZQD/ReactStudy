import React, {Component, PureComponent} from 'react'

// 类组件
export default class Child extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        let {listData = []} = this.props;
        return (
            <div>
                <h3>Child</h3>
                <div className="listBox">
                    {
                        listData.map((item, index) =>
                            <div className="listItem" key={index}>
                                {item.name}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}