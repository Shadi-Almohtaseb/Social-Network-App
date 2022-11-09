import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";

const Home = () => {
  const [openSide, setOpenSide] = useState(true);
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar openSide={openSide} setOpenSide={setOpenSide} />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            width="100%"
          >
            <Sidebar
              mode={mode}
              setMode={setMode}
              openSide={openSide}
              setOpenSide={setOpenSide}
            />
            <Feed />
            <Rightbar />
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
