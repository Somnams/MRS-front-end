import * as React from 'react';
import {Pie} from '@ant-design/charts';

export default class UserPie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            {age: '15-20', sold: 0.43},
            {age: '20-25', sold: 0.30},
            {age: '25-30', sold: 0.17},
            {age: '30-35', sold: 0.10},
        ];

        const config = {
            data,
            angleField: 'sold',
            colorField: 'age',
            radius: 0.8,
            legend: false,
            label: {
                type: 'inner',
                offset: '-50%',
                style: {
                    fill: '#fff',
                    fontSize: 16,
                    textAlign: 'center'
                }
            },
        };

        return <Pie {...config} />;
    }
}
