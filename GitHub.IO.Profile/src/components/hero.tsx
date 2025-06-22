import * as React from 'react';
import { Button, IconButton, Avatar, Card, CardContent,Typography,Box } from '@mui/material';
import { Download, Email, GitHub, LinkedIn } from '@mui/icons-material';
import { sharedCardSx } from '../styles/cardStyle';

export default function Hero() {
    return (
        <section className="text-center px-6 py-12 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl space-y-6 mx-auto max-w-3xl w-full">
            <Card sx={sharedCardSx}>
                <CardContent>
                    <Avatar
                        src="/profile.png"
                        alt="Ryan Haworth"
                        sx={{
                            width: 128,
                            height: 128,
                            mx: 'auto',
                            mb: 3,
                            border: '4px solid white',
                            boxShadow: 3
                        }}
                    />
                    <Typography variant="h3" component="h1" align="center" fontWeight="bold">Ryan Haworth</Typography>

                    <Typography variant="body1" align="center" sx={{ color: 'rgba(226, 232, 240, 1)', mx: 'auto' }}>
                        Maryland-based <strong>Senior Software Engineer</strong> specializing in <strong>Azure</strong>, <strong>C#/.NET</strong>, and <strong>Healthcare Systems</strong>.
                    </Typography>

                    <Box display="flex" justifyContent="center" gap={2} pt={3}>
                        <Button variant="contained" color="primary" startIcon={<Download />} href="/Ryan_Haworth_Resume.pdf">
                            Resume
                        </Button>
                        <Button variant="contained" color="primary" startIcon={<Email />} href="mailto:r.haworth@outlook.com">
                            Contact
                        </Button>
                    </Box>
                    <Box display="flex" justifyContent="center" gap={1.5} pt={2}>
                        <IconButton color="inherit" href="https://github.com/rhaworth211" target="_blank">
                            <GitHub />
                        </IconButton>
                        <IconButton color="inherit" href="mailto:r.haworth@outlook.com">
                            <Email />
                        </IconButton>
                        <IconButton color="inherit" href="https://linkedin.com/in/ryan-haworth-59b45b138" target="_blank">
                            <LinkedIn />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </section>
    );
}