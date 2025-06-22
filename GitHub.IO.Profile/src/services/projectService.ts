export type Project = {
    title: string;
    tech: string[];
    description: string;
};

export function getProjects(): Project[] {
    return [
        {
            title: 'ETL Performance',
            tech: ['C#', 'Azure Synapse', 'SSIS'],
            description: 'Migrated Evidence Based Medicine and Risk Stratification OLAP processing from SQL Server to a multi-threaded process using Azure Data Factories and Synapse Analytics, achieving up to 70 % reduction in processing time'
        },
        {
            title: 'EHR Itegration',
            tech: ['C#', 'HL7', 'FHIR'],
            description: 'Implemented end-to-end EHR integration with Athena Health using both HL7 and FHIR standards'
        },
        {
            title: 'Custom Elastic Agent Solution',
            tech: ['Powershell','Azure Functions', 'Azure DevOps', 'ITAR/CUI', 'YAML'],
            description: 'Implemented custom elastic agent solution using Azure Functions to monitor pools in Azure DevOps and automatically scale agents on demand reducing cost overhead versus static agents'
        }
    ];
}