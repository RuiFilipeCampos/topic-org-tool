import React, {useState} from 'react';
import {
  Box,
  Text,
  Link,


  // form stuff
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Center,
  Input,
  Button,

} from '@chakra-ui/react';

import {Flex, Spacer} from '@chakra-ui/react'

import axios from 'axios';

import { useHistory } from "react-router-dom";

import CoolBox from "../components/coolbox"
import ControlledInput from "../components/controlled"
import {AddIcon, ArrowUpDownIcon} from '@chakra-ui/icons'


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
  // axios.defaults.headers.post['Content-Type'] = "text/plain";


var logged_in = false; 

function Register() {
    let history = useHistory()


    if (logged_in){
        history.push("/dashboard")
    };

    const [user,     setUser]     = useState('');
    const [email,    setEmail]    = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        var request_body = {
            email: email,
            username: user,
            password: password,
        };

        axios.post('http://127.0.0.1:8000/user/register/', request_body)
            .then(function (response) {

                console.log("hello")
                var response_body = response.data

                if (response_body.code == 200){
                    history.push('register/success')
                }

            })
            .catch(function (error) {
                console.log("hello")

                alert("Error?")
                alert(error);
            });
    };

    const base_height = -10

    return (
    <>
    <Center h="200">
    <Text>A clean place to <b>think</b>, <i>plan</i> and <u>execute</u>...</Text>
    </Center>
      <Center h={ (base_height ).toString() }>
          <Text> 
          <Link href="/"> <u>Login</u> </Link> | <b>Register</b>
          </Text>
      </Center>
      <Center h={ (base_height + 540).toString() }> 
          <CoolBox>
              <h1>Register to <b>TOPIC-ORG</b>...</h1>
              <br/>
              <br/>
              <form onSubmit={handleSubmit}>
                  <ControlledInput 
                        label = "E-Mail"
                        onChange={event => setEmail(event.currentTarget.value)}
                  />
                 <ControlledInput 
                        label       = "Username"
                        onChange    = {event => setUser(event.currentTarget.value)}
                 />
                 <ControlledInput 
                        label       = "Password"
                        type        = "password" 
                        onChange    = {event => setPassword(event.currentTarget.value)}
                  />
                <FormControl isRequired>
                    <Button 
                        leftIcon={<AddIcon/>}
                        type="submit"  
                        color="primary" 
                        textAlign="center"
                        colorScheme="blue"
                    > 
                        Register
                    </Button>  
                </FormControl>
              </form>
          </CoolBox>
      </Center>
    </>
    );
  }

export default Register;

export function RegisterSuccess(){
    let base_height = 100
    return (
    <Center h={ (base_height - 40).toString() }> 
            <Box 
                textAlign    = "center" 
                fontSize     = "xl"
                boxShadow    = "dark-lg"
                p            ="10"
                rounded      = "md"
                outline      = "a" 
                outlineColor = "black"
            >
                    Successful registration ! <br/>
                    Click <Link href="/"><u>here</u></Link> to login...
            </Box>
        </Center>
    )
}