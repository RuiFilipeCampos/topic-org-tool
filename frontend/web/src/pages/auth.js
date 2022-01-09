import React, {useState} from 'react';
import { 
    Button, 
    FormControl,
    FormLabel, 
    Input, 
    SimpleGrid, 
    GridItem, 
    Center, 
    Container,      
    Flex, 
    VStack, 
    Text 
} from '@chakra-ui/react';

import { UnlockIcon } from '@chakra-ui/icons'
import { Heading } from '@chakra-ui/layout';
import TextAnimation from "react-animate-text";
import { amIloggedIn } from '../utils/check';

const Motto = () => <Center w="container.xl">
    <Text>
        <TextAnimation charInterval={75}>
            A clean place to <b>think</b>
            , <i>plan</i> and <u>execute</u>...
        </TextAnimation>
    </Text>
</Center>


const Menu = () => <div>
    <b> Login </b> | <u> Register </u>
</div>


const axios = require('axios');
var BASE_URL = "http://127.0.0.1:5000"

const handleLogin = (username, password) => {
    const data = { 
        username: username,
        password: password
    };

    fetch(
        "/auth/login",
    )

    let config = {
        headers: { "withCredentials":true, "Content-Type":"application/json"  } 
    }


    axios.post(BASE_URL + '/auth/login',
        { 
            username: username,
            password: password
        }, 
        config
    )
    .then(function (response) {
      // handle success
      let status = response.data.status
      if (status == 200){
        if (amIloggedIn()){
            window.location.href = "/dashboard"
        } else {
            alert("something went wrong")
        }
        
      } else {
          alert("Login not successful.")
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      alert("Application error.")
    })
    .then(function () {
      // always executed
    });
}

const LoginForm = () => {
    if (amIloggedIn()) {
        window.location.href = "/dashboard"
    }

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

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
                <Input 
                    onChange={
                        e => setUsername(e.currentTarget.value)
                    }
                />
            </FormControl>
        </GridItem>
        <GridItem>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    onChange={
                        e => setPassword(e.currentTarget.value)
                    }
                />
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
                        textAlign="center"
                        onClick = {
                            () => handleLogin(
                                username,
                                password
                            )
                        }> 
                            Login
                    </Button>
                </Center>               
            </FormControl>
        </GridItem>
    </SimpleGrid>
}




const vstack_data = {
    width:"full",
    height:"full",
    padding:10,
    spacing:10,
    alignItems:"center",
}

export const Login = () => <Container maxW="container.xl" p={0}>
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
