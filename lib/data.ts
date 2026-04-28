export const PERSON = {
  name:    'Shanmukha Sai Praneeth',
  title:   'DevOps / SRE Engineer',
  email:   'saipraneeth3722@gmail.com',
  phone:   '+91-9618824355',
  location:'Hyderabad, India',
  website: 'https://shanmukhasaipraneeth.vercel.app',
  video:   '/avatar.mp4',
}

export const SKILLS = [
  { category:'CI/CD & Pipelines',   icon:'⟳', color:'gold',
    items:[{name:'Jenkins',level:95},{name:'GitHub Actions',level:88},{name:'Bitbucket Pipelines',level:90},{name:'AWS CodeBuild',level:82},{name:'GitLab CI',level:80}] },
  { category:'Cloud / AWS',         icon:'☁', color:'cyan',
    items:[{name:'EC2 / VPC / IAM',level:94},{name:'RDS / S3 / ECR',level:90},{name:'CloudWatch / Route53',level:88},{name:'Secret Manager',level:82},{name:'AWS CLI',level:92}] },
  { category:'Infrastructure',       icon:'⬡', color:'green',
    items:[{name:'Linux Admin',level:97},{name:'Nginx / Reverse Proxy',level:92},{name:'Docker / ECR',level:90},{name:'Ansible',level:85},{name:'DNS / CDN / WAF',level:88}] },
  { category:'Monitoring & SRE',    icon:'◈', color:'gold',
    items:[{name:'New Relic',level:88},{name:'AWS CloudWatch',level:90},{name:'K6 Load Testing',level:82},{name:'Incident Mgmt',level:93},{name:'Log Management',level:88}] },
  { category:'Scripting',           icon:'$', color:'cyan',
    items:[{name:'Bash / Shell',level:95},{name:'Python',level:80},{name:'PowerShell',level:78},{name:'YAML / Ansible',level:88},{name:'Power Automate',level:82}] },
  { category:'Platforms',           icon:'▣', color:'green',
    items:[{name:'Magento Cloud',level:92},{name:'MySQL / Redis',level:85},{name:'Elasticsearch',level:80},{name:'RabbitMQ',level:78},{name:'Fastly / Cloudflare',level:86}] },
]

export const EXPERIENCE = [
  {
    period:  'APR 2021 — JAN 2026',
    duration:'5 YRS',
    role:    'DevOps Engineer',
    company: 'Kensium Solutions',
    type:    'Full Time',
    highlights: [
      'Maintained 99.9% uptime across Dev/UAT/Staging/Prod on Linux + AWS with real-time CloudWatch monitoring',
      'Architected CI/CD pipelines via Jenkins, AWS CodeBuild, Bitbucket — reduced release cycles by 30%',
      'Built 60+ automation scripts (Bash, Python, Power Automate, Docker) across 10+ clients — +25% efficiency',
      'Containerized services with Docker multi-stage builds, Alpine images, ECR, and Docker Compose',
      'Fastly VCL + Cloudflare WAF rules for caching, bot mitigation, and IP/ASN filtering',
      'Deployed New Relic + CloudWatch observability stacks across all managed environments',
      'K6 load testing campaigns before every peak traffic event on high-traffic eCommerce platforms',
      'Ansible for automated provisioning, package installation, service orchestration on Linux fleets',
      'Backup + DR using mysqldump, RDS snapshots, Magento ECE Tools, Rclone, S3 with RTO/RPO targets',
      'Automated Jira SLA-breach alerts, SSL renewals, and cross-team notifications via Power Automate',
    ],
  },
  {
    period:  'JAN 2020 — JUN 2020',
    duration:'6 MO',
    role:    'System Engineer',
    company: 'Maavi',
    type:    'Full Time',
    highlights: [
      '24×7 NOC — Linux and Windows server operations with strict SLA compliance',
      'Resolved CPU, memory, disk, and service incidents — reduced system downtime by 15%',
      'Shell scripts for automated daily health checks — saved 3+ hours/week of manual effort',
      'Veeam + Avamar enterprise backup solutions — achieved 99%+ data availability',
      'NFS, SAMBA, FTP file sharing services with user access controls across environments',
    ],
  },
]

export const INFRA_NODES = [
  { id:'client', label:'Client',       x:50, y:8,  icon:'⬡', color:'cyan'  },
  { id:'cf',     label:'Cloudflare',   x:50, y:22, icon:'⛨', color:'gold'  },
  { id:'fastly', label:'Fastly CDN',   x:22, y:36, icon:'⚡', color:'gold'  },
  { id:'lb',     label:'Load Balancer',x:78, y:36, icon:'⇌', color:'cyan'  },
  { id:'nginx',  label:'Nginx',        x:50, y:50, icon:'▶', color:'green' },
  { id:'app',    label:'PHP-FPM / App',x:50, y:64, icon:'▣', color:'green' },
  { id:'redis',  label:'Redis Cache',  x:18, y:80, icon:'◈', color:'gold'  },
  { id:'mq',     label:'RabbitMQ',     x:50, y:80, icon:'⟳', color:'cyan'  },
  { id:'rds',    label:'RDS MySQL',    x:82, y:80, icon:'▤', color:'green' },
]

export const INFRA_EDGES: [string,string][] = [
  ['client','cf'],['cf','fastly'],['cf','lb'],
  ['fastly','nginx'],['lb','nginx'],['nginx','app'],
  ['app','redis'],['app','mq'],['app','rds'],
]

export const PROJECTS = [
  {
    id:'01',
    name:'Riddles Jewelry',
    type:'eCommerce Platform · Full DevOps Ownership',
    impact:['+30% Platform Performance','-25% Operational Costs','Zero Downtime Go-Lives'],
    stack:['Jenkins','Bitbucket','PWA','Magento','Fastly','Cloudflare','Webscale','Nexcess'],
    desc:'End-to-end DevOps lifecycle for a high-traffic jewelry eCommerce platform. Built Jenkins CI/CD pipeline with Generic Webhook Trigger, Bitbucket push events, and Office 365 release notifications. Applied IP-DB log analysis, security hardening, and coordinated zero-downtime go-lives with hosting partners.',
  },
]

export const ACHIEVEMENTS = [
  { metric:'99.9%', label:'Infrastructure Uptime',    sub:'5-year production tenure across all Magento envs' },
  { metric:'100%',  label:'On-Time Deliveries',        sub:'All go-lives including emergency & weekend deploys' },
  { metric:'30%',   label:'Release Cycle Reduction',   sub:'Via CI/CD pipeline optimization' },
  { metric:'10+',   label:'Client Awards',             sub:'Cross-team recognitions 2022–2024' },
  { metric:'60+',   label:'Automations Built',         sub:'Across 10+ client environments' },
  { metric:'25%',   label:'Cost Reduction',            sub:'Infrastructure optimization across AWS envs' },
]
