import React from "react";

import {

  
    // form stuff
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Center,
    Input,
    Button,
  
  } from '@chakra-ui/react';

export default function ControlledInput({label, placeHolder, onChange, type}){

    return(
        <FormControl isRequired>
            <FormLabel textAlign="center">
                {label}
            </FormLabel>
            <Input 
                placeholder = {placeHolder}
                onChange    = {onChange}
                type        = {type}
            />
            <br/><br/>
        </FormControl>
    )
}