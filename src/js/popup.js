import "../css/popup.css";
import example from './popup/example';

import React from 'react';
import ReactDOM from 'react-dom';

example();

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);