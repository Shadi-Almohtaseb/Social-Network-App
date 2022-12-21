import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SinglePost = ({ post, user }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 945 }}>
      <Box className="md3:flex md3:items-center md3:justify-between">
        <CardHeader
          avatar={
            <Avatar
              aria-label="replace"
              className="w-16 h-16"
              src={user.avatar}
            ></Avatar>
          }
          title={user.name}
          subheader={post.date}
        />
        <Typography className="px-5 py-2 font-light xs2:flex gap-2 md3:mr-48">
          Email Address:
          <Typography className="font-[500]">{post.email}</Typography>
        </Typography>
      </Box>
      <CardMedia component="img" image={post.image} alt="Paella dish" />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography> */}
      </CardContent>
      <Box className="flex items-center justify-between">
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Box className="flex items-center justify-center">
          <Typography className="font-bold">Read More About it</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{post.content}</CardContent>
      </Collapse>
    </Card>
  );
};

export default SinglePost;
