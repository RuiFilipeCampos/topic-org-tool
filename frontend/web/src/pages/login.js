import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
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


import axios from 'axios';



function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        alert(`User: ${user} & Password: ${password}`);
    };


    return (
      <Center h="500px"> 
          <Box textAlign="center" fontSize="xl">
              <h1>Login to <b>TOPIC-ORG</b>...</h1>
              <br/>
              <br/>
              <form onSubmit={handleSubmit}>
                
                  <FormControl isRequired>
                      <FormLabel textAlign="center">
                          Username
                      </FormLabel>
                      <Input 
                          id = "user" 
                          placeholder="Your username..."
                          onChange={event => setUser(event.currentTarget.value)}
                      />
                      <br/>
                      <br/>
                  </FormControl>



                  <FormControl isRequired>
                      <FormLabel textAlign="center">
                          Password
                      </FormLabel>
                      <Input 
                          type = "password" 
                          id   = "pass"
                          placeholder = "*******"
                          onChange={event => setPassword(event.currentTarget.value)}
                      />  
                      <br/>
                      <br/>
                  </FormControl>

                  <FormControl isRequired>
                      <Button type="submit"  color="primary" textAlign="center"> 
                          Login
                      </Button>  
                  </FormControl>
              </form>
              <br/> <br/>
              Or register <Link href="register">here</Link>...
          </Box>
      </Center>
    );
  }

export default Login;