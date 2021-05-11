import * as React from 'react';
import {Card} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';
import DetailList from "../DetailList";
import './index.scss';

class RecommendList extends React.Component {
    constructor(props) {
        super(props);
    }

    testClick() {
        console.log('click');
    }

    render() {
        const dataSrc = 'http://p2.music.126.net/fob5pHV3xzGlJ_-KEeLFLg==/109951165693966983.jpg?param=140y140';
        const a = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
        return (
            <Card
                hoverable
                className={'recommend'}
                cover={<img alt="example" src={dataSrc} />}
                onClick={this.testClick.bind(this)}
            >
                <Card.Meta
                    description={<PlayCircleOutlined />}
                    className={'recommend-icon'}
                />
                <Card.Meta
                    description={'想你了 其实我也很脆弱'}
                    className={'recommend-meta'}
                />
                <DetailList />
            </Card>
        );
    }
}

export default RecommendList;
