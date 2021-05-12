import * as React from 'react';
import {Card} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';
import axios from '../../request';
import rootStore from '../../store/rootStore';
import DetailList from "../DetailList";
import './index.scss';

class RecommendList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            dataSource: []
        };
    }

    showDetailList() {
        this.setState(prev => {
            return {prev: prev.visible = true}
        });
        this.getSongList();
    }

    getSongList() {
        const dic = {
            recommend: '/music'
        };
        const path = `${dic[this.props.listType]}/${rootStore.userId}`;

        axios.get(path)
            .then(({data}) => {
                this.setState(prev => {
                    return {prev: prev.dataSource = data};
                });
                return data;
            })
            .catch(e => {
                console.log(e);
            });
    }

    cancelDetailList() {
        this.setState(prev => {
            return {prev: prev.visible = false}
        });
    }

    render() {
        const dataSrc = 'http://p2.music.126.net/fob5pHV3xzGlJ_-KEeLFLg==/109951165693966983.jpg?param=140y140';
        const a = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
        return (
            <div>
                <Card
                    hoverable
                    className={'recommend'}
                    cover={<img alt="example" src={this.props.coverSrc} />}
                    onClick={this.showDetailList.bind(this)}
                >
                    <Card.Meta
                        description={<PlayCircleOutlined />}
                        className={'recommend-icon'}
                    />
                    <Card.Meta
                        description={'想你了 其实我也很脆弱'}
                        className={'recommend-meta'}
                    />
                </Card>
                <DetailList
                    changeVisible={this.cancelDetailList.bind(this)}
                    visible={this.state.visible}
                    data={this.state.dataSource}
                />
            </div>
        );
    }
}

export default RecommendList;
