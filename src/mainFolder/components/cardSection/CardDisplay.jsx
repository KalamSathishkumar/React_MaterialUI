import { Stack } from '@mui/material'
import React from 'react'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'

const CardDisplay = () => {
  return (
   <Stack direction='row' gap={4} m={4} 
     sx={{display:{xs:'block',sm:'flex',md:'flex',lg:'flex'},justifyContent:'space-around'}}
   >
    <FirstCard/>
    <SecondCard/>
    <ThirdCard/> 
   </Stack>
  )
}

export default CardDisplay