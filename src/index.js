import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import CalciteThemeProvider from 'calcite-react/CalciteThemeProvider';
import { 
    HashRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <CalciteThemeProvider>
        <Router>
            <App />
        </Router>
    </CalciteThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
