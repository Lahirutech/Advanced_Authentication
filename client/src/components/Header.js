import React from 'react'
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
          <AppBar position="sticky">
              <Toolbar>
                  <Typography variant="h3">MernAuth</Typography>
                  <Box sx={{ marginLeft: "auto" }}>
                      <Tabs
                          indicatorColor="secondary"
                          textColor="inherit">                          
                        <Tab to="/login" LinkComponent={Link} label="Login" />
              <Tab to="/signup" LinkComponent={Link} label="Signup" />
              <Tab to="/logout" LinkComponent={Link} label="Logout" />

                    </Tabs>
                  </Box>
              </Toolbar>
          </AppBar>
    </div>
  ) 
}
