import * as React from 'react';
import {Carousel} from 'antd';
import './index.scss';

export default class HomeCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3 className={'carousel'}>1</h3>
                </div>
                <div>
                    <h3 className={'carousel'}>2</h3>
                </div>
                <div>
                    <h3 className={'carousel'}>3</h3>
                </div>
                <div>
                    <h3 className={'carousel'}>4</h3>
                </div>
            </Carousel>
        );
    }
}
