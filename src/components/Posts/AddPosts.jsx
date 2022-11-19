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
    <Card>
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
          <Typography className="hidden xs:flex">Live Video</Typography>
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
          <Typography className="hidden xs:flex">Photo/Video</Typography>
        </IconButton>
        <IconButton aria-label="SentimentSatisfiedAltOutlinedIcon">
          <FormControlLabel control={<SentimentSatisfiedAltOutlinedIcon />} />
          <Typography className="hidden xs:flex">Feeling</Typography>
        </IconButton>
        <Button
          variant="contained"
          component="label"
          sx={{ padding: " 8px 26px", borderRadius: 1 }}
          className="xl:ml-96 lg:ml-[33rem] mr-5 md3:ml-[23rem] md2:ml-[17rem] md1:ml-[12rem] sm:ml-[8rem] xs1:ml-[2.7rem]"
        >
          Post
          {/* <input hidden accept="image/*" multiple type="file" /> */}
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddPosts;
