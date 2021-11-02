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
} from '@chakra-ui/react';


import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"


import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <h1>Login to <b>TOPIC-ORG</b></h1>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <FormControl id="login">
              <FormLabel textAlign="center">User Name</FormLabel>
              <input placeholder="Username" />
              <FormLabel textAlign="center">Password</FormLabel>
              <input type="password" />
            </FormControl>
            <Link
              color="teal.500"
              href=""
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
