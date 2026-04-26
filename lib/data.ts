export const PERSON = {
  name: 'Shanmukha Sai Praneeth',
  nameShort: 'SSP',
  title: 'DevOps · SRE Engineer',
  tagline: 'Infrastructure that never sleeps.',
  location: 'Hyderabad, India',
  email: 'saipraneeth3722@gmail.com',
  phone: '+91-9618824355',
  website: 'https://shanmukhasaipraneeth.vercel.app',
  experience: '5 Years',
  summary: '5 years architecting Linux infrastructure, CI/CD pipelines, and high-availability eCommerce systems at 99.9% uptime.',
  video: '/avatar.mp4',
}

export const STATS = [
  { value: '99.9%', label: 'Uptime SLA', color: 'green' },
  { value: '30%',   label: 'Faster Releases', color: 'cyan' },
  { value: '60+',   label: 'Automations', color: 'gold' },
  { value: '25%',   label: 'Cost Saved', color: 'green' },
  { value: '10+',   label: 'Client Awards', color: 'cyan' },
]

export const SKILLS = [
  {
    category: 'CI/CD & Pipelines',
    icon: '⟳',
    color: 'gold',
    items: [
      { name: 'Jenkins', level: 95 },
      { name: 'GitHub Actions', level: 88 },
      { name: 'Bitbucket Pipelines', level: 90 },
      { name: 'AWS CodeBuild', level: 82 },
      { name: 'GitLab CI', level: 80 },
    ],
  },
  {
    category: 'Cloud & AWS',
    icon: '☁',
    color: 'cyan',
    items: [
      { name: 'EC2 / VPC / IAM', level: 94 },
      { name: 'RDS / S3 / ECR', level: 90 },
      { name: 'CloudWatch / Route53', level: 88 },
      { name: 'Secret Manager', level: 82 },
      { name: 'AWS CLI', level: 92 },
    ],
  },
  {
    category: 'Infrastructure',
    icon: '⬡',
    color: 'green',
    items: [
      { name: 'Linux Administration', level: 97 },
      { name: 'Nginx / Reverse Proxy', level: 92 },
      { name: 'Docker / ECR', level: 90 },
      { name: 'Ansible', level: 85 },
      { name: 'DNS / CDN / WAF', level: 88 },
    ],
  },
  {
    category: 'Monitoring & SRE',
    icon: '◈',
    color: 'gold',
    items: [
      { name: 'New Relic', level: 88 },
      { name: 'AWS CloudWatch', level: 90 },
      { name: 'K6 Load Testing', level: 82 },
      { name: 'Incident Management', level: 93 },
      { name: 'Log Management', level: 88 },
    ],
  },
  {
    category: 'Scripting',
    icon: '$',
    color: 'cyan',
    items: [
      { name: 'Bash / Shell', level: 95 },
      { name: 'Python', level: 80 },
      { name: 'PowerShell', level: 78 },
      { name: 'YAML / Ansible', level: 88 },
      { name: 'Power Automate', level: 82 },
    ],
  },
  {
    category: 'Platforms',
    icon: '▣',
    color: 'green',
    items: [
      { name: 'Magento Cloud', level: 92 },
      { name: 'MySQL / Redis', level: 85 },
      { name: 'Elasticsearch', level: 80 },
      { name: 'RabbitMQ', level: 78 },
      { name: 'Fastly / Cloudflare', level: 86 },
    ],
  },
]

