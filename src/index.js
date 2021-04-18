import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import reportWebVitals from "./reportWebVitals";
import 'antd/dist/antd.css';
import App from "./App";

ReactDom.render(
    <App/>,
    document.getElementById('root')
);

reportWebVitals(console.log);
