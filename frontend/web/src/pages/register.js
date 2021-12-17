import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function register(){
    return(
        <ChakraProvider>
            <p>Register</p>
        </ChakraProvider>
    );
}

export default register;