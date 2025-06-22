import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { sharedCardSx } from '../styles/cardStyle';
import { getExperiences, type Experience } from '../services/experienceService';
export default function Experience() {

    const experiences: Experience[] = getExperiences();

    return (
        <section id="experience">
            <Typography fontWeight="bold" variant="h4" gutterBottom>Professional Experience</Typography>
            {experiences.map((exp, i) => (
                <Accordion sx={sharedCardSx} key={i}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1" fontWeight="bold">{exp.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {exp.skills.length > 0 && (
                            <Typography
                                variant="body1"                                
                                sx={{ mb: 2 }}
                            >
                                <strong>Skills:</strong> {exp.skills.join(', ')}
                            </Typography>
                        )}

                        {/* Itemized responsibilities */}
                        <ul className="experience-list">
                            {exp.items.map((item, k) => (
                                <li key={k}>
                                    <Typography>
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            ))}
        </section>
    );
}