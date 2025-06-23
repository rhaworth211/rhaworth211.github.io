import { Box, Container } from '@mui/material';
import Hero from './components/hero';
import Header from './components/header';
import Projects from './components/projects';
import Experience from './components/experience';
import Skills from './components/skills';
import Education from './components/education';
import './App.css';

function App() {
    return (
        <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            {/* Blurred Background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(./background2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    filter: 'blur(1px)',
                    zIndex: 0,
                }}
            />

            {/* Foreground Content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    /*color: 'white',*/
                    opacity: 25,
                    backgroundColor: 'rgba(0,0,0,0.4)', // optional semi-transparent overlay for readability
                }}
            >
                <Header />                
                    <Container sx={{ py: 10 }}>
                    <Hero></Hero>
                    <Projects />
                    <Experience />
                    <Skills />
                    <Education />
                </Container>                
            </Box>
        </Box>
    );
}

export default App;