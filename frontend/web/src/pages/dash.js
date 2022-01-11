

import React, {useState} from 'react';

import { redirectOnNoSession } from '../utils/check';
import { Flex, HStack, VStack, Text
 } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';


export default function Dashboard(){
    redirectOnNoSession()
    
    return <Flex direction="row" bg="white">
        <VStack width="full">
            <Flex width="full" bg="white" shadow="md" _hover={{shadow:"lg"}}>
                <HStack px="3" py="1.8">  
                    <Text color="gray.500" _hover={{color:"black"}}>  New </Text>
                    <Text color = "gray.300"> •</Text>
                    <Text color="gray.500" _hover={{color:"black"}}>  Rename </Text>
                    <Text color = "gray.300"> •</Text>
                    <Text color="gray.500" _hover={{color:"red"}} color="red.500">Delete</Text>
                </HStack>
            </Flex>
            <HStack py="2">  
                <Text fontSize="20"> Welcome back   </Text>
                <Text> Welcome back. a || </Text>
                <Text> Welcome back. a </Text>
            </HStack>
        </VStack>
    </Flex>
}
