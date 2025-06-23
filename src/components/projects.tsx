import { sharedCardSx } from '../styles/cardStyle';
import { Card, CardContent, Typography, Stack, Chip } from '@mui/material';
import { getProjects,type Project } from '../services/projectService';

const projects: Project[] = getProjects();



export default function Projects() {
    return (
        <section id="projects">
            <Typography variant="h4" fontWeight="bold" gutterBottom>Featured Projects</Typography>
            {projects.map((project, i) => (
                <Card key={i} sx={sharedCardSx}>
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold">{project.title}</Typography>
                        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mt: 1, mb: 1 }}>
                            {project.tech.map((t, j) => (
                                <Chip key={j} label={t} color="primary" size="small" />
                            ))}
                        </Stack>
                        <Typography variant="body1">{project.description}</Typography>
                    </CardContent>
                </Card>
            ))}
        </section>
    );
}
