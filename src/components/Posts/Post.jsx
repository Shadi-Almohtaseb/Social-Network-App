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
import DeleteIcon from '@mui/icons-material/Delete';
import { ref, set } from "firebase/database";
import { db } from "../../firebase.config";

const Post = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const [likes, setLike] = React.useState(item.countLike)
  const { usersList } = UserAuth();

  const user = usersList?.find(u => u?.email === item?.email)


  const handleClick = () => {
    setOpen(!open);
  };

  const HandelDelete = () => {

    setOpen(!open);
  }

  const HandelLike = () => {
    setLike(likes + 1)
    set(ref(db, 'posts/' + item.id), {
      id: item.id,
      email: item.email,
      date: item.date,
      content: item.content,
      image: item.image,
      countLike: likes,
      countComment: 0,
    });
  }

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
              sx={{ bgColor: "red" }}
              aria-label="recipe"
            >
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <List
                sx={{ bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"

              >
                <ListItemButton className="w-[1rem]" onClick={handleClick}>
                  {open ? <PendingIcon /> : <PendingIcon />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton onClick={HandelDelete} >
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
          title={user?.name}
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
          <Box>
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
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
