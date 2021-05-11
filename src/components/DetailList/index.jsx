import * as React from 'react';
import {Modal, List, Tag, Avatar} from 'antd';
import './index.scss';

class DetailList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };
    }

    renderItem(item) {
        return (
            <List.Item className={'detail-modal-list'}
                actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
            >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <div className={'detail-modal-list-name'}>
                    {item.name}
                </div>
                <div className={'detail-modal-list-name'}>{item.name}{item.name}</div>
            </List.Item>
        );
    }

    render() {
        const list = [
            {name: 'this is a music'},
            {name: 'this is a music'},
            {name: 'this is a music'}
            ];
        return (
            <Modal
                className={'detail-modal'}
                title="Basic Modal"
                visible={this.state.visible}
                footer={null}
            >
                <List
                    itemLayout={'horizontal'}
                    dataSource={list}
                    renderItem={this.renderItem.bind(this)}
                />
            </Modal>
        );
    }
}

export default DetailList;
