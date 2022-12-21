import { Box } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useFetchPosts } from "../../hooks/UseFetchPosts";
import SavedPost from "./SavedPost";

const RenderPosts = () => {
  const { data } = useFetchPosts();
  const { usersList } = UserAuth();
  const [savePost, setSavePost] = useState([])
  const user = usersList?.find((u) => u?.email == data.map((p) => p.email));

  useEffect(() =>{
    const saved = localStorage.getItem("savedPosts");
    if (saved) {
      const postsID = JSON.parse(saved)
      console.log('postsID',postsID)
      const filteredPosts =postsID.map((item)=>
      {
        const x = data.filter((post)=> post.id === item)
        console.log('x',x)
        return x[0]
      });
      setSavePost(filteredPosts)
      console.log('data',data)
      console.log('filteredPosts',filteredPosts)
    }
  },
    [])

  return (
    <Box className="flex flex-col items-center justify-center py-10">
      {savePost.map((item, index) => (
        <SavedPost item={item} user={user} key={index} />
      ))}
    </Box>
  );
};

export default RenderPosts;
