import * as React from 'react';
import {Descriptions, Badge} from 'antd';
import './index.scss';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Descriptions title={'About me'} bordered className={'about'}>
                <Descriptions.Item label={'UserName'}>
                    Somnambulist
                </Descriptions.Item>
                <Descriptions.Item label={'Telephone'}>
                    155 **** 2606
                </Descriptions.Item>
                <Descriptions.Item label={'Live'}>
                    Xi'an, Shanxi
                </Descriptions.Item>
                <Descriptions.Item label={'Email'}>
                    3244345132@qq.com
                </Descriptions.Item>
                <Descriptions.Item label={'Address'}>
                    XUST
                </Descriptions.Item>
                <Descriptions.Item label={'GitHub'}>
                    <a href="https://github.com/Somnams">Somnams</a>
                </Descriptions.Item>
                <Descriptions.Item label={'More and more ...'}>
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                </Descriptions.Item>
            </Descriptions>
        );
    };
};
