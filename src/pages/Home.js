import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import PageHome from "../components/pagehome/HomePage";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MyProfile from "../components/profile/MyProfile/MyProfile";

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
            <Box flex={1}>
              <Sidebar
                mode={mode}
                setMode={setMode}
                openSide={openSide}
                setOpenSide={setOpenSide}
              />
            </Box>
            <Box flex={7}>
              {/* <MyProfile /> */}
              <PageHome />
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
