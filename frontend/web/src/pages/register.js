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



function Register() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        var body = {
            email: email,
            username: user,
            password: password,
        };

        axios.post('http://127.0.0.1:8000/user/register/', body)
            .then(function (response) {
                alert(response);
            })
            .catch(function (error) {
                alert(error);
            });
      

        alert(` Email: ${email} & User: ${user} & Password: ${password}`);
    };


    return (
      <Center h="650px"> 
          <Box textAlign="center" fontSize="xl">
              <h1>Register to <b>TOPIC-ORG</b>...</h1>
              <br/>
              <br/>
              <form onSubmit={handleSubmit}>

                <FormControl isRequired>
                      <FormLabel textAlign="center">
                          E-Mail
                      </FormLabel>
                      <Input 
                          placeholder="Your email..."
                          onChange={event => setEmail(event.currentTarget.value)}
                      />
                      <br/>
                      <br/>
                  </FormControl>


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
                          Register
                      </Button>  
                  </FormControl>
              </form>
              <br/> <br/>
              <Link href="/">Click here to go back to login...</Link>
          </Box>
      </Center>
    );
  }

export default Register;
