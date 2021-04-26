import React, {Component} from 'react';
import {Button} from 'antd';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import './index.scss';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState(prev => {
            prev.count += 1;
            return prev;
        });
    }

    handleMinusOne() {
        this.setState(prev => {
            prev.count -= 1;
            return prev;
        });
    }

    render() {
        return (
            <div className={'container'}>
                <h1>current count: {this.state.count}</h1>
                <Button
                    icon={<PlusOutlined />}
                    onClick={this.handleAddOne.bind(this)}
                >
                    +1
                </Button>
                <Button
                    icon={<MinusOutlined />}
                    onClick={this.handleMinusOne.bind(this)}
                >
                    -1
                </Button>
            </div>
        );
    }
}

export default Home;
