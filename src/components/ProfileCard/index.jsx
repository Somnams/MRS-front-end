import * as React from 'react';
import {Card} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';
import DetailList from "../DetailList";
import './index.scss';

class RecommendList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            dataSource: []
        };

        this.dic = [
            '歌曲推荐',
            '根据听歌记录为你打造',
            '和你相似的用户都在听',
            '你的好友都在听',
            '我喜欢的音乐'
        ];
    }

    showDetailList() {
        this.setState(prev => {
            return {prev: prev.visible = true}
        });
    }

    cancelDetailList() {
        this.setState(prev => {
            return {prev: prev.visible = false}
        });
    }

    render() {
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
                        description={this.dic[this.props.desc]}
                        className={'recommend-meta'}
                    />
                </Card>
                <DetailList
                    index={this.props.index}
                    changeVisible={this.cancelDetailList.bind(this)}
                    visible={this.state.visible}
                    data={this.props.data}
                />
            </div>
        );
    }
}

export default RecommendList;
