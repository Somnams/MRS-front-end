import * as React from 'react';
import axios from '../../request';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('/music/1')
            .then(({data}) => {
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    };
};
