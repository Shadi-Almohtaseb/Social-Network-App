import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Posts/Post";
import PopupAddPosts from "./Posts/PopupAddPosts";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase.config";

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = ref(db, "posts");
    return onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setData(snapshot.val());
      }
    });
  }, []);

  return (
    <Box flex={4} p={2}>
      <PopupAddPosts postData={data} />
      {data.map((item) => {
        return <Post item={item} />;
      })}
    </Box>
  );
};

export default Feed;
