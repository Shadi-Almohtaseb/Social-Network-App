import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    Button,
    Typography,
    Box,
    Container
} from "@mui/material";
import { grey } from '@mui/material/colors';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';

const InformationProfile = ({userIn}) => {
    return (
        <Container fixed>
            <Card flex={4} sx={{ marginBottom: { xs: 5 }, marginRight: { xs: 3 }, display: 'flex', alignContent: 'start', flexDirection: 'column', position: 'relative' }} p={2}>
                <CardMedia sx={{ height: '400px' }}
                    component="img"
                    height="1000"
                    image="https://source.unsplash.com/random"
                    alt="Paella dish"
                />
                <CardHeader sx={{ position: 'absolute', bottom: '72px', width: '100%' }}

                    avatar={
                        <Avatar
                            src={userIn?.image}
                            sx={{ width: 120, height: 120 }}
                            aria-label="recipe"
                        >
                            R
                        </Avatar>
                    }
                />
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="h6" sx={{ color: grey[1000] }}>
                            {userIn?.displayName}
                        </Typography>
                        <Typography variant="body1" sx={{ color: grey[500] }}>
                            hello word
                        </Typography>
                    </Box>

                    <Box sx={{ width: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <RemoveRedEyeOutlinedIcon sx={{ color: grey[800] }} />
                        <Button sx={{ backgroundColor: grey[200], color: grey[800] }} variant="contained">Edit basic info</Button>
                    </Box>
                </CardActions>
            </Card>
        </Container>
    );
};

export default InformationProfile;

