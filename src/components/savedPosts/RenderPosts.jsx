import { Box } from "@mui/material";
import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { useFetchPosts } from "../../hooks/UseFetchPosts";
import SavedPost from "./SavedPost";

const RenderPosts = () => {
  const { data } = useFetchPosts();
  const { usersList } = UserAuth();
  const user = usersList?.find((u) => u?.email == data.map((p) => p.email));
  const saved = localStorage.getItem("savedPosts");
  const filteredPosts = data.filter((post) => post.id === Number(saved));
  return (
    <Box className="flex flex-col items-center justify-center py-10">
      {filteredPosts.map((item, index) => (
        <SavedPost item={item} user={user} key={index} />
      ))}
    </Box>
  );
};

export default RenderPosts;
