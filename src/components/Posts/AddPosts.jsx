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
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const AddPosts = () => {
    const { userIn } = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userIn) navigate("/signin");
    }, [userIn]);

    console.log(userIn?.image)

    return (
        <Box flex={4}>
            <Card className="flex-col rounded-[10px] shadow-xl py-5 px-5 w-full xl:w-[50rem] lg2:w-[60rem] lg:w-[45rem] md1:w-[42rem] sm:w-[35rem] xs1:w-[20rem] border-solid border-gray-300 border-[1px]" sx={{ marginBottom: { xs: 5 } }}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={userIn?.photoURL}
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
