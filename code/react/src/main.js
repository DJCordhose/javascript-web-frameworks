import React from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from './HelloMessage';

var mountNode = document.getElementById('mount');
ReactDOM.render(<HelloMessage greeting="Hello"/>, mountNode);
