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
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { UseActionsPost } from "../../hooks/UseActionsPost";
import { useEffect, useState } from "react";

const Post = ({ item }) => {
  const { HandelDelete, handleClick, HandelLike, navigate, user, likes, open } =
    UseActionsPost(item);

  const [saved, setSaved] = useState(false);
  const HandelSave = () => {
    setSaved(!saved);
    
    // else localStorage.removeItem("savedPosts", savedPosts);
  };

  const initialState = []; 
  const [savedPosts, setSavedPosts] = useState([]);
  useEffect(() => {
    if (saved) {
      const posts = localStorage.getItem("savedPosts");
      if(posts )
      {
        const postsId = JSON.parse(posts)
        postsId.push(item.id)
        localStorage.setItem("savedPosts", JSON.stringify(postsId));
      }
      else
      {
        localStorage.setItem("savedPosts", JSON.stringify([item.id]));
      }
    } else {
      const posts = localStorage.getItem("savedPosts");
      if(posts)
      {const postsId = JSON.parse(posts)
        const newPostId = postsId.filter((id) => id !== item.id);
        localStorage.setItem("savedPosts", JSON.stringify(newPostId));
      }
    }
  }, [saved]);

  return (
    <div>
      <Card
        sx={{ marginBottom: { xs: 5 } }}
        className="flex-col rounded-[10px] shadow-xl py-5 px-5 xl2:w-[60] xl:w-[50rem] lg2:w-[40rem] lg:w-[45rem] w-full md:w-[45rem] border-solid border-gray-300 border-[1px] "
      >
        <CardHeader
          avatar={
            <Avatar
              src={user?.avatar}
              onClick={() => navigate(`profile/${user.email}`)}
              aria-label="recipe"
              className="cursor-pointer"
            ></Avatar>
          }
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
          subheader={
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate(`view-post/${item.id}`)}
            >
              {item.date}
            </span>
          }
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
        <CardActions className="flex items-center justify-between">
          <Box className="flex items-center justify-center">
            <Box className="border-solid border-2 border-indigo-300 rounded-full px-3 mr-3">
              <IconButton
                aria-label="VideocamOutlinedIcon"
                onClick={HandelLike}
              >
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
          </Box>
          <IconButton aria-label="share" onClick={HandelSave}>
            {!saved ? (
              <BookmarkBorderOutlinedIcon
                sx={{ width: "33px", height: "33px" }}
              />
            ) : (
              <BookmarkOutlinedIcon sx={{ width: "33px", height: "33px" }} />
            )}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
