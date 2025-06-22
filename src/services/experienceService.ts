export type Experience = {
    title: string;
    description: string;
    skills: string[];
    items: string[];
};

export function getExperiences(): Experience[] {
    return [
        {
            title: 'Senior Software Engineer • Microsoft (2022-2025)',
            description: 'Led development and maintenance of custom Azure services in highly secure environments containing ITAR and CUI information, focusing on developer productivity and infrastructure security.',
            skills: ['React', 'Angular', 'JavaScript', 'TypeScript', '.NET Core', 'C#', 'Entity Framework', 'MSSQL', 'KQL','PowerShell', 'Packer', 'Azure Cloud Services', 'Azure DevOps', 'Artifactory'],
            items: [
                'Security Transformation: Spearheaded critical Secure First Initiative (SFI) implementation across multiple repositories, remediating vulnerabilities, updating.NET frameworks, and correcting dependency issues while maintaining strict deadlines',
                'Resource Optimization: Engineered and maintained a custom agent scaling solution that dynamically provisioned Azure DevOps pool agents on demand, reducing resource overhead while improving developer productivity',
                'Infrastructure Modernization: Established and maintained 1ES Images and 1ES Hosted Pools across multiple Mixed Reality projects, customizing developer environments to enhance performance while ensuring security compliance',
                'DevOps Excellence: Managed multiple custom Azure DevOps instances, including permission structures, pipeline configurations, and repository governance aligned with Microsoft and Mixed Reality policies'
            ]
        },
        {
            title: 'Senior Software Engineer • Conifer Health Solutions (2014-2022)',
            description: 'Led end-to-end development across multiple healthcare Population Health and Revenue Cycle Management platforms, specializing in backend systems and ETL operations while contributing across the full application stack.',
            skills: [
                'Angular/AngularJS',
                'TypeScript/JavaScript',
                'Material Design',
                'Bootstrap',
                '.NET Framework/.NET Core',
                'C#',
                'Entity Framework',
                'Dapper',
                'MSSQL',
                'SQL Server Parallel Data Warehouse',
                'SSIS',
                'SSRS',
                'Azure Data Factories',
                'Azure Synapse Analytics'
            ],
            items: [
                'Performance Optimization: Migrated Evidence Based Medicine and Risk Stratification OLAP processing from SQL Server to multi-threaded Synapse Analytics, achieving up to 70% reduction in processing time',
                'Architecture Transformation: Re-architected in-house grouping process in Synapse Analytics for optimized workload management and custom resource class utilization',
                'Healthcare Integration: Implemented end-to-end EHR integration with Athena Health using both HL7 and FHIR standards',
                'Leadership: Served as alternate Scrum Master and Development Team Manager, including offshore team leadership during critical development cycles'
            ]
        },
        {
            title: 'Senior Software Engineer • POS Solutions (2008-2014)',
            description: 'Led development efforts for native Windows point-of-sale applications and multi-store reporting websites, implementing performance optimizations and data aggregation solutions.',
            skills: [
                'WinForms',
                'Windows CE',
                'Windows Mobile',
                'ASP.NET',
                '.NET Framework',
                'C#',
                'Entity Framework',
                'MSSQL',
                'SQL Server',
                'SSIS'
            ],
            items: [
                'Performance Engineering: Migrated inline SQL commands to stored procedures, implementing strategic indexing that significantly improved application responsiveness',
                'Multi-tenant Solutions: Designed and implemented custom websites enabling multi-store customers to generate reports on aggregated data across locations'
            ]
        },
        {
            title: 'SAS Developer / Research Assistant • University of Maryland Medical System, Dept. of Neurology (1999-2001)',
            description: 'Developed custom data solutions for The Maryland Stroke Center, including clinical data entry systems and statistical analysis tools.',
            skills: [
                'MS Access',
                'VB',
                'VB Script',
                'SAS Statistical Analysis Software'
            ],
            items: [
                'Clinical Database: Designed and implemented a relational database solution using MS Access and VBA for clinicians to use during patient visits ',
                'Research Support: Performed statistical analysis for neurological research using SAS Statistical Analysis Software'
            ]
        }
    ];
}