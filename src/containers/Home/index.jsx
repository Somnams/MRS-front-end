import * as React from 'react';
import './index.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
               <p className="first">Home Sweet Home.</p>
               <p className="second">Welcome back.</p>
           </div>
        );
    }
};
