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

const InformationProfile = ({user}) => {
    console.log(user)
    return (
        <Container >
            <Card sx={{ marginBottom: { xs: 5 }, position: 'relative' }}>
                <CardMedia sx={{ height: '400px' }}
                    component="img"
                    height="1000"
                    image={user?.imageProfile}
                    alt="Paella dish"
                />
                <CardHeader sx={{ position: 'absolute', bottom: '72px', width: '100%' }}

                    avatar={
                        <Avatar
                            src={user?.avatar}
                            sx={{ width: 120, height: 120 }}
                            aria-label="recipe"
                        >
                            R
                        </Avatar>
                    }
                    action={
                        <Button sx={{
                            backgroundColor: grey[100],
                            color: grey[800],
                            position: 'absolute',
                            right: 50,
                            bottom: 55
                        }}
                            variant="contained">
                            <BackupOutlinedIcon />
                            Edit Cover Photo
                        </Button>
                    }
                />
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="h6" sx={{ color: grey[1000] }}>
                            {user?.name}
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

