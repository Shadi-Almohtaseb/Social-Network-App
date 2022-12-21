import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { ref, remove, update } from "firebase/database";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";

const UseActionsPost = (item) => {
  const [open, setOpen] = useState(false);
  const [likes, setLike] = useState(item.countLike);
  const [notLike, setNotLike] = useState(false);
  const { usersList } = UserAuth();

  const user = usersList?.find((u) => u?.email === item?.email);

  const navigate = useNavigate();

  useEffect(() => {
    update(ref(db, "posts/" + item.id), {
      countLike: likes,
    });
  }, [likes]);
  const handleClick = () => {
    setOpen(!open);
  };

  const HandelDelete = () => {
    remove(ref(db, "posts/" + item.id));
    setOpen(!open);
  };

  const HandelLike = () => {
    if (notLike === false) {
      setLike(likes + 1);
      setNotLike(true);
    } else {
      setLike(likes - 1);
      setNotLike(false);
    }
  };

  return { HandelDelete, handleClick, HandelLike, navigate, user, likes, open };
};
export { UseActionsPost };
