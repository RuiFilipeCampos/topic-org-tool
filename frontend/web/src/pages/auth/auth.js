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

var post_config = {
    method:"POST",
    headers:{
        'Content-Type': 'application/json',
    },
}

function post(endpoint, data)
{
    post_config.body = JSON.stringify(
        JSON.stringify(data)
    )

    return fetch("/auth/login", post_config)
}

var reload = false
const handleLogin = (username, password) => {
    let config = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({ 
            username: username,
            password: password
        })
    }

    post("/auth/login", 
        { 
            username: username,
            password: password
        }
    )
    .then(response => response.json())
    .then(payload => {
        if (payload.status != 200){
            console.log("Login not successful.")
        }
        
        reload = true
        window.location.href = "/"
    })


}

const LoginForm = () => {


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

    const login_button_data = {
        leftIcon:<UnlockIcon/>, 
        variant:"ghost" ,
        colorScheme:"black", 
        type:"submit" ,
        textAlign:"center",
        onClick: () => handleLogin(
            username,
            password
        )
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
                    <Button {...login_button_data}> 
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

export const Login = () => {
    if (reload){
        reload = false
        window.location.href = "/dashboard"
        
    }
    amIloggedIn().then(
        session_status => {
            if (session_status){
                window.location.href = "/dashboard"
            }
        }
    )

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

}
