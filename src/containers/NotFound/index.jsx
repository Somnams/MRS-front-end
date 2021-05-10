import * as React from 'react';

export default class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'page'}>
                <p className={'description-text'}>404 not found</p>
            </div>
        );
    };
};
