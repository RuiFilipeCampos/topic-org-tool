
import React, {Component} from "react";

import {TOPICS_TO_RENDER} from "./state"

import ControlledInput from "./controlled";

import {
  Box,
  ChakraProvider,
  Flex,
  HStack,
  Spacer,
  Text, 
  Button,
  Textarea,
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/form-control";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

import {
  MinusIcon, 
} from '@chakra-ui/icons'

import MSpacer from "./MSpacer";











export function Topic({title, desc}){

    return ( 
    <>
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

        return ( 
        <>
            <Flex >
             <Spacer/>
               <Box 
                   borderWidth="8px"
                   shadow="md"
                   backgroundColor="white"
                   borderColor="transparent"
                   width="90%"
                   h="auto"
                   _hover={{ shadow:"xl" }}
                   onDoubleClick = {handle}
               >
                   <i>Double click to create a new topic...</i>
               </Box>
             <Spacer/>
           </Flex>
           <br/> 
        </>
           )
    }


    open(){


        var handle = () => this.toggle()

        return ( 
        <>
            <Flex >
             <Spacer/>
               <Box 
                   borderWidth="5px"
                   shadow="2xl"
                   backgroundColor="white"
                   borderColor="transparent"
                   width="90%"
                   h="auto"
                   margin="3"
                   borderRadius="md"
               >
                   <Flex flexDirection="column" margin="3">
                        <Text onDoubleClick = {handle}> <i> Double click to close... </i> </Text>
                        <br/>
                        <form>
                            <FormControl>
                                <Input placeholder="Title" ty marginBottom="3"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea 
                                    placeholder="Text" 
                                    fontSize="lg"
                                    height="sm" 
                                    size="sm" 
                                    resize="none"
                                >
                                </Textarea>
                            </FormControl> 
                            <Flex flexDirection="row" margin="5">
                                <MSpacer n="1"/>
                                <Button type="button" width="20%" marginRight="5" bg="gray.300" onClick = {handle}>Cancel</Button>
                                <Button type="submit" width="20%" colorScheme="blue">Submit</Button>
                            </Flex>
                        </form>
                   </Flex>

               </Box>
             <Spacer/>
           </Flex>
           <br/> 
           </>
           )
    }

    render(){


        if (this._open) {
            return this.open()
        }

        return this.closed()

    }



  }


export class TopicList extends Component{




    constructor(...args){
        super(...args)

        this.current_topics = [
            {
                title:"Calendar",
                description:"Threads organized into years, months and days.",
            },

            {
                title:"Journal",
                description:"A place for me to collect my thoughts",
            },

            {
                title:"Notes",
                description:"Just some random notes.",
            },
        ]
    }

    request_topic_list(){
        // this guy connects with the django backend API

        return this.current_topics
        }


    render(){

        let elements = []
        
        for (let i = 0;i<this.props.list.length;++i){

            elements.push(
                <Topic
                    title = {this.props.list[i].title}
                    desc  = {this.props.list[i].description}
                />
            )
        }

        return elements


    }
}