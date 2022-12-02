import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase.config';
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase.config';
import { UserAuth } from '../../context/AuthContext';
import PopupAddPosts from '../Posts/PopupAddPosts';
import Post from '../Posts/Post';

const FeedProfile = () => {
  const [data, setData] = useState([]);
  // const [userPosts, setUserPosts] = useState({})
  // const { usersList } = UserAuth();

  // usersList.map(u => {
  //   setUserPosts(u)
  // })
  // console.log(userPosts);

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
    <Container fixed>
      <Box>
        <PopupAddPosts postData={data} />
        {
          data.map((item) => {
            // if(item.email == )
            // {

            // }
            return <Post item={item} />
          })
        }
      </Box>
    </Container>
  )
}

export default FeedProfile
