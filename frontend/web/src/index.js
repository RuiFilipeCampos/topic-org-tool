import React from 'react';
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

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider heme = {theme}>
            <Router>
                <Switch>

                    {/************************************
                    *    The Dashboard page
                    */}

                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>


                    {/************************************
                    *    The Register Success page
                    */}

                    <Route path="/register/success">
                        <RegisterSuccess />
                    </Route>




                    {/************************************
                    *    The Dashboard page
                    */}
                    <Route path="/register">
                        <Register />
                    </Route>
                    



                    {/************************************
                    *    The Login page
                    */}
                    <Route path="/">
                        <Login />
                    </Route>


                </Switch>
            </Router>
        </ChakraProvider>
    </React.StrictMode>
  ,
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
