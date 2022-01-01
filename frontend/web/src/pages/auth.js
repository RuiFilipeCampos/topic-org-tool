import React, {useState} from 'react';
import {
  Text, Link, Center,
  Input, Button, Box, Flex,
VStack, Spacer, Divider,
  // form stuff
  FormControl, FormLabel,
  FormErrorMessage, FormHelperText,
} from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";
import CoolBox from "../components/coolbox"
import ControlledInput from "../components/controlled"
import { UnlockIcon } from '@chakra-ui/icons'
var logged_in = false; 

export function Login() {

    const [user,     setUser] = useState('');
    const [password, setPassword] = useState('');

    let history = useNavigate()

    if (logged_in){
        history.push("/dashboard")
    };

    const handleSubmit = event => {
        event.preventDefault();

        var request_body = {
            username: user,
            password: password,
        };


        alert(`User: ${user} & Password: ${password}`);
    };

    const base_height = -10

    return <>
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
                <br/> <br/>

                <form onSubmit={handleSubmit}>
                    <Flex flexDirection="column">  
                        <ControlledInput 
                            label       = "Username"
                            onChange    = {event => setUser(event.currentTarget.value)}
                            variant = "outline"
                        />
                        <ControlledInput 
                            label = "Password"
                            type        = "password"
                            variant = "outline"
                            onChange    = {event => setPassword(event.currentTarget.value)}
                        /> 
                    </Flex>
                    <FormControl >
                        <Button leftIcon={<UnlockIcon/>} variant = "ghost" colorScheme="black"  type="submit" textAlign="center"> 
                            Login
                        </Button>  
                    </FormControl>
                </form>
            </CoolBox>
        </Center>

      </VStack>
    </>
  }

