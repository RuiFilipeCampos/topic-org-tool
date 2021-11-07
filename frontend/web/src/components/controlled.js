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

export default function ControlledInput({h, variant, label, placeHolder, onChange, type}){

    return(
        <FormControl >
            <FormLabel>{label}</FormLabel>
            <Input 
                variant = {variant}
                placeholder = {placeHolder}
                variant = {variant}
                onChange    = {onChange}
                type        = {type}
                h = {h}
        /> <br/> <br/>
        </FormControl>
    )
}