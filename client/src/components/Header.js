import React from 'react'
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";


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
                        <Tab to="/login"  label="Login" />
                        <Tab to="/signup" label="Signup" />
                    </Tabs>
                  </Box>
              </Toolbar>
          </AppBar>
    </div>
  )
}