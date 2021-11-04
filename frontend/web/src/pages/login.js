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
  Spacer,
} from '@chakra-ui/react';

import { useHistory } from "react-router-dom";

import axios from 'axios';


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}


const csrftoken = getCookie('csrftoken');


axios.defaults.headers.common['X-CSRF-TOKEN'] = csrftoken;


function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    let history = useHistory()



    const handleSubmit = event => {
        event.preventDefault();

        var request_body = {
          username: user,
          password: password,
        };

        axios.post('http://127.0.0.1:8000/user/login/', request_body)
            .then(function (response) {
                var response_body = response.data

                if (response_body.code == 200){
                    history.push('register/success')
                }
            })
                .catch(function (error) {
                  alert(error);
            });
        alert(`User: ${user} & Password: ${password}`);
    };

    const base_height = 300

    return (
      <> 
      <Center h={ (base_height + 0).toString() }>
        <Text> 
            <b> Login </b> | <Link href="register"><u>Register</u></Link>
        </Text>
      </Center>
      <Center h={ (base_height - 150).toString() }> 
          <Box textAlign="center" fontSize="xl"
            textAlign    = "center" 
            fontSize     = "xl"
            boxShadow    = "dark-lg"
            p            = "10"
            rounded      = "md"
            outline      = "a" 
            outlineColor = "black"
          >
              <h1>Login to <b>TOPIC-ORG</b>...</h1>
              <br/><br/>
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
          </Box>
      </Center>
      </>
    );
  }

export default Login;