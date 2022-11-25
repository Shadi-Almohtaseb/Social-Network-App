import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  Checkbox,
  IconButton,
  FormControlLabel,
  TextField,
  Button,
  CssBaseline,
  Typography,
} from "@mui/material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const AddPosts = () => {
  return (
    <Card className="flex-col rounded-[10px] shadow-xl py-5 px-5 w-full xl:w-[50rem] lg2:w-[60rem] lg:w-[45rem] md1:w-[42rem] sm:w-[35rem] xs1:w-[20rem] border-solid border-gray-300 border-[1px]">
      <CssBaseline />
      <CardHeader
        avatar={
          <Avatar
            src="https://source.unsplash.com/random"
            sx={{ width: 50, height: 50 }}
            aria-label="recipe"
          />
        }
        title={
          <TextField
            id="filled-hidden-label-small"
            fullWidth
            size="medium"
            placeholder="What's happening?"
            sx={{
              borderRadius: "10px",
              "& .MuiInputLabel-root": { color: "green" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border: "none" },
              },
            }}
          />
        }
      />
      <CardActions disableSpacing>
        <IconButton aria-label="VideocamOutlinedIcon">
          <FormControlLabel
            control={
              <Checkbox
                icon={<VideocamOutlinedIcon />}
                checkedIcon={<VideocamOutlinedIcon />}
              />
            }
          />
          <Typography className="hidden md1:flex">Live Video</Typography>
        </IconButton>
        <IconButton aria-label="PhotoOutlinedIcon">
          <FormControlLabel
            control={
              <Checkbox
                icon={<PhotoOutlinedIcon />}
                checkedIcon={<PhotoOutlinedIcon />}
              />
            }
          />
          <Typography className="hidden md1:flex">Photo/Video</Typography>
        </IconButton>
        <IconButton aria-label="SentimentSatisfiedAltOutlinedIcon">
          <FormControlLabel control={<SentimentSatisfiedAltOutlinedIcon />} />
          <Typography className="hidden md1:flex">Feeling</Typography>
        </IconButton>
        <Button
          variant="contained"
          component="label"
          sx={{ padding: " 8px 26px", borderRadius: 1 }}
          className=""
        >
          Post
          {/* <input hidden accept="image/*" multiple type="file" /> */}
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddPosts;
