export type SkillGroup = {
    category: string;
    items: string[];
};

export function getSkills(): SkillGroup[] {
    return [
        {
            category: 'Languages & Frameworks',
            items: ['C#/.NET', 'PowerShell', 'TypeScript', 'JavaScript', 'MSSQL', 'KQL', 'RESTful Api']
        },
        {
            category: 'Frontend',
            items: ['React', 'Angular']
        },
        {
            category: 'Cloud & DevOps',
            items: ['Azure', 'Azure DevOps', 'CI/CD', 'YAML', 'Packer', 'Artifactory']
        },
        {
            category: 'Data',
            items: ['SSIS', 'Synapse Analytics', 'Azure Data Factory', 'Azure SQL']
        },
        {
            category: 'Healthcare',
            items: ['Claims ETL', 'FHIR', 'HL7']
        },
        {
            category: 'Leadership',
            items: ['Scrum Master (alt)', 'Team Lead', 'Personel Management']
        }
    ];
}
