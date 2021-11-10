
import React, {Component} from "react";

import ControlledInput from "./controlled";

import {
  Box,
  Flex,
  HStack,
  Spacer,
  Text, 
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/form-control";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

import {
  MinusIcon, 
} from '@chakra-ui/icons'

import MSpacer from "./MSpacer";




export function Topic({title, desc}){

    return ( <>
     <Flex >
      <Spacer/>
        <Box 
            borderWidth="10px"
            shadow="2xl"
            backgroundColor="white"
            borderColor="transparent"
            width="90%"
            h="120px"
            shadow="md"
            _hover={{ shadow:"xl" }}


        >
            <Flex flexDirection="column">
                <Flex flexDirection="row" as="a">
                    <Text> <MinusIcon as="a" color="darkblue"/> </Text>  <Spacer/>
                    <Text color="darkblue"> <b>{title} </b> </Text>
                    <MSpacer n="99"/>
                </Flex>
                <MSpacer n="1" />
                {desc}
                <MSpacer n="900"/>
                <HStack>
                    <Box bg="black" width="3.5%" > . </Box>
                    <Box bg="black" width="3.5%" > . </Box>
                    <Box bg="black" width="3.5%" > . </Box>
                </HStack>
            </Flex>
        </Box>
      <Spacer/>
    </Flex>
    <br/> </>
    )
  }






export class NewTopic extends Component{
    



    constructor(...args){
        super(...args)

        this._open = false
    }

    toggle(){
        this._open = !this._open
        this.forceUpdate()
    }



    closed(){


        var handle = () => this.toggle()

        return ( <>
            <Flex >
             <Spacer/>
               <Box 
                   borderWidth="5px"
                   shadow="md"
                   backgroundColor="white"
                   borderColor="transparent"
                   width="90%"
                   h="auto"
                   _hover={{ shadow:"xl" }}
                   onDoubleClick = {handle}
               >
                   Double click to create a new topic...
               </Box>
             <Spacer/>
           </Flex>
           <br/> </>
           )
    }


    open(){


        var handle = () => this.toggle()

        return ( <>
            <Flex >
             <Spacer/>
               <Box 
                   borderWidth="5px"
                   shadow="dark-lg"
                   backgroundColor="white"
                   borderColor="transparent"
                   width="90%"
                   h="auto"
                   
               >
                   <Flex flexDirection="column">
                   <Text onDoubleClick = {handle}> Double click to close...</Text>
                   <br/>
                   <form>
                       <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input/>
                       </FormControl>
                        <br/>
                       <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input type="text" h="100px" />
                       </FormControl> 
                       <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input type="file"/>
                       </FormControl>                      
                       <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input type="color" />
                       </FormControl>
                   </form>
                   </Flex>

               </Box>
             <Spacer/>
           </Flex>
           <br/> </>
           )
    }

    render(){


        if (this._open) {
            return this.open()
        }

        return this.closed()

    }



  }

