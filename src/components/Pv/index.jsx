import * as React from 'react';
import {Area} from '@ant-design/charts';

export default class PvLine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const data = [
            {date: '2021-4-4', value: 1000},
            {date: '2021-4-5', value: 1300},
            {date: '2021-4-6', value: 2000},
            {date: '2021-4-7', value: 2100},
            {date: '2021-4-8', value: 4100},
            {date: '2021-4-9', value: 2200},
            {date: '2021-4-10', value: 1200},
        ];

        const config = {
            data,
            xField: 'date',
            yField: 'value',
            xAxis: {tickCount: 5},
            areaStyle: function areaStyle() {
                return {fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'};
            },
        };

        return <Area {...config}/>;
    }
};
