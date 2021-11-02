import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,

  // form stuff
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Center,
  Input,
  Button,
} from '@chakra-ui/react';


import {useRouter} from 'react'

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Login from './pages/login'
import Dashboard  from './pages/dashboard';

function App() {

  return (
    <ChakraProvider theme={theme}>
    <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
    </Router>
    </ChakraProvider>
  );
}

export default App;
