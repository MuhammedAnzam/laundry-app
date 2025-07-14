
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
        sx={{ backgroundColor: 'blue', position: 'fixed', bottom: 0, left: 0, right: 0 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home"icon={<HomeIcon />} />
        <BottomNavigationAction label="Orders"icon={<ListAltIcon />}/>
        <BottomNavigationAction label="Profile"icon={<PersonIcon />}/>
      </BottomNavigation>
    </Box>
  )
}




