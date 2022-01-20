

import React, {Component, useState} from 'react';
import {BiCollapse} from 'react-icons/bi'
import { redirectOnNoSession } from '../../utils/check';
import { Flex, HStack, VStack, Text, Container, Box, Spacer, Heading
 } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';

// Styles 
import {
    header_hstack, 
    header_flex,
    header_heading_text_selected,
    header_heading_text,
    header_heading_dot,
} from './style'


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

const Headers = () => {
    let [x, setX] = useState(0)
    let [dragging, setDragging] = useState(false)
    let [divcss, setDivcss] = useState({tranform: "translateX(0)"})

    function handleMouseMove(event){
        if (!dragging) return

        let displacement = event.clientX - x
        setX(event.clientX)
        setDivcss({tranform: "translateX(10000px)"})
    }

    return <Flex {...header_flex} 
                css = {divcss}
                onMouseMove={handleMouseMove}
                onMouseDown={() => setDragging(true)}
                onMouseUp = {() => setDragging(false)}
            >
            <HStack user-select="none" {...header_hstack} overflow="hidden">  
            <Heading  user-select="none" {...header_heading_text_selected}>
            Calendar
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Journal
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            </HStack>
    </Flex>



    return <div>
        <Flex {...header_flex}
            onMouseMove={handleMouseMove}
            onMouseDown={() => setDragging(true)}
            onMouseUp = {() => setDragging(false)}
        >
            <HStack user-select="none" {...header_hstack}>  
            <Heading  user-select="none" {...header_heading_text_selected}>
            Calendar
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Journal
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            <Heading {...header_heading_dot}>
            •
            </Heading>
            <Heading {...header_heading_text}>
            Documents
            </Heading>
            </HStack>
    </Flex>
</div>

}


/*
const Headers = () => <Flex {...header_flex}>
    <HStack {...header_hstack}>  
        <Heading {...header_heading_text_selected}>
            Calendar
        </Heading>
        <Heading {...header_heading_dot}>
            •
        </Heading>
        <Heading {...header_heading_text}>
            Journal
        </Heading>
        <Heading {...header_heading_dot}>
            •
        </Heading>
        <Heading {...header_heading_text}>
            Documents
        </Heading>
        <Heading {...header_heading_dot}>
            •
        </Heading>
        <Heading {...header_heading_text}>
            Documents
        </Heading>
        <Heading {...header_heading_dot}>
            •
        </Heading>
        <Heading {...header_heading_text}>
            Documents
        </Heading>
        <Heading {...header_heading_dot}>
            •
        </Heading>
        <Heading {...header_heading_text}>
            Documents
        </Heading>
        <Heading {...header_heading_dot}>
            •
        </Heading>
        <Heading {...header_heading_text}>
            Documents
        </Heading>
        <Heading {...header_heading_dot}>
            •
        </Heading>
        <Heading {...header_heading_text}>
            Documents
        </Heading>
        <Heading {...header_heading_dot}>
            •
        </Heading>
        <Heading {...header_heading_text}>
            Documents
        </Heading>
    </HStack>
</Flex>


*/




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

const Thread = (props) => {
    const [width, setWidth] = useState(".3%")
    const [color, setColor] = useState("black")
    const [collapsed, setCollapsed] = useState(false)

    function enter(){
        setColor("blue.400")
        setWidth(".6%")

    }

    function leave(){
        setColor("black")
        setWidth(".3%")
    }

    if (collapsed){
        return <HStack w="99%" 
            onMouseEnter={enter}
            onMouseLeave={leave}
        >
            <Flex w={width} h="100%" bg={color}
                onClick={()=>setCollapsed(!collapsed)}
            >
                <></>
            </Flex>
            <VStack 
            onDoubleClick={()=>setCollapsed(!collapsed)}
            w="99%" h="100%" px={.1} spacing={.99}>
                <Text color="white">.</Text>

            </VStack>
        </HStack>
    
    }




    return <HStack w="99%" 
    onMouseEnter={enter}
        onMouseLeave={leave}
    >
        <Flex w={width} h="100%" bg={color}
            onClick={()=>setCollapsed(!collapsed)}
        >
            <></>
        </Flex>
        <VStack w="99%" h="100%" px={.1} spacing={.99} 

        >
            <Flex bg="white" w="full" p={.1}>
                <Text textAlign="left" onDoubleClick={()=>setCollapsed(!collapsed)}>
                    {props.content}
                </Text>   
            </Flex>
            <Flex bg="white" w="full">
                <HStack w="full" h="full">
                    <Text color="gray.500" _hover={{color:"black", as:"u"}}>New</Text>
                    <Text color="gray.300">•</Text>
                    <Text color="gray.500" _hover={{color:"black", as:"u"}}>Edit</Text>
                    <Text color="gray.300">•</Text>
                    <Text color="gray.500" _hover={{color:"red", as:"u"}}>Delete</Text>
                </HStack>
            </Flex>
            <Spacer/><Spacer/><Spacer/>
            <VStack bg="white" w="full" p={.1} alignContent="flex-start">
                {props.children}   
            </VStack>
        </VStack>
    </HStack>
}

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
