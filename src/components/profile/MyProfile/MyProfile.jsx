import React from "react";
import { Container, Stack } from "@mui/material";
import { UserAuth } from "../../../context/AuthContext";
import InformationProfile from "./InformationProfile";
import FeedProfile from "./FeedProfile";
import { grey } from "@mui/material/colors";
import LeftBarProfile from "./LeftbarProfile";
import { Box } from "@mui/system";
import RightBarProfile from "./RightbarProfile";

const MyProfile = () => {
  const { usersList } = UserAuth();
  const { userIn } = UserAuth();
  const userProfile = usersList.find((u) => u.email === userIn?.email);

  return (
    <Container className="lg2:ml-[12rem] lg2:w-[85%]">
      <InformationProfile user={userProfile} />
      <Stack
        direction="row"
        paddingTop={3}
        sx={{ backgroundColor: grey[200] }}
        className="ml-[2rem]"
      >
        <Box>
          <LeftBarProfile />
        </Box>
        <Box>
          <RightBarProfile />
          <FeedProfile user={userProfile} />
        </Box>
        <Box></Box>
      </Stack>
    </Container>
  );
};

export default MyProfile;