export const EXPERIENCE = [
  {
    period: 'APR 2021 — JAN 2026',
    duration: '5 YRS',
    role: 'DevOps Engineer',
    company: 'Kensium Solutions',
    type: 'Full Time',
    highlights: [
      'Maintained 99.9% uptime across Dev/UAT/Staging/Prod on Linux + AWS',
      'Jenkins + CodeBuild CI/CD reduced release cycles by 30%',
      '60+ automation scripts across 10+ client environments — +25% efficiency',
      'Containerized services via Docker multi-stage, Alpine, ECR, Docker Compose',
      'Fastly VCL + Cloudflare WAF for caching, bot mitigation, IP/ASN filtering',
      'New Relic + CloudWatch observability stacks across all managed environments',
      'K6 load testing before every peak traffic event',
      'Ansible for automated provisioning across Linux server fleets',
    ],
  },
  {
    period: 'JAN 2020 — JUN 2020',
    duration: '6 MO',
    role: 'System Engineer',
    company: 'Maavi',
    type: 'Full Time',
    highlights: [
      '24×7 NOC — Linux & Windows server operations, SLA compliance',
      'Resolved CPU/memory/disk incidents, reduced downtime by 15%',
      'Shell scripts for daily health checks — saved 3h/week manual effort',
      'Veeam + Avamar enterprise backup — 99%+ data availability',
      'Managed NFS, SAMBA, FTP file sharing with access controls',
    ],
  },
]

export const INFRA_NODES = [
  { id: 'client', label: 'Client', x: 50, y: 10, icon: '⬡', color: 'cyan' },
  { id: 'cf', label: 'Cloudflare WAF', x: 50, y: 24, icon: '⛨', color: 'gold' },
  { id: 'fastly', label: 'Fastly CDN', x: 22, y: 38, icon: '⚡', color: 'gold' },
  { id: 'lb', label: 'Load Balancer', x: 78, y: 38, icon: '⇌', color: 'cyan' },
  { id: 'nginx', label: 'Nginx', x: 50, y: 52, icon: '▶', color: 'green' },
  { id: 'app', label: 'PHP-FPM / App', x: 50, y: 66, icon: '▣', color: 'green' },
  { id: 'redis', label: 'Redis Cache', x: 20, y: 80, icon: '◈', color: 'gold' },
  { id: 'mq', label: 'RabbitMQ', x: 50, y: 80, icon: '⟳', color: 'cyan' },
  { id: 'rds', label: 'RDS MySQL', x: 80, y: 80, icon: '▤', color: 'green' },
]

export const INFRA_EDGES = [
  ['client', 'cf'],
  ['cf', 'fastly'],
  ['cf', 'lb'],
  ['fastly', 'nginx'],
  ['lb', 'nginx'],
  ['nginx', 'app'],
  ['app', 'redis'],
  ['app', 'mq'],
  ['app', 'rds'],
]

export const PROJECTS = [
  {
    id: '01',
    name: 'Riddles Jewelry',
    type: 'eCommerce Platform · Full DevOps',
    impact: ['+30% Performance', '-25% OpEx', '0 Downtime Go-lives'],
    stack: ['Jenkins', 'Bitbucket', 'PWA', 'Magento', 'Fastly', 'Cloudflare'],
    desc: 'End-to-end DevOps lifecycle ownership. Built CI/CD pipeline with Generic Webhook Trigger and Office 365 release notifications. IP-DB log analysis, security hardening, zero-downtime go-lives coordinated with Webscale and Nexcess.',
  },
]

export const ACHIEVEMENTS = [
  { icon: '◎', metric: '99.9%', label: 'Uptime', sub: '5-year production tenure' },
  { icon: '◎', metric: '100%', label: 'On-Time Deliveries', sub: 'Including emergency & weekend' },
  { icon: '◎', metric: '30%', label: 'Release Acceleration', sub: 'Via CI/CD optimization' },
  { icon: '◎', metric: '10+', label: 'Client Awards', sub: '2022–2024 cross-team recognition' },
  { icon: '◎', metric: '60+', label: 'Scripts Built', sub: 'Across 10+ client environments' },
  { icon: '◎', metric: '25%', label: 'Cost Reduction', sub: 'Infrastructure optimization' },
]

export const TECH_MARQUEE = [
  'Jenkins', 'AWS EC2', 'Docker', 'Nginx', 'Ansible',
  'Magento Cloud', 'New Relic', 'Fastly', 'Cloudflare WAF',
  'K6 Load Testing', 'Redis', 'RabbitMQ', 'Elasticsearch',
  'Bitbucket', 'GitHub Actions', 'AWS CloudWatch', 'PHP-FPM',
  'Bash', 'Python', 'PowerShell', 'YAML', 'Linux', 'MySQL',
]
