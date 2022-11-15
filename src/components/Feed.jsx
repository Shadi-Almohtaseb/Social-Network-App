import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Post from './Posts/Post';
import PopupAddPosts from "./Posts/PopupAddPosts";
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase.config';

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = ref(db, "posts");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setData((data) => [...data, item]);
        });
      }
    });
  }, []);

  return (
    <Box flex={4} sx={{backgroundColor: "#f1f1f1"}} p={2}>
      <PopupAddPosts postData={data}/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feed
