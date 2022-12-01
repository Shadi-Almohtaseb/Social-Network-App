import React from "react";
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
} from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";

const Post = ({ item }) => {
  const [userPosts, setUserPosts] = useState({})
  const { usersList } = UserAuth();
  usersList.map(u => {
    if (u.email === item.email) {
      // console.log(u);
      // setUserPosts(u)
    } 
  })
  return (
    <div>
      <Card sx={{ marginBottom: { xs: 5 }}}>
        <CardHeader
          avatar={
            <Avatar
              src="https://source.unsplash.com/random"
              sx={{ bgColor: "red" }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <PendingIcon />
            </IconButton>
          }
          title="Shadi Almohtaseb"
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
          <IconButton aria-label="VideocamOutlinedIcon">
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
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
