
import React from "react";

import {
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";


import {
  AiOutlineSearch,
} from "react-icons/ai";



export default function SearchForm(){
    return (
        <HStack spacing={3} alignItems="center">
            <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
                <InputLeftElement
                    pointerEvents = "none"
                    children      = {<AiOutlineSearch />}
                />
                <Input 
                    type        = "tel" 
                    placeholder = "Search..." 
                />
            </InputGroup>
        </HStack>
    )
}