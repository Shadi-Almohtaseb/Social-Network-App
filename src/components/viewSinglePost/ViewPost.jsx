import * as React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { db } from "../../firebase.config";
import { onValue, ref } from "firebase/database";
import SinglePost from "./SinglePost";
import { UserAuth } from "../../context/AuthContext";

const ViewPost = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const query = ref(db, "posts");
    return onValue(query, (snapshot) => {
      const postData = snapshot.val();

      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    });
  }, []);
  const FilteredPost = data.filter((post) => post.id === Number(id));

  const { usersList } = UserAuth();
  const user = usersList?.find(
    (u) => u?.email == FilteredPost.map((p) => p.email)
  );
  return (
    <Box className="flex items-center justify-center py-20">
      {FilteredPost.map((post, index) => (
        <SinglePost post={post} user={user} key={index} />
      ))}
    </Box>
  );
};

export default ViewPost;
