import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/navSection/NavBar'
import HeroSection from '../components/hero/HeroSection'
import AccordianSection from '../components/navSection/AccordianSection'
import CardDisplay from '../components/cardSection/CardDisplay'
import MainTab from '../components/tabSection/MainTab'
import MainGraph from '../components/graphSection/MainGraph'

const LandingPage = ({mode,setMode}) => {
  return (
    <Container>
        
       <Box>
        <NavBar mode={mode} setMode={setMode}/>
        <HeroSection/>
        <AccordianSection/>
        <CardDisplay/>
        <MainTab/>
        <MainGraph/>
       </Box>
    </Container>

  )
}

export default LandingPage