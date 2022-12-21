import { Box, Container, Stack } from "@mui/material";
import Feed from "./Feed";
import RightBar from "./Rightbar";

const PageHome = () => {
  return (
    <Container fixed>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        width="100%"
      >
        <Box flex={5}>
          <Feed />
        </Box>
        <Box flex={1}>
          <RightBar />
        </Box>
      </Stack>
    </Container>
  );
};

export default PageHome;
