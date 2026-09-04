export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  // { label: "Contact", href: "/contact" },
];

export const services = [
  {
    number: '01',
    title: 'Migration strategy & readiness',
    short:
      'A risk-aware roadmap before a single workload moves. Eliminate downtime, map dependencies, and align stakeholders from day one.',
    detail:
      'We evaluate your full application portfolio, legacy infrastructure, technical dependencies, and cost baseline to construct a clear business case and operational plan. By identifying compliance requirements, skill gaps, and risk exposure early, we eliminate surprises and establish momentum before execution begins.',
    includes: [
      'Readiness assessment',
      'Dependency mapping',
      'Migration roadmap',
    ],
  },
  {
    number: '02',
    title: 'Cloud landing zones',
    short:
      'Secure, automated foundations built to scale. Standardize governance, access, and compliance across your cloud environment.',
    detail:
      'We design and deploy automated multi-account environments configured with enterprise guardrails, network topology, and governance from day one. This ensures developer teams can launch workloads rapidly within pre-configured boundaries while maintaining strict compliance, centralized access controls, and operational auditability across all accounts.',
    includes: [
      'Identity & access design',
      'Network architecture',
      'Security guardrails',
    ],
  },
  {
    number: '03',
    title: 'Application & data migration',
    short:
      'Low-risk, phased execution with zero business disruption. Move critical databases and services seamlessly in controlled waves.',
    detail:
      'We transition legacy workloads, databases, and microservices into the cloud using structured, low-risk execution phases. By applying automated validation, schema transformations, and detailed fallback mechanisms for every wave, we guarantee business continuity and minimal impact on live end-user services.',
    includes: ['Wave planning', 'Data migration', 'Cutover support'],
  },
  {
    number: '04',
    title: 'Cloud optimization',
    short:
      'Maximum performance, minimal spend. Gain immediate cost visibility, tighten security posture, and optimize performance post-launch.',
    detail:
      'Post-migration, we transform initial cloud adoption into a mature, high-performing operating model. We analyze usage patterns to rightsizing infrastructure, establish financial visibility across teams, and harden system reliability so your cloud environment continues to scale efficiently over time.',
    includes: ['Cost visibility', 'Observability', 'Reliability improvements'],
  },
];

export const caseStudies = [
  {
    slug: 'satellite-imaging-analysis-dask-ecs-fargate',
    industry: 'Public Sector - Federal Gov',
    title:
      'Satellite Imaging Analysis: Basic Compositing with Dask on ECS Fargate',
    challenge:
      'A federal government agency had a strategic initiative to build a GIS tool using satellite imagery composites. The agency had previously conducted geospatial testing on a competing cloud platform and needed to evaluate whether AWS could serve as a viable alternative for their analytical workloads.',
    objective:
      'Demonstrate a working proof-of-concept on AWS for geomedian composite generation using Dask, Open Data Cube (ODC), and Sentinel-2 satellite imagery, as the first of two project objectives — with ML-based land feature classification identified as the second, subsequent objective.',
    action:
      'The proof of concept was designed and delivered, covering: custom Docker image builds for Dask scheduler and worker nodes (patched for geospatial dependencies including GDAL, psycopg2, and ODC tooling); Amazon ECR for container image storage; ECS Fargate for provisioning a distributed Dask cluster (scheduler and two workers at 2 vCPU / 16 GB each); Open Data Cube / Cube-in-a-Box for dataset indexing against Digital Earth Africa Sentinel-2 catalogue; and generation of median, seasonal, min, max, and mean composites. CloudWatch integration was configured for observability, and cost optimisation guidance was provided recommending EC2 over Fargate for long-running workloads, alongside Lambda-driven scheduling for cluster lifecycle management.',
    outcome:
      'A functional end-to-end compositing pipeline was demonstrated on AWS, producing cloud-free median composites from multi-temporal satellite imagery. The proof-of-concept validated AWS as a capable alternative to the competing platform. A path forward was identified for production maturity via a CI/CD pipeline (CodeCommit, CodePipeline, CodeBuild, ECR) to automate image builds — positioning the agency for the next phase of ML-based land feature classification.',
  },
  {
    slug: 'accelerated-medical-ai-research-with-cloud-native-hpc',
    industry: 'Healthcare Research',
    title: 'Accelerated Medical AI Research with Cloud Native HPC',
    challenge:
      'A prominent academic research institution aimed to develop a foundational video model to establish new performance standards in medical imaging. The research team was limited by on-premise high-performance computing resources that lacked the necessary scale and GPU acceleration for complex model training, requiring a cloud-native partner to transition their AI research into a production-grade environment.',
    objective:
      'Architect and deploy an AWS-based research computing environment to accelerate the transition from conceptual research to trained models. The objective included navigating medical imaging standards and national infrastructure dependencies while maintaining the workflow flexibility required by the scientific team.',
    action:
      'The engagement was executed in two phases: initially delivering specialist enablement on AWS ParallelCluster and SageMaker to build operational confidence. A CDK-driven ParallelCluster architecture was deployed with custom scripts to maintain integration with a national research file system. Leveraging expertise in DICOM standards, data preprocessing was optimised, resulting in a 26× throughput increase over the on-premise baseline. In the second phase, researchers were migrated to Amazon SageMaker HyperPod for managed, Slurm-compatible training.',
    outcome:
      "The preprocessing acceleration enabled the team to achieve results months ahead of schedule, culminating in the successful training of a novel cardiac video foundation model. By early 2025, a high-impact preprint was published and featured in an international science journal. The project validated AWS's ability to support frontier medical AI from infrastructure to publication and established a scalable blueprint for future cloud-native research initiatives at the institution.",
  },
  {
    slug: 'enabling-privacy-compliance-via-centralised-audit-logging',
    industry: 'Public Sector - State Gov.',
    title: 'Enabling Privacy Compliance via Centralised Audit Logging',
    challenge:
      "A provincial ministry modernizing its multi-cloud and on-premise analytics backend faced a critical compliance gap under privacy laws: it couldn't reliably audit personal health information (PHI) handling. To satisfy regulatory requirements, the team needed a centralized solution to aggregate and expose logs across disparate environments for inspection by the provincial privacy lead.",
    objective:
      'Architect and deploy a multi-account audit logging solution to satisfy legislative obligations while ensuring operational practicality for non-technical compliance staff. The objective involved aggregating logs from diverse sources — including Redshift, Oracle RDS, Glue, SAS Viya on EKS, and OpenShift — and exposing them via SQL-like interfaces within a compressed delivery timeline.',
    action:
      'The engagement delivered a shared, multi-account architecture that isolated the operational environment from a dedicated Centralised Audit Account. Continuous log emission was configured for Oracle RDS, Redshift, and Glue into CloudWatch, while S3 access logs were replicated via SRR for PHI-sensitive buckets. For the SAS environment, a Lambda-based loader was developed to extract metadata for access reviews, and an Azure-hosted layer was instrumented via CloudWatch agents. Log data was streamed through Kinesis Data Firehose into S3 with lifecycle policies for cost optimisation. On the consumption side, Glue crawlers and Athena were implemented as the primary query interface, supplemented by OpenSearch for containerised workloads and QuickSight for trend visualisation. Security was enforced through KMS encryption and Secrets Manager, while the delivery was accelerated through embedded specialist enablement.',
    outcome:
      "The solution provided a production-ready logging platform that unified data across six systems and two cloud providers into a governed archive. Compliance staff successfully performed PHI handling audits using familiar SQL interfaces, directly satisfying the Provincial Privacy Commissioner's requirements. The engagement established a durable governance pattern and validated AWS's ability to deliver mission-critical infrastructure under tight regulatory timelines in a sensitive healthcare context.",
  },
];
