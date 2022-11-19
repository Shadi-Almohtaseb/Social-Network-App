import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Post from './Posts/Post';
import PopupAddPosts from "./Posts/PopupAddPosts";
import { auth } from '../firebase.config'; 
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase.config';

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = ref(db, "posts");
    return onValue(query, (snapshot) => {
      const postData = snapshot.val();

      if (snapshot.exists()) {
        console.log(snapshot.val());
        setData(snapshot.val());
        // Object.values(postData).map((item) => {
        //   setData((data) => [...data, item]);
        // });
      }
    });
  }, []);

  return (
    <Box flex={4} sx={{backgroundColor: "#f1f1f1"}} p={2}>
      <PopupAddPosts postData={data}/>
      {
        data.map((item)=>
        {
          return <Post item={item}/>
        })
      }
      {/* <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/> */}
    </Box>
  )
}

export default Feed
