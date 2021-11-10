import React from "react";


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

function Dashboard() {
  let history = useHistory()

  if (!logged_in){
    history.push("/")
  }

  
  const bg = useColorModeValue("white", "gray.800");



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
                    <TheTabs />
                    <Spacer />
                    <SearchForm />
                    </Flex>
                </Box>

                <Flex flexDirection="row" maxH="100%" >
                    <Box width="70%" maxH="100%" >
                        <Spacer/> <br/>
                        <NewTopic />
                        <Topic title = "Calendar" desc = "Threads organized into years, months and days." />
                        <Topic title = "Journal"  desc = "A place to ocassionally collect my thoughts."/>
                        <Topic title = "Notes"    desc="Just some random notes." />
                        <Topic title = "Notes"    desc="Just some random notes." />
                        <Topic title = "Notes"    desc="Just some random notes." />
                        <Topic title = "Notes"    desc="Just some random notes." />
                        <Topic title = "Notes"    desc="Just some random notes." />
                    </Box>
                    <Flex width="30%"     flexDirection="column">
                        <Spacer/>
                        <Box bg="white" shadow="inner" height="100%">
                            <Flex flexDirection="column">
                                <MSpacer n="50"/>
                                ads
                                <Spacer/>
                            </Flex>
                        </Box>
                        <Spacer/>
                    </Flex>
                </Flex>
            </Box>
  );
}


export default Dashboard