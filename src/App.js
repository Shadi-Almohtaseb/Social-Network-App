import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import SignIn from "./components/SignIn";

const App = () => {
  const [openSide, setOpenSide] = useState(true);

  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar openSide={openSide} setOpenSide={setOpenSide} />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar
              mode={mode}
              setMode={setMode}
              openSide={openSide}
              setOpenSide={setOpenSide}
            />
            <Feed />
            <Rightbar />
            <SignIn />
          </Stack>
        </Box>
      </ThemeProvider>
    </Router>
  );
};
export default App;
