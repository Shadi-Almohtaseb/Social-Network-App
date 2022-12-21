import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddPosts from "./AddPosts";
import Typography from "@mui/material/Typography";
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
  Box,
} from "@mui/material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { UseAddPosts } from "../../hooks/UseAddPosts";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PopupAddPosts = (props) => {
  //const { userIn } = UseIsUserExist();
  const { userIn } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userIn) navigate("/signin");
  }, [userIn]);

  const { addPosts, content, setContent, handleChange } = UseAddPosts(props);

  return (
    <div>
      <Popup
        Popup
        trigger={
          <button>
            {" "}
            <AddPosts />
          </button>
        }
        position="center"
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <Card>
              <div>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    padding: "0 7px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Create post
                  </Typography>
                  <Box
                    className="flex"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography variant="subtitle1">visible for</Typography>
                    <List>
                      <ListItemButton>
                        <ListItemText primary="Friend" />
                      </ListItemButton>
                    </List>
                    <IconButton
                      onClick={() => {
                        close();
                      }}
                    >
                      <FormControlLabel
                        control={<HighlightOffIcon sx={{ fontSize: "26px" }} />}
                      />
                    </IconButton>
                  </Box>
                </CardActions>
                <CardHeader
                  sx={{ display: "flex", alignItems: "flex-start" }}
                  avatar={
                    <Avatar
                      src={userIn?.photoURL}
                      sx={{ width: 50, height: 50 }}
                      aria-label="recipe"
                    />
                  }
                  title={
                    <TextField
                      id="filled-hidden-label-small"
                      name="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      fullWidth
                      size="small"
                      placeholder="What's happening?"
                      sx={{
                        backgroundColor: "#f1f1f1",
                        borderRadius: "10px",
                        height: "120px",
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { border: "none" },
                        },
                      }}
                    />
                  }
                />
              </div>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 15px 0 7px",
                }}
              >
                <Box>
                  <IconButton aria-label="VideocamOutlinedIcon">
                    <FormControlLabel
                      label="Live Video"
                      control={
                        <Checkbox
                          icon={<VideocamOutlinedIcon />}
                          checkedIcon={<VideocamOutlinedIcon />}
                        />
                      }
                    />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    sx={{ color: "#888" }}
                  >
                    <input
                      hidden
                      accept="image/*"
                      name="imgPost"
                      type="file"
                      onChange={handleChange}
                    />
                    <ImageOutlinedIcon />
                    <Typography variant="body2">Photo/Video</Typography>
                  </IconButton>
                  <IconButton aria-label="SentimentSatisfiedAltOutlinedIcon">
                    <FormControlLabel
                      label="Feeling"
                      control={<SentimentSatisfiedAltOutlinedIcon />}
                    />
                  </IconButton>
                </Box>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ padding: " 8px 26px", borderRadius: 2 }}
                  onClick={addPosts}
                >
                  Post
                </Button>
              </CardActions>
            </Card>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default PopupAddPosts;
