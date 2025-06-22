import * as React from 'react';
import { sharedCardSx } from '../styles/cardStyle';
import { Card, CardContent, Typography, List, ListItem, Stack, Chip, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getSkills, type SkillGroup } from '../services/skillService';

export default function Skills() {
    const skills: SkillGroup[] = getSkills();

    return (
        <section id="skills">
            <Typography fontWeight="bold" variant="h4" gutterBottom>Technical Skills</Typography>
            
                    
                        {skills.map((group, i) => (
                    
                                <Accordion sx={sharedCardSx} key={i}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography fontWeight="bold">{group.category}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                                            {group.items.map((item, j) => (
                                                <Chip key={j} label={item} color="primary" size="small" />
                                            ))}
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>
                                
                                
                           
                        ))}
                    
                
        </section>
    );
}