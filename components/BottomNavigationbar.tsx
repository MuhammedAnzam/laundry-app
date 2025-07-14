
import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
   <Box sx={{ width: 500 }}>
      <BottomNavigation
        sx={{ backgroundColor: '#f5fffa', 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0,
         }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

  >
        <BottomNavigationAction label="Home"icon={<HomeIcon />}
         sx={{ color: value === 10 ? 'white' : 'blue' }}  />
        <BottomNavigationAction label="Orders"icon={<ListAltIcon 
         sx={{ color: value === 10 ? 'white' : 'blue' }}/>}/>
        <BottomNavigationAction label="Profile"icon={<PersonIcon 
         sx={{ color: value === 10 ? 'white' : 'blue', }}/>} />
      </BottomNavigation>
    </Box>
  )
}




