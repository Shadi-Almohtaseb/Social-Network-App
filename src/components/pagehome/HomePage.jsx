import { Box, Container, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Feed from './Feed'
import Rightbar from './Rightbar'

const PageHome = () => {

    return (
        <Container fixed>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                width="100%"
            >
                <Feed />
                <Rightbar />
            </Stack>
        </Container>
    )
}

export default PageHome
