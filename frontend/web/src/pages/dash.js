

import React, {useState} from 'react';

import { redirectOnNoSession } from '../utils/check';
import { Flex, HStack, VStack, Text, Container, Box, Spacer, Heading
 } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';


const Topic = () => <Flex w="full" bg="white" >
    <VStack bg="white" w="full" spacing="0.1" >
        <HStack w="full">
            <Text bg="white" ><b>Title of the topic... </b></Text>
            <Spacer/>
        </HStack>
        <HStack w="full">
            <Text bg="white" >A longer description of the topic describing what the topic is about.</Text>
            <Spacer/>
        </HStack>
        <HStack w="full">
            <Text color="gray.500" _hover={{color:"black", as:"u"}}>Edit</Text>
            <Text color="gray.300"> •</Text>
            <Text color="gray.500" _hover={{color:"red", as:"u"}}>Delete</Text>
            <Spacer/>
        </HStack>
    </VStack>
</Flex>

const CSS = {
    '&::-webkit-scrollbar': {
    width: '100px',
    },
    '&::-webkit-scrollbar-track': {
    width: '100px',
    },
    '&::-webkit-scrollbar-thumb': {
    borderRadius: '100px',
    },
}


const Headers = () => <Flex  w="full" bg="white">
    <HStack 
      py={2} px={100}
      bg="white" 
      w="full" 
      overflowX="scroll" css={CSS}
    >  
        <Heading> Calendar</Heading>
        <Heading color="gray.300"> •</Heading>
        <Heading color="gray.300" _hover={{color:"gray.400"}}> Journal</Heading>
        <Heading color="gray.300" > •</Heading>
        <Heading color="gray.300" _hover={{color:"gray.400"}}> Documents</Heading>
        <Heading color="gray.300"> •</Heading>
        <Heading color="gray.300" _hover={{color:"gray.400"}}> Documents</Heading>
        <Heading color="gray.300"> •</Heading>
        <Heading color="gray.300" _hover={{color:"gray.400"}}> Documents</Heading>
        <Heading color="gray.300"> •</Heading>
        <Heading color="gray.300" _hover={{color:"gray.400"}}> Documents</Heading>
        <Heading color="gray.300"> •</Heading>
        <Heading color="gray.300" _hover={{color:"gray.400"}}> Documents</Heading>
        <Heading color="gray.300"> •</Heading>
        <Heading color="gray.300" _hover={{color:"gray.400"}}> Documents</Heading>
        <Heading color="gray.300"> •</Heading>
        <Heading color="gray.300" _hover={{color:"gray.400"}}> Documents</Heading>
    </HStack>
</Flex>

const ControlBar = () => <Flex  w="full" bg="white" shadow="md" >
    <HStack w="full" px="4">
        <HStack px="3" py="1.8">  
            <Text color="gray.500" _hover={{color:"black"}}>  New </Text>
            <Text color="gray.300"> •</Text>
            <Text color="gray.500" _hover={{color:"black"}}>  Rename </Text>
            <Text color="gray.300"> •</Text>
            <Text color="gray.500" _hover={{color:"red"}}>Delete</Text>
        </HStack>
        <Spacer/>
        <Text color="gray.500" _hover={{color:"black"}}>Logout</Text>
    </HStack>
</Flex>

const CSS1 = {
    '&::-webkit-scrollbar': {
    width: '0px',
    },
    '&::-webkit-scrollbar-track': {
    width: '0px',
    },
    '&::-webkit-scrollbar-thumb': {
    borderRadius: '0px',
    },
}

const TopicStack = () => <VStack 
    h="full" w="13" 
    bg="white" 
    px={100} 
    spacing="3" 
    overflow="scroll"
    css={CSS1}
>
    <VStack w="full" bg="white" spacing="3" overflow="scroll" css={CSS1}>
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic /> 
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
    </VStack>
</VStack>

const Thread = (props) => <HStack w="99%">
    <Flex w=".3%" h="100%" bg="black">
        <></>
    </Flex>
    <VStack w="99%" h="100%" px={.1} spacing={.99} >
        <Flex bg="white" w="full">
            <HStack w="full" h="full">
                <Text textAlign="left">[ -]</Text>
                <Text>Edit</Text>
                <Text>•</Text>
                <Text>Delete</Text>
            </HStack>
        </Flex>
        <Spacer/> <Spacer/><Spacer/>
        <Flex bg="white" w="full" p={.1}>
            <Text textAlign="left">
                {props.content}
            </Text>   
        </Flex><Spacer/> <Spacer/><Spacer/>
        <VStack bg="white" w="full" p={.1} alignContent="flex-start">
            {props.children}   
        </VStack>
    </VStack>
</HStack>


const TopicView = () => <VStack 
    w="full" 
    bg="white" 
    h="full"
    overflow="scroll"
    css={CSS1}
>
    <Flex  w="100%" p={2} >
        <VStack p={5} h="full" w="100%" alignItems="left">
            <Heading>Title of the topic...</Heading>
            <Text>asdsd asd</Text>     
        </VStack>  
    </Flex>
    <Spacer />
    <Thread content="The top level markdown text, this may be a large text and stuff.">
        <Thread content="asdasdads"/>
    </Thread>
    <Thread content="asdasdads" />
    <Thread content="The top level markdown text, this may be a large text and stuff.">
        <Thread content="The top level markdown text, this may be a large text and stuff.">
            <Thread content="asdasdads"/>
        </Thread>
    </Thread>
    <Thread content="asdasdads"/>
    <Thread content="asdasdads"/>
    <Thread content="asdasdads"/>
    <Thread content="The top level markdown text, this may be a large text and stuff.">
        <Thread content="The top level markdown text, this may be a large text and stuff.">
            <Thread content="asdasdads"/>
        </Thread>
        <Thread content="The top level markdown text, this may be a large text and stuff.">
            <Thread content="asdasdads"/>
            <Thread content="asdasdads"/>
            <Thread content="asdasdads"/>
        </Thread>
    </Thread>
    <Thread content="asdasdads"/>
    <Thread content="asdasdads"/>
</VStack>

export default function Dashboard(){
    redirectOnNoSession()
    return <Flex direction="row" bg="white" h="100vh" w="100vw">
        <VStack w="full">
            <ControlBar/>
            <Headers/>
            <HStack w="full" h="full" overflow="scroll">
                <TopicStack/>
                <TopicView/>
            </HStack>
        </VStack>
    </Flex>
}
