'use client';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import { useState, MouseEvent } from 'react';

import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

export function ProfileMenu() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function stringAvatar(name: string) {
    return { children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` };
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="medium"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar sx={{ width: 32, height: 32, bgcolor: "transparent" }}><PersonIcon fontSize="large" sx={{ color: "gray" }} /></Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={
          {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            }
          }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box width={240}>
          <Box paddingX="16px" display="flex" alignItems="center" marginBottom="10px">
            <Avatar variant='rounded' {...stringAvatar('João Victor Mendes Silva')} sx={{ bgcolor: theme.palette.primary.main }} /> HKL DEVS
          </Box>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Sair
          </MenuItem>
        </Box>

      </Menu>
    </>

    // <>
    //   <IconButton
    //     onClick={handleClick}
    //     size="medium"
    //     sx={{ ml: 2 }}
    //     aria-controls={open ? 'account-menu' : undefined}
    //     aria-haspopup="true"
    //     aria-expanded={open ? 'true' : undefined}
    //   >
    //     <Avatar sx={{ width: 32, height: 32, bgcolor: "transparent" }}><PersonIcon fontSize="large" sx={{ color: "gray" }} /></Avatar>
    //   </IconButton>

    //   <Menu
    //     anchorEl={anchorEl}
    //     id="account-menu"
    //     open={open}
    //     onClose={handleClose}
    //     onClick={handleClose}
    //     sx={
    //       {
    //         overflow: 'visible',
    //         filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    //         mt: 1.5,
    //         '& .MuiAvatar-root': {
    //           width: 32,
    //           height: 32,
    //           ml: -0.5,
    //           mr: 1,
    //         }
    //       }}
    //     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    //     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    //   >
    //     <MenuItem onClick={handleClose}>
    //       <Avatar /> Profile
    //     </MenuItem>
    //     <MenuItem onClick={handleClose}>
    //       <Avatar /> My account
    //     </MenuItem>
    //     <Divider />
    //     <MenuItem onClick={handleClose}>
    //       <ListItemIcon>
    //         <PersonAdd fontSize="small" />
    //       </ListItemIcon>
    //       Add another account
    //     </MenuItem>
    //     <MenuItem onClick={handleClose}>
    //       <ListItemIcon>
    //         <Settings fontSize="small" />
    //       </ListItemIcon>
    //       Settings
    //     </MenuItem>
    //     <MenuItem onClick={handleClose}>
    //       <ListItemIcon>
    //         <Logout fontSize="small" />
    //       </ListItemIcon>
    //       Logout
    //     </MenuItem>
    //   </Menu>
    // </>
  )
}