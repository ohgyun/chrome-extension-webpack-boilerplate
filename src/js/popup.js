import React from 'react';
import ReactDOM from 'react-dom';

import '../css/popup.less';

import Hello from './popup/Hello';

ReactDOM.render(
    <Hello name="CRX" />,
    document.getElementById('app')
);
