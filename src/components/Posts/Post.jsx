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

const Post = ({ item }) => {
  return (
    <div>
      <Card
        sx={{ marginBottom: { xs: 5 } }}
        className="flex-col rounded-[10px] shadow-xl py-5 px-5 xl2:w-[60] xl:w-[50rem] lg2:w-[60rem] lg:w-[45rem] w-full md:w-[45rem] border-solid border-gray-300 border-[1px] "
      >
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
