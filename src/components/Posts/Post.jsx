import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserAuth } from "../../context/AuthContext";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ref, remove, set, update } from "firebase/database";
import { db } from "../../firebase.config";
import { useNavigate } from "react-router-dom";

const Post = ({ item }) => {
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

  return (
    <div>
      <Card
        sx={{ marginBottom: { xs: 5 } }}
        className="flex-col rounded-[10px] shadow-xl py-5 px-5 xl2:w-[60] xl:w-[50rem] lg2:w-[40rem] lg:w-[45rem] w-full md:w-[45rem] border-solid border-gray-300 border-[1px] "
      >
        <CardHeader
          avatar={<Avatar src={user?.avatar} aria-label="recipe"></Avatar>}
          action={
            <IconButton aria-label="settings">
              <List component="nav" aria-labelledby="nested-list-subheader">
                <ListItemButton className="w-[1rem]" onClick={handleClick}>
                  {open ? <PendingIcon /> : <PendingIcon />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton onClick={HandelDelete}>
                      <ListItemIcon>
                        <DeleteIcon />
                      </ListItemIcon>
                      <ListItemText primary="delete" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </IconButton>
          }
          title={
            <span
              onClick={() => navigate(`profile/${user.email}`)}
              className="cursor-pointer hover:underline font-bold"
            >
              {" "}
              {user?.name}
            </span>
          }
          subheader={item.date}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.content}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="500"
          image={item.image}
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <Box className="border-solid border-2 border-indigo-300 rounded-full px-3 mr-3">
            <IconButton aria-label="VideocamOutlinedIcon" onClick={HandelLike}>
              <FormControlLabel
                label="Like"
                control={
                  <Checkbox
                    icon={<FavoriteBorderIcon />}
                    checkedIcon={<FavoriteIcon sx={{ color: "#188cff" }} />}
                  />
                }
              />
            </IconButton>
            {likes}
          </Box>
          <IconButton
            aria-label="share"
            className="border-solid border-2 border-indigo-300 rounded-full px-3"
          >
            <ShareIcon /> <span className="text-lg pl-3">0</span>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
