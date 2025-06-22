import * as React from 'react';
import { sharedCardSx } from '../styles/cardStyle';

import { Card, CardContent, Typography } from '@mui/material';

export default function Education() {
    return (
        <section id="education">
            <Typography fontWeight="bold" variant="h4" gutterBottom>Education</Typography>
            <Card sx={sharedCardSx}>
                <CardContent>
                    <Typography variant="body1" align="center">
                        <strong>Associate Degree in Software Engineering</strong><br />
                        Anne Arundel Community College - 2012
                    </Typography>
                </CardContent>
            </Card>
        </section>
    );
}
