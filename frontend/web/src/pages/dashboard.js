import React, { Component } from "react";


import { 
  useHistory 
} from "react-router-dom";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton, 
  Text, 
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Tabs,
  TabList,
  Tab,
  Spacer,
} from "@chakra-ui/react";



import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";


import { 
  BsFillCameraVideoFill 
} from "react-icons/bs";


import {
  MinusIcon, 
  CalendarIcon, 
  EmailIcon, 
  SettingsIcon
} from '@chakra-ui/icons'

import SearchForm from "../components/search";
import MSpacer from "../components/MSpacer";

import {
  Topic,
  NewTopic,
  TopicList,
} from "../components/topics";






function DashboardHeader(){
    const mobileNav = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");

    return (
        <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl">Topic-Org</chakra.h1>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Home
              </Button>
              <Button variant="ghost" leftIcon={<CalendarIcon />} size="sm">
                Calendar
              </Button>
              <Button variant="ghost" leftIcon={<EmailIcon />} size="sm">
                E-Mail
              </Button>
              <Button
                variant="ghost"
                leftIcon={<SettingsIcon />}
                size="sm"
              >
                Settings
              </Button>
            </HStack>
            <chakra.a
              p={3}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </Flex>
      </chakra.header>
    )
}






function TheTabs(){
    return (
        <Tabs  defaultIndex={1} borderBottomColor="transparent">
            <TabList>

                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                    Section 1
                </Tab>

                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                    Section 2
                </Tab>

                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                    Section 3
                </Tab>

                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                    Section 4
                </Tab>

                <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
                    Agenda
                </Tab>{" "}

                <Tab py={4} m={0}>
                    +
                </Tab>

            </TabList>
        </Tabs>
    )

}









var logged_in = true; 

export default class Dashboard extends Component{


    constructor(...args){
      super(...args)


      this.sections = {
        all : [
          "Section 1",
          "Section 2",
          "Section 3",
          "Agenda",
        ],

        to_render : [
          "Section 1",
          "Section 2",
          "Section 3",
          "Agenda",
        ]
      }

      


      

    }



    search_tabs = (word) => {
      this.sections.to_render = []

      for (let i = 0; i < this.sections.all.length; ++i){
          if (this.sections.all[i].includes(word)){
            this.sections.to_render.push(
              this.sections.all[i]
            )
          }
      }
      this.forceUpdate()

    }

    search_tabs_form = () => {
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
                      onChange = {event => this.search_tabs(event.currentTarget.value)}
                  />
              </InputGroup>
          </HStack>
      ) 
    }



    tabs = () => {

      let elements = []

      for (let i = 0; i < this.sections.to_render.length; ++i){
        elements.push(
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              {this.sections.to_render[i]}
          </Tab>
        )
      }

      return (
          <Tabs  defaultIndex={1} borderBottomColor="transparent">
              <TabList>
                  {elements}
                  <Tab py={4} m={0}>
                      +
                  </Tab>
              </TabList>
          </Tabs>
      )

  }



  render() {
      

      document.body.style = 'background: AliceBlue;';

      return (
                <Box>
                    <Box shadow="md" bg="white">
                        <DashboardHeader />
                        <Flex bg="white"
                        alignItems="center"
                        justifyContent="space-between"
                        mx={2}
                        borderWidth={0}
                        overflowX="auto"
                        >
                        <this.tabs />
                        <Spacer />
                        <this.search_tabs_form/>
                        </Flex>
                    </Box>

                    <Flex flexDirection="row" maxH="100%" >
                        <Box width="70%" maxH="100%" >
                            <Spacer/> <br/>
                            <NewTopic />
                            <TopicList />
                        </Box>
                        <Flex width="30%"     flexDirection="column">
                            <Spacer/>
                            <Box bg="transparent"  height="20px">
                                <Flex flexDirection="column">
                                    <MSpacer n="50"/>
                                    <Spacer/>
                                </Flex>
                            </Box>
                            <Box bg="white" borderWidth="15px" borderColor="transparent" shadow="md" height="500px">
                                <Flex flexDirection="column">
                                    <MSpacer n="50"/>
                                    <this.search_tabs_form />
                                    <Text fontSize="xx-large">Agenda</Text>
                            
                                    <Spacer/>
                                    <Text>This section groups all time related topics.</Text>
                                </Flex>
                            </Box>
                            <Spacer/>
                        </Flex>
                    </Flex>
                </Box>
      );
    }
}
