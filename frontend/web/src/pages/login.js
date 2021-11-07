import React, {useState} from 'react';
import {
  Text, Link, Center,
  Input, Button,
VStack,
  // form stuff
  FormControl, FormLabel,
  FormErrorMessage, FormHelperText,
} from '@chakra-ui/react';

import { useHistory } from "react-router-dom";

import axios from 'axios';
import CoolBox from "../components/coolbox"
import ControlledInput from "../components/controlled"






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
axios.defaults.headers.post['Content-Type'] = "text/plain";


function Login() {

    const [user,     setUser] = useState('');
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



    const base_height = -10

    return (
      <>          
      <Center h="200">

        <Text>A clean place to <b>think</b>, <i>plan</i> and <u>execute</u>...</Text>
      </Center>

      <VStack>
      <Center h={ (base_height).toString() }>
        <Text> 
            <b> Login </b> | <Link href="register"><u>Register</u></Link>
        </Text>
      </Center>
      <Center h={ (base_height - 150).toString() }> 
          <CoolBox>
              <h1>Login to <b>TOPIC-ORG</b>...</h1>
              <br/><br/>
              <form onSubmit={handleSubmit}>    
                  <ControlledInput 
                            label       = "Username"
                            placeHolder = "a_cool_person"
                            onChange    = {event => setUser(event.currentTarget.value)}
                  />
                  <ControlledInput 
                        label       = "Password"
                        type        = "password" 
                        placeHolder = "*******"
                        onChange    = {event => setPassword(event.currentTarget.value)}
                  />
                  <FormControl isRequired>
                      <Button type="submit"  color="primary" textAlign="center"> 
                          Login
                      </Button>  
                  </FormControl>
              </form>
          </CoolBox>
      </Center>
      </VStack>
      </>
    );
  }

export default Login;