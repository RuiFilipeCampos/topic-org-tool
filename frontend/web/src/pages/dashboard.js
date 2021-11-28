import React, { Component } from "react";

import {db} from "../settings"

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
import { current_section } from "../components/state";






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


class SectionTab extends Component{
  constructor(props){
    super(props)
  }

  handleClick = () => {
    this.props.upper.change_section(
      this.props.id
    )
  }

  render = () => {return(
    <Tab 
      py={4} 
      m={0} 
      _focus = {{ boxShadow: "none" }} 
      onClick = {() => this.handleClick()} 
    >
    {this.props.name}
  </Tab>
  )}
}



/**
 * @brief THe sections menu.
 */
class Sections extends Component{
  constructor(props){
    super(props)



    this.jsx = [];
    for (let i = 0; i < this.props.sections.length; ++i){
        this.jsx.push(
          <SectionTab 
            id = {i} 
            name={this.props.sections[i]} 
            upper = {this.props.upper}
          />
        )
    }
  }

  re_render = (word) => {
    this.jsx = [];

    for (let i = 0; i < this.sections.length; ++i)
    {
        if (!(this.sections[i].includes(word)))
          continue;

          this.jsx.push(
            <SectionTab 
              id = {i} 
              name={this.sections[i]} 
              upper = {this.props.upper}
            />
          )
    }

    this.forceUpdate()
  }

  tabs = () => {
    return (
      <Tabs 
        defaultIndex = {0} 
        borderBottomColor = "transparent"
      >
          <TabList>
              {this.jsx}
              <Tab py={4} m={0}>
                  +
              </Tab>
          </TabList>
      </Tabs>
    )
  }

  render = () => { return ( <>
      <this.tabs/>
      <Spacer />
      <HStack spacing={3} alignItems="center">
              <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
                  <InputLeftElement
                      pointerEvents = "none"
                      children      = {<AiOutlineSearch />}
                  />
                  <Input 
                      type        = "tel" 
                      placeholder = "Search..." 
                      onChange = {event => this.re_render(event.currentTarget.value)}
                  />
              </InputGroup>
        </HStack>
  </>)}

}



class SectionSideBar extends Component{
  constructor(props){
    super(props)
  }

  re_render = (word) => {
    this.props.upper.filter_topics(word)
  }

  render(){
    let section_data = this.props.data
    
    return(<>
      <Box bg="transparent"  height="20px">
          <Flex flexDirection="column">
              <MSpacer n="50"/>
              <Spacer/>
          </Flex>
      </Box>
      <Box bg="white" borderWidth="15px" borderColor="transparent" shadow="md" height="500px">
          <Flex flexDirection="column">
              <MSpacer n="50"/>
              <HStack spacing={3} alignItems="center">
                <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
                  <InputLeftElement
                      pointerEvents = "none"
                      children      = {<AiOutlineSearch />}
                  />
                  <Input 
                      type        = "tel" 
                      placeholder = "Search..." 
                      onChange = {event => this.re_render(event.currentTarget.value)}
                  />
                </InputGroup>
              </HStack>
              <Text fontSize="xx-large">{section_data.title}</Text>
              <Spacer/>
              <Text>{section_data.description}</Text>
          </Flex>
      </Box>
      <Spacer/>
    </>)

  }
}



class Section extends Component{
  constructor(...args){
    super(...args)

    this.state = db.get_section(this.props.id)
    
  }


  filter_topics = (word) => {
    if (word == ""){
      this.setState(db.get_section(this.props.id))
      return;
    }


    let new_topics = []
    this.state.topics.forEach(element => {
      if (element.title.includes(word)){
        new_topics.push(element)
      }
    });


    this.setState({
      topics: new_topics,
    })

    this.forceUpdate()
  }

  

