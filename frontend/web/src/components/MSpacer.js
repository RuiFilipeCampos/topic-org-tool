import React from "react";


import {
  Spacer,
} from "@chakra-ui/react";



export default function MSpacer({n}){

    let elements = []
  
    for (let x = 0; x < n; x++){
        elements.push(<Spacer/>)
    };
  
    return elements
  }