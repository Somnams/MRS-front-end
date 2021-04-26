import * as React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {initI18nInstance} from './i18n';

initI18nInstance().then(async () => {
    const {default: App} = await import('./App');
    ReactDOM.render(<App/>, document.getElementById('root'));
});

// reportWebVitals();
