import React, {useState} from 'react';

import { Button, FormControl, FormLabel, Input, SimpleGrid, GridItem, Center, Container, Flex, VStack, Text } from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons'

import { Heading } from '@chakra-ui/layout';

import TextAnimation from "react-animate-text";

const Motto = () => (
    <Center w="container.xl">
        <Text>
        <TextAnimation charInterval={75}>
            A clean place to <b>think</b>
            , <i>plan</i> and <u>execute</u>...
        </TextAnimation>
        </Text>
    </Center>
)

const Menu = () => <div>
    <b>Login</b> | <u> Register </u>
</div>

const LoginForm = () => {

    const grid_data = {
        columns:1,
        py:10,
        px:39,
        spacing:5,
        shadow:"dark-lg",
        bg:"white"
    }

    return <SimpleGrid {...grid_data}>
        <GridItem>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input/>
            </FormControl>
        </GridItem>
        <GridItem>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input/>
            </FormControl>
        </GridItem>
        <GridItem>
            <FormControl>
                <Center>
                    <Button  
                        leftIcon={<UnlockIcon/>} 
                        variant = "ghost" 
                        colorScheme="black" 
                        type="submit" 
                        textAlign="center"> 
                            Login
                    </Button>
                </Center>               
            </FormControl>
        </GridItem>
    </SimpleGrid>
}


export const Login = () => {
    const vstack_data = {
        width:"full",
        height:"full",
        padding:10,
        spacing:10,
        alignItems:"center",
    }

    return <Container maxW="container.xl" p={0}>
        <Flex h="100vh" py={20}>
            <VStack  {...vstack_data}>
                <Heading>Topic-Org</Heading>
                <Motto />
                <VStack>
                    <Menu /> 
                    <LoginForm/>
                </VStack>
            </VStack>
        </Flex>
    </Container>
};










/*
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
        <Text>
            A clean place to <b>think</b>, <i>plan</i> and <u>execute</u>...
        </Text>
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

*/