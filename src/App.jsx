import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, styled, ThemeProvider } from '@mui/material';
import LandingPage from './mainFolder/pages/LandingPage';

const MyOwnButton=styled(Button)({
  background:'lime'
})

const App = () => {
  const[mode,setMode]=useState("light")

  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })

  return (
      
    <ThemeProvider theme={darkTheme}>
     <Box bgcolor={"background.default"}>
      <LandingPage mode={mode} setMode={setMode}/>
     </Box>
    </ThemeProvider>
  )
}

export default App