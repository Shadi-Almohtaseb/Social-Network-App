import React, { useEffect } from "react";
import {
    Box,
    Container,
    Typography
} from "@mui/material";
import { grey } from "@mui/material/colors";

const RightBarProfile = () => {

    return (
        <Container fixed>
            <Box sx={{ padding: 2, background: 'white' }} boxShadow={2}>
                <Typography variant="h6" sx={{ color: grey[900], marginBottom: 2 }}>
                    Friend's
                </Typography>
            </Box>
        </Container>
    );
};

export default RightBarProfile;
