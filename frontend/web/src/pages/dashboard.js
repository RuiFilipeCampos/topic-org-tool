import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function dashboard() {
    return (
        <ChakraProvider>
            <p>Dasboard</p>
        </ChakraProvider>
  );
}

export default dashboard;