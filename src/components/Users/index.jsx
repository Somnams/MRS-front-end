import * as React from 'react';
import {Pie} from '@ant-design/charts';

// TODO:: total font-size
export default class UserPie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            {type: 'man', value: 100},
            {type: 'women', value: 20},
        ];

        const config = {
            data: data,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            innerRadius: 0.64,
            meta: {
                value: {
                    formatter: function formatter(v) {
                        return ''.concat(v, 'p');
                    },
                },
            },
            label: {
                type: 'inner',
                offset: '-50%',
                style: { textAlign: 'center' },
                autoRotate: false,
                content: '{value}',
            },
            interactions: [
                { type: 'element-selected' },
                { type: 'element-active' },
                { type: 'pie-statistic-active' },
            ],
        };

        return <Pie {...config}/>;
    };
}
