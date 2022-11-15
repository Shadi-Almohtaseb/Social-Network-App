import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Post = () => {
  return (
    <div>
      <Card sx={{ marginBottom: { xs: 5 } }}>
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
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="500"
          image="https://source.unsplash.com/random"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
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
