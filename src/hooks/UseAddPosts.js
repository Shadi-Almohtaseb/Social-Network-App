import { db } from "../firebase.config";
import { storage } from "../firebase.config";
import { ref, set } from "firebase/database";
import { uploadBytes, ref as sRef } from "firebase/storage";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UseAddPosts = (props) => {
  const [content, setContent] = useState();
  const { userIn } = UserAuth();
  const [imageAsFile, setImageAsFile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userIn) navigate("/signin");
  }, [userIn]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImageAsFile(() => image);
    }
  };

  const addPosts = () => {
    const mountainImagesRef = sRef(storage, `posts/${imageAsFile.name + v4()}`);
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    // const ID = `${current.getDate()}${current.getMonth()+1}${current.getFullYear()}${current.getHours()}${current.getMinutes()}${current.getSeconds()}`;
    const url =
      "https://firebasestorage.googleapis.com/v0/b/" +
      mountainImagesRef.bucket +
      "/o/posts%2F" +
      mountainImagesRef.name +
      "?alt=media&token=03058de8-fdd8-412d-9ecd-1a7ee0f2cfcd";

    uploadBytes(mountainImagesRef, imageAsFile).then(() => {
      console.log("image upload");
    });

    set(ref(db, "posts/" + props.postData.length), {
      id: props.postData.length,
      email: userIn?.email,
      date: date,
      content: content,
      image: url,
      countLike: 0,
      countComment: 0,
    });
  };
  return { addPosts, content, setContent, handleChange };
};

export { UseAddPosts };
