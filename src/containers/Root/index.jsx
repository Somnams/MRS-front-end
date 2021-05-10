import * as React from 'react';
import './index.scss';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'page root-home'}>
                <p className={'description-text'}>Music makes the world a better place.</p>
            </div>
        );
    }
}
