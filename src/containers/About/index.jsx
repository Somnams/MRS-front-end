import * as React from 'react';
import './index.scss';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'page about'}>About</div>
        );
    }
}
