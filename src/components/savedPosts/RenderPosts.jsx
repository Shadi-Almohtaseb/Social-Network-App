import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useFetchPosts } from "../../hooks/UseFetchPosts";
import SavedPost from "./SavedPost";

const RenderPosts = () => {
  const { data } = useFetchPosts();
  const { usersList } = UserAuth();
  const user = usersList?.find((u) => u?.email == data.map((p) => p.email));
  const [newSaved, setNewSaved] = useState(
    JSON.parse(localStorage.getItem("saved") || "[]")
  );
  useEffect(() => {
    const saved = localStorage.getItem("savedPosts");
    if (saved) {
      const postsID = JSON.parse(saved);
      const filteredPosts = postsID.map((item) => {
        const x = data.filter((post) => post.id === item);
        return x[0];
      });
      console.log("filteredPosts", filteredPosts);
      localStorage.setItem("saved", JSON.stringify(filteredPosts));
      console.log(
        "savedPosts",
        JSON.parse(localStorage.getItem("saved") || "[]")
      );
      console.log("newSaved", newSaved);
      setNewSaved(JSON.parse(localStorage.getItem("saved") || "[]"));
    }
  }, [data]);

  return (
    <Box className="flex flex-col items-center justify-center py-10">
      {data.map((item, index) => (
        <SavedPost item={item} user={user} key={index} />
      ))}
    </Box>
  );
};

export default RenderPosts;
