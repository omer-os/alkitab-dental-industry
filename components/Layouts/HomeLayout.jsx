import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import BottomNav from "./BottomNav";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function HomeLayout({ children }) {
  return (
    <ThemeProvider theme={themeOptions}>
      <Box className="text-white bg-black min-h-screen w-screen">
        <Box
          sx={{
            maxWidth: {
              sm: "40em",
            },
            margin: "auto",
          }}
        >
          <div className="overflow-y-scroll">{children}</div>

          <div className="h-20" />

          <BottomNav />
        </Box>
      </Box>
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
