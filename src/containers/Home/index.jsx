import * as React from 'react';
import PvLine from '../../components/Pv';
import UserPie from '../../components/Users';
import './index.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'home'}>
                <div className={'home-pv'}>
                    <p className={'home-pv-title'}>PvLine</p>
                    <PvLine />
                </div>
                <div className={'home-pie'}>
                    <p className={'home-pie-title'}>userPie</p>
                    <UserPie />
                </div>
            </div>
        );
    };
};
