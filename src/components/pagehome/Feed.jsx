import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Post from '../Posts/Post';
import PopupAddPosts from '../Posts/PopupAddPosts';
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase.config';

const Feed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = ref(db, "posts");
    return onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        setData(snapshot.val());
      }
    });
  }, []); 

  function sortByDate(a, b) {
    if (b.date > a.date) {
        return 1;
    }
    if (b.date < a.date) {
        return -1;
    }
    return 0;
}

const sorted = data.sort(sortByDate);
console.log(sorted);

  return (
    <Box className="pt-10 flex items-center justify-center flex-wrap gap-5 mx-8 w-full lg2:ml-[8rem] xl:ml-[18rem] lg:mr-[30rem] flex-col xl2:w-[60] xl:w-[50rem] lg2:w-[40rem] lg:w-[45rem] lg:ml-10 md:w-[40rem]">
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