  render() {
    return(<>
      <Box width="70%" maxH="100%" >
        <Spacer/> <br/>
        <NewTopic id = {this.props.id}/>
        <TopicList list = {this.state.topics}/>
      </Box>
      <Flex width="30%"     flexDirection="column">
        <SectionSideBar 
          data  = {this.state} 
          upper = {this.props.upper}
        />
      </Flex>
    </>)
  }
}



























 




var logged_in = true; 
export default class Dashboard extends Component{
    constructor(props){
      super(props)

      this.state = {
        section_list:db.get_section_list(),
        current_section:db.get_section(0),
      }
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
                  <this.tabs/>
                  <Spacer />
                  <this.search_section_list_form />
                </Flex>
            </Box>
            <Flex flexDirection="row" maxH="100%" >
              <this.section />
            </Flex>
        </Box>
      );
    }




    /**
     * @SUB_COMPONENT
     * 
     */

    search_section_list_form = () => {
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
              onChange = {event => this.filter_section_list(event)}
          />
        </InputGroup>
      </HStack>
      )
    }

    filter_section_list = (event)=>{
      this.setState({
        section_list:db.get_section_list(
          event.currentTarget.value
        ),
      })
    }



    /**
     * @SUB_COMPONENT
     * 
     */
    tabs = () => {
      let JSX = []
      this.state.section_list.forEach(section_title => {
        JSX.push(
          <Tab py={4}  m={0}  _focus = {{ boxShadow: "none" }} 
          onClick = {() => this.clicked_section(section_title)} 
          >
            {section_title}
          </Tab>
        )
      });

      return(
        <Tabs 
          defaultIndex = {0} 
          borderBottomColor = "transparent"
        >
            <TabList>
                {JSX}
                <Tab py={4} m={0}>
                    +
                </Tab>
            </TabList>
        </Tabs>
      )
    }
  
    clicked_section = (section_title) => {
      this.setState({
        current_section:db.get_section_by_name(section_title)
      })

    }


  /**
   * @SUB_COMPONENT
   * 
   */
  section = () => {
    return(
      <>
        <Box width="70%" maxH="100%" >
          <Spacer/> <br/>
          <NewTopic id = {0}/>
          <this.topic_list />
        </Box>
        <Flex width="30%"     flexDirection="column">
          <this.sidebar/>
        </Flex>
      </>
    )
  }


  sidebar = () => {
    
    return(
    <>
      <Box bg="transparent"  height="20px">
          <Flex flexDirection="column">
              <MSpacer n="50"/>
              <Spacer/>
          </Flex>
      </Box>
      <Box bg="white" borderWidth="15px" borderColor="transparent" shadow="md" height="500px">
          <Flex flexDirection="column">
              <MSpacer n="50"/>
              <this.topic_search_form />
              <Text fontSize="xx-large">{this.state.current_section.title}</Text>
              <Spacer/>
              <Text>{this.state.current_section.description}</Text>
          </Flex>
      </Box>
      <Spacer/>
    </>
    )
  }

  topic_search_form = () => {
    return(
      <HStack spacing={3} alignItems="center">
      <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
        <InputLeftElement
            pointerEvents = "none"
            children      = {<AiOutlineSearch />}
        />
        <Input 
            type        = "tel" 
            placeholder = "Search..." 
            onChange = {event => this.filter_topics(event.currentTarget.value)}
        />
      </InputGroup>
    </HStack>
    )

  }

  filter_topics = (word) => {
    this.setState({
      current_section:{
        id:this.state.current_section.id,
        title:this.state.current_section.title,
        topics:db.get_filtered_topics(word, this.state.current_section.id)
      }
    })
  }












  topic_list = () => {
    let elements = []
    let n_topics = this.state.current_section.topics.length
    let topic_list = this.state.current_section.topics
    for (let i = 0; i < n_topics; ++i){
        elements.push(
            <this.topic
                title = {topic_list[i].title}
                desc  = {topic_list[i].description}
            />
        )
    }

    return elements
  }
  
 

  topic = ({title, desc}) => {
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

}

