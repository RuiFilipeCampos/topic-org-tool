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

import {Flex, Spacer} from '@chakra-ui/react'

import axios from 'axios';

import { useHistory } from "react-router-dom";

function Register() {
    let history = useHistory()


    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
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
                    history.push('success')
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
          <Box 
            textAlign    = "center" 
            fontSize     = "xl"
            boxShadow    = "dark-lg"
            p           ="10"
            rounded = "md"
            outline      = "a" 
            outlineColor = "black"
          >
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
          </Box>
      </Center>
      </>
    );
  }

export default Register;



export function RegisterSuccess(){
    return (
    <>
    <VStack >
        <Spacer /><Spacer /><Spacer /><Spacer />
        <Spacer /><Spacer /><Spacer /><Spacer />
        <Spacer /><Spacer /><Spacer /><Spacer />
        <Spacer /><Spacer /><Spacer /><Spacer />
        <Flex>
            <Spacer />
            <Box w="170px" h="100px" bg="red.500" >
                <VStack>
                    <Spacer/><Spacer />
                    <Center>
                        <h1>Successfully logged in to </h1>
                    </Center>
                </VStack>
            </Box>
            <Spacer />
        </Flex>
    </VStack>
    </>
    )
}