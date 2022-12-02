import React, { useEffect } from "react";
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
    Container,
    Box,
} from "@mui/material";
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const AddPosts = () => {
    const { userIn } = UserAuth();

    useEffect(() => {
        if (!userIn) Navigate("/signin");
    }, [userIn]);

    return (
        <Box flex={4}>
            <Card sx={{ marginBottom: { xs: 5 } }}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={userIn?.image}
                            sx={{ width: 50, height: 50 }}
                            aria-label="recipe"
                        />
                    }
                    title={<TextField
                        id="filled-hidden-label-small"
                        fullWidth
                        size="small"
                        placeholder="What's happening?"
                        sx={{
                            backgroundColor: "#f1f1f1", borderRadius: '10px',
                            "& .MuiInputLabel-root": { color: 'green' },//styles the label
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { border: "none", },
                            },
                        }}
                    />}
                />
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
                    <IconButton aria-label="PhotoOutlinedIcon">
                        <FormControlLabel
                            label="Photo/Video"
                            control={
                                <Checkbox
                                    icon={<PhotoOutlinedIcon />}
                                    checkedIcon={<PhotoOutlinedIcon />}
                                />
                            }
                        />
                    </IconButton>
                    <IconButton aria-label="SentimentSatisfiedAltOutlinedIcon" >
                        <FormControlLabel
                            label="Feeling"
                            control={
                                <SentimentSatisfiedAltOutlinedIcon />
                            }
                        />
                    </IconButton>
                    <Button variant="contained" component="label" sx={{ padding: " 8px 26px", borderRadius: 1 }}>
                        Post
                        {/* <input hidden accept="image/*" multiple type="file" /> */}
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default AddPosts;
