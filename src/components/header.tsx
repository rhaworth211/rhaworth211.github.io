import { AppBar, Toolbar, Box, Typography } from '@mui/material';

export default function Header() {
    const sections = ['Projects', 'Experience', 'Skills', 'Education'];

    return (
        <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', pt: 2 }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Box display="flex" gap={4}>
                    {sections.map((section, i) => (
                        <Typography
                            key={i}
                            variant="body1"
                            component="a"
                            href={`#${section.toLowerCase()}`}
                            sx={{
                                color: 'white',
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            {section}
                        </Typography>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}