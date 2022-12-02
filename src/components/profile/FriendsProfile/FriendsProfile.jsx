import React, { useEffect } from "react";
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

const FriendsProfile = () => {
  const { userIn } = UserAuth();

  useEffect(() => {
    if (!userIn) Navigate("/signin");
  }, [userIn]);

  return (
    <Container fixed>
      <InformationProfile userIn={userIn} />
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
          <FeedProfile />
          </Box>
          <Box flex={1}>
          <RightBarProfile />
          </Box>
        </Stack>
      </Container>
    </Container>
  );
};

export default FriendsProfile;
