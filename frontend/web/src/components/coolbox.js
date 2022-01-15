import React from "react"

import {Box} from "@chakra-ui/react"

export default function CoolBox(props){

    return (
        <Box 
            textAlign    = "center" 
            fontSize     = "xl"
            boxShadow    = "dark-lg"
            p            ="10"
            rounded      = "md"
            outline      = "a" 
            outlineColor = "black"
       >
           {props.children}
    </Box>)
}