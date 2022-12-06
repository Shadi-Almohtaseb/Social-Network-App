import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { auth } from '../../../firebase.config';
import { onValue, ref } from 'firebase/database';
import { db } from '../../../firebase.config';
import PopupAddPosts from '../../Posts/PopupAddPosts';
import Post from '../../Posts/Post';

const FeedProfile = ({user}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = ref(db, "posts");
    return onValue(query, (snapshot) => {
      const postData = snapshot.val();

      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    });
  }, []);

  const filteredPosts = data.filter((post) => post.email === user?.email);

  return (
    <Container fixed>
      <Box>
        <PopupAddPosts postData={data} />
        {
          filteredPosts.map((item) => { 
            return <Post item={item}/>
          })
        }
      </Box>
    </Container>
  )
}

export default FeedProfile
