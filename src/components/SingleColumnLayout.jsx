import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import herobg from '../assets/images/herobg.png'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../themes/theme.jsx'
import { StyledButton } from './StyledButton'
import TextContent from './TextContent'

export const SingleColumnLayout = ({title, heading, subheading, bgImage, buttonBorderRadius}) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover'}} paddingY={13}>
                    <Stack direction='column' width='60%' spacing={4}>
                        <Typography variant='h3' color='secondary' textAlign='center'>
                            {title}
                        </Typography>
                        <Typography variant='h1' color='secondary' textAlign='center'>
                            {heading}
                        </Typography>
                        <Typography variant='h3' color='secondary' textAlign='center'>
                            {subheading}
                        </Typography>
                        <Stack direction='row' display='flex' justifyContent='space-around' width='70%' alignSelf='center'>
                            <StyledButton buttonText='Playstore' borderRadius={buttonBorderRadius} />
                            <StyledButton buttonText='App store' borderRadius={buttonBorderRadius} />
                        </Stack>
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default SingleColumnLayout