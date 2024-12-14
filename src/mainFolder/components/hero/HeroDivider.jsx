import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

export default function HeroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 660,height:300,
      borderRadius:6, p:2,
      height:{xs:300,md:300}
     }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'800'}}>
            Learn AI Devlopment
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <ShareOutlinedIcon sx={{fontSize:'35px',fontWeight:"700"}}/>
          </Typography>
        </Stack>
        <Typography variant="h4"  sx={{fontWeight:'800',background:' linear-gradient(to right, #121FCF 0%, #CF1512 100%)'
            ,webkitBackgroundClip:'text',
            backgroundClip:'text',
            color:'transparent',
            fontSize:{xs:'2rem',ms:'2.2rem',sm:'3rem',lg:'3rem'}
        }}>
        Post graduate program in data Science
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Download Syllabus" size="large" sx={{borderRadius:"8px"}} />
          <Chip color='warning' label="Apply Now" size="large"  sx={{borderRadius:"8px"}}/>
          {/* <Chip label="Hard" size="small" /> */}
        </Stack>
      </Box>
    </Card>
  );
}
