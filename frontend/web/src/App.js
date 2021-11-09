import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LightMode, DarkMode } from '@chakra-ui/color-mode';


import Login from './pages/login'
import Register, {RegisterSuccess} from './pages/register'
import Dashboard  from './pages/dashboard';







function App() {



  return (
    <>
        <Router>
            <Switch>

                <Route path="/dashboard">
                    <Dashboard />
                </Route>

                <Route path="/register/success">
                    <RegisterSuccess />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
                
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    </>
  );
}

export default App;
