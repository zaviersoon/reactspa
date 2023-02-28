import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Rootcomponent from './rootcomponent/root';


ReactDOM.render(<HashRouter>
    <Rootcomponent></Rootcomponent>
    </HashRouter>, document.getElementById('root'))
