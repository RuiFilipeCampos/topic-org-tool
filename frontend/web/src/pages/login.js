import React from 'react';
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




function Login() {

  return (
      <Center h="500px"> 
        <Box textAlign="center" fontSize="xl">
          <h1>Login to <b>TOPIC-ORG</b>...</h1>
          <br /> <br /> 
          <FormControl>
              <FormLabel textAlign="center">Username</FormLabel>
              <Input /> <br />  <br />
              <FormLabel textAlign="center">Password</FormLabel>
              <Input type="password" />  <br /> <br />
              <Button color="primary" textAlign="center"
              > Login</Button> 
          </FormControl>
        </Box>
      </Center>
  );
}

export default Login;
