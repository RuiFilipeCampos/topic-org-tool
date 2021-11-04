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





function Register() {
    let history = useHistory()

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
                var response_body = response.data

                if (response_body.code == 200){
                    history.push('register/success')
                }

            })
            .catch(function (error) {
                alert(error);
            });
    };

    let base_height = 300

    return (
    <>
      <Center h={ (base_height + 0).toString() }>
          <Text> 
          <Link href="/"> <u>Login</u> </Link> | <b>Register</b>
          </Text>
      </Center>
      <Center h={ (base_height - 40).toString() }> 
          <CoolBox>
              <h1>Register to <b>TOPIC-ORG</b>...</h1>
              <br/>
              <br/>
              <form onSubmit={handleSubmit}>
                  <ControlledInput 
                        label = "E-Mail"
                        placeHolder = "your_email@domain.com"
                        onChange={event => setEmail(event.currentTarget.value)}
                  />
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