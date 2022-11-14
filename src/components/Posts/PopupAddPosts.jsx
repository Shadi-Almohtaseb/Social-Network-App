import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddPosts from './AddPosts';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { auth } from '../../firebase.config';
import { db } from '../../firebase.config';
import { storage } from '../../firebase.config';
import { onValue, ref, set,} from "firebase/database";
import { uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { UserAuth } from '../../context/AuthContext';
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
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

// const [open, setOpen] = useState(true);


// const handleClick = () => {
//     setOpen(false);
// };
const PopupAddPosts = (props) => {
  const { userIn } = UserAuth();
  const navigate = useNavigate();
  const [content, setContent] = useState();
  const [imageAsFile, setImageAsFile] = useState('');

  useEffect(() => {
    if (!userIn) navigate("/signin");
  }, [userIn]);

  

  const handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0]
      setImageAsFile(() => (image));
    }
  }

  const addPosts = () => {
    const mountainImagesRef = ref(storage, `posts/${imageAsFile.name + v4()}`);

    uploadBytes(mountainImagesRef, imageAsFile).then(() => 
    {
      console.log('image upload')
    })

    set(ref(db, 'posts/' + props.postData.length), {
      name: userIn?.displayName,
      content: content,
      image: mountainImagesRef.fullPath
    });
  }
  
  return (
    <div>
      <Popup Popup trigger={<button button > <AddPosts /></button>} position="center" modal nested >
        {close => (
          <div className="modal">
            <Card>
              <div>
                <CardActions sx={{ width: '100%', maxWidth: 500, display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                  <Typography variant="h6" gutterBottom>
                    Create post
                  </Typography>
                  <Box className='flex' sx={{ display: "flex", alignContent: "center" }}>
                    <Typography variant="subtitle1" gutterBottom>
                      visible for
                    </Typography>
                    <List>
                      <ListItemButton>
                        <ListItemText primary="Friend" />
                      </ListItemButton>
                      <Collapse timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Starred" />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </List>
                    <IconButton aria-label="HighlightOffIcon" onClick={() => { close() }}>
                      <FormControlLabel
                        control={
                          <HighlightOffIcon />
                        }
                      />
                    </IconButton>
                  </Box>
                </CardActions>
                <CardHeader
                  avatar={
                    <Avatar
                      src="https://source.unsplash.com/random"
                      sx={{ bgColor: "red" }}
                      aria-label="recipe"
                    />
                  }
                  title={<TextField
                    id="filled-hidden-label-small"
                    name='content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    fullWidth
                    size="small"
                    placeholder="What's happening"
                    sx={{ border: 'none', backgroundColor: "#f1f1f1" }} />}
                />
              </div>
              <CardActions disableSpacing>
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
                <IconButton color="primary" aria-label="upload picture" component="label" sx={{ color: '#888' }}>
                  <input hidden accept="image/*" name='imgPost' type="file" onChange={handleChange} /*value={images} onChange={(e) => setImages(e.target.value)}*/ />
                  <ImageOutlinedIcon />
                  <Typography variant="body2" gutterBottom>
                    Photo/Video
                  </Typography>
                </IconButton>
                {/* <IconButton aria-label="PhotoOutlinedIcon">
              <FormControlLabel
                label="Photo/Video"
                control={
                  <Checkbox
                    icon={<PhotoOutlinedIcon />}
                    checkedIcon={<PhotoOutlinedIcon />}
                  />
                }
              />
            </IconButton> */}
                <IconButton aria-label="SentimentSatisfiedAltOutlinedIcon">
                  <FormControlLabel
                    label="Feeling"
                    control={
                      <SentimentSatisfiedAltOutlinedIcon />
                    }
                  />
                </IconButton>
                <Button variant="contained" component="label" sx={{ padding: " 6px 32px" }} onClick={addPosts}>
                  Post
                  {/* <input hidden accept="image/*" multiple type="file" /> */}
                </Button>
              </CardActions>
            </Card>
          </div>
        )}
      </Popup >
    </div>
  )
};

export default PopupAddPosts;