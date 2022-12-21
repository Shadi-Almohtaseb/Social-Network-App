import React from "react";
import { Container, Stack } from "@mui/material";
import { UserAuth } from "../../../context/AuthContext";
import InformationProfile from "./InformationProfile";
import FeedProfile from "./FeedProfile";
import { grey } from "@mui/material/colors";
import LeftBarProfile from "./LeftbarProfile";
import { Box } from "@mui/system";
import RightBarProfile from "./RightbarProfile";
import { useParams } from "react-router-dom";

const FriendsProfile = () => {
  const { email } = useParams();
  const { usersList } = UserAuth();
  const userProfile = usersList?.find((u) => u.email === email);

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
      </Stack>
    </Container>
  );
};

export default FriendsProfile;
