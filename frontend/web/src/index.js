import React, {Component} from "react";
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider,} from '@chakra-ui/react';
import theme from './config/theme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from './pages/login'
import Register, {RegisterSuccess} from './pages/register'
import Dashboard  from './pages/dashboard';
import { jsx } from '@emotion/react';




class App extends Component{
    constructor(...args){
        super(...args)

        // Configuration.
        this.pages = 
        [
            { component: <Dashboard />,      route: "/dashboard" },
            { component: <RegisterSuccess/>, route: "/register/success" },
            { component: <Register />,       route: "/register" },
            { component: <Login />,          route: "/"}
        ]

        // Initialization.
        this.jsx = []
        
        for (let i = 0; i < this.pages.length; ++i){
            this.jsx.push(
                <Route path = {this.pages[i].route}>
                    {this.pages[i].component}
                </Route>
            )
        }

    }



    render(){
        return(
            <ChakraProvider theme={theme}>
                <Router>
                    <Switch>
                        {this.jsx}
                    </Switch>
                </Router>
            </ChakraProvider>
        )
    }
}



ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
  document.getElementById('root')
);







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
