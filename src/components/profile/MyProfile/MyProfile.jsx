import React, { useEffect, useState } from "react";
import {
  Container,
  Stack
} from "@mui/material";
import { UserAuth } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";
import InformationProfile from "./InformationProfile";
import FeedProfile from "./FeedProfile";
import { grey } from "@mui/material/colors";
import LeftBarProfile from "./LeftbarProfile";
import { Box } from "@mui/system";
import RightBarProfile from "./RightbarProfile";

const MyProfile = () => {
  const { userIn } = UserAuth();
  const { usersList } = UserAuth();

  useEffect(() => {
    if (!userIn) Navigate("/signin");
  }, [userIn]);

  const userProfile = usersList.find(u => u.email === userIn?.email)

  return (
    <Container fixed>
      <InformationProfile user={userProfile} />
      <Container fixed>
        <Stack
          direction="row"
          paddingTop={3}
          justifyContent="space-between"
          width="100%"
          sx={{ backgroundColor: grey[200] }}
        >
          <Box flex={1}>
            <LeftBarProfile />
          </Box>
          <Box flex={3}>
            <FeedProfile user={userProfile}/>
          </Box>
          <Box flex={1}>
            <RightBarProfile />
          </Box>
        </Stack>
      </Container>
    </Container>
  );
};

export default MyProfile;
