import { Box } from "@mui/material";
import Post from "../Posts/Post";
import PopupAddPosts from "../Posts/PopupAddPosts";
import { useFetchPosts } from "../../hooks/UseFetchPosts";

const Feed = () => {
  const { sorted, data } = useFetchPosts();

  return (
    <Box className="pt-10 flex items-center justify-center flex-wrap gap-3 xs:mx-8 w-full lg2:ml-[8rem] xl:ml-[3rem] lg:mr-[30rem] flex-col xl2:w-[60] xl:w-[50rem] lg2:w-[35rem] lg:w-[40rem] lg:ml-10 md1:w-[35rem] md3:w-[45rem] sm:w-[33rem] xs:w-[28rem] xs2:w-[26rem] xs1:w-[21rem] xs1:ml-7">
      <PopupAddPosts postData={data} />
      <Box>
        {sorted.map((item) => {
          return <Post item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default Feed;
