import { Box } from "@mui/material";
import React from "react";
import { useFetchPosts } from "../../../hooks/UseFetchPosts";
import PopupAddPosts from "../../Posts/PopupAddPosts";
import Post from "../../Posts/Post";

const FeedProfile = ({ user }) => {
  const { data, sortByDate } = useFetchPosts();
  const filteredPosts = data.filter((post) => post.email === user?.email);
  const sorted = filteredPosts.sort(sortByDate);

  return (
    <Box className="pt-10 flex items-center justify-center flex-wrap gap-5 mx-8 w-full lg2:ml-[0rem] xl:ml-[1rem] flex-col xl2:w-[60] xl:w-[50rem] lg2:w-[10rem] lg:w-[45rem] lg:ml-10 md:w-[40rem]">
      <PopupAddPosts postData={data} />
      <Box>
        {sorted.map((item) => {
          return <Post item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default FeedProfile;
