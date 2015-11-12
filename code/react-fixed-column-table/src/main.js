import React from 'react';
import ReactDOM from 'react-dom';

import ReactFixedColumnTable from './ReactFixedColumnTable';

const titles = ["Spalte 1", "Spalte 2", "Spalte 3"];
const rows = [
    ["1.1", "1.2", "1.3", "1.4" ],
    ["2.1", "2.2", "2.3", "2.4" ]
];

const mountNode = document.getElementById('mount');
ReactDOM.render(<ReactFixedColumnTable titles={titles} rows={rows}/>, mountNode);
