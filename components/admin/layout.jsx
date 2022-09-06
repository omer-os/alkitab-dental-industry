import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={themeOptions}>
      <div className="min-h-screen text-white bg-black">
        <AppBar position="sticky" color="default">
          <Toolbar
            sx={{
              width: {
                sm: 200,
              },
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            display: {
              sm: "block",
              xs: "none",
            },
          }}
          anchor="left"
          open={true}
        >
          <List
            sx={{
              width: {
                sm: 200,
              },
            }}
          >
            <ListItemButton>
              <Typography variant="div">Home Page</Typography>
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          sx={{
            position: "relative",
            left: {
              sm: 200,
              xs: 0,
            },
          }}
        >
          {children}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontSize: "1.6em",
      fontWeight: 600,
    },
  },
});
