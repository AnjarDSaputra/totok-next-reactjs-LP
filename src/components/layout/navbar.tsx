import * as React from 'react';
import {IconButton, Typography, Toolbar, AppBar,Button, Box } from "@material-ui/core";
import { Menu } from '@material-ui/icons';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu></Menu>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          </Toolbar>
        </AppBar>        
     </Box>
     );
    }
