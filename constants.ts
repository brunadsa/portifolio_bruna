import { Experience, Education, SkillCategory, Project, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Bruna Almeida, M.Sc.",
  title: "Principal Machine Learning Engineer",
  location: "Lelystad, Netherlands",
  availability: "Open to Remote/Hybrid work in Amsterdam",
  email: "brunadosantosalmeida@gmail.com",
  phone: "+31 6 16670813",
  about: "Senior ML Engineer/Tech Lead with hands-on experience across the full Machine Learning product lifecycle, from research and model development to production deployment and monitoring. I specialize in defining secure processes through exploration and ML model serviceability. Proven track record with metadata from data, process and models. Seeking to leverage my expertise in GenAI Platform, LLM Infrastructure to design and deploy end-to-end AI solutions in multi-market domains.",
  resume: "/Bruna_Almeida_CV.pdf"
};

export const SOCIALS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/brunadsa/', icon: 'linkedin' },
  { name: 'Github', url: "https://github.com/brunadsa", icon: "github"},
  { name: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: 'mail' },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'nestle',
    role: 'ML Tech Lead',
    company: 'Nestlé',
    location: 'São Paulo (Remote)',
    period: 'Nov 2021 — Present',
    logo: 'https://www.nestle.com/sites/default/files/styles/webp_image/public/flickr-nestle-corporate-logo-2020.jpg.webp?itok=hIxvo2sU',
    trajectory: [
      { role: 'Senior Machine Learning Engineer', type: 'start' },
      { role: 'ML Tech Lead', type: 'promotion' }
    ],
    description: [
      'Guide the ML Team in implementing and supporting ML models in production, ensuring model reliability, accuracy, and governance via robust MLOps.',
      'Supervise and scale deployment for more than 20 data science projects (sales, finances, demand planning), resulting in an 80% reduction in time-to-market.',
      'Collaborate actively with Data Science teams to define suitable and sustainable ML architecture.',
      'Mentor innovation with new technologies in Azure cloud (Azure, Databricks, DevOps, StorageAccount, Docker).'
    ],
    skills: ['MLOps', 'Azure', 'Leadership', 'Model Governance']
  },
  {
    id: 'fitec',
    role: 'Machine Learning Engineer',
    company: 'Fitec',
    location: 'São José dos Campos',
    period: 'Oct 2020 — Nov 2021',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiNJasDDXDY4GiXS5RmiZsbc8dFZeGbXgpQ&s',
    description: [
      'Developed and deployed TensorFlow-based AI models for customer support (Chatbot, sentiment analysis).',
      'Engineered and implemented a customized MLOps architecture using AWS, Docker, and Kubernetes.',
      'Optimized operational efficiency achieving 90% reduction in cloud platform costs compared to off-the-shelf solutions.'
    ],
    skills: ['TensorFlow', 'AWS', 'Kubernetes', 'Cost Optimization']
  },
  {
    id: 'ita-monitor',
    role: 'Data Scientist Monitor',
    company: 'ITA and Itaú',
    location: 'São José dos Campos',
    period: 'Jun 2018 — Dec 2023',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/1/1f/ITA_logo.png',
    description: [
      'Wrote course outlines in data science to guide beginning students in a data scientist training program.',
      'Mentored more than 30 future data scientists, assisted with lessons, real-world exercises, and technical support.'
    ],
    skills: ['Mentoring', 'Education', 'Data Science']
  },
  {
    id: 'ita-researcher',
    role: 'Data Scientist Researcher',
    company: 'ITA',
    location: 'São José dos Campos',
    period: 'Dec 2016 — Nov 2017',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/1/1f/ITA_logo.png',
    description: [
      'Implemented pattern recognition for fraud detection solutions, reducing features, time (10%), and GPU efforts.',
      'Developed an anomaly detection model processing big data (12 million instances).'
    ],
    skills: ['Fraud Detection', 'Big Data', 'Anomaly Detection']
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'master',
    degree: 'Master, Computer Engineering',
    institution: 'ITA (Instituto Tecnológico de Aeronáutica)', 
    location: 'São José dos Campos',
    period: 'Jan 2017 — Jul 2021',
    details: [
      'Core Focus: Algorithmic efficiency and complexity for large-scale systems.',
      'Specialization: Machine Learning and Deep Learning (ANNs, classification, regression).',
      'Thesis work on measuring hardness in artificial neural networks binary classifiers.'
    ]
  },
  {
    id: 'technologist',
    degree: 'Technologist in Logistic',
    institution: 'Fatec',
    location: 'São José dos Campos',
    period: 'Jul 2013 — Jul 2016',
    details: [
      'Focus on optimization techniques and KPI analysis.',
      'Capstone Project: Warehouse management system in Python with mobile QR code identification.'
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Core Expertise",
    items: [
      { name: "Data Science", level: "Expert" },
      { name: "ML Operations (MLOps)", level: "Expert" },
      { name: "Data & Algorithm Analysis", level: "Expert" },
      { name: "Architecture Solutions", level: "Experienced" },
    ]
  },
  {
    category: "Technologies & Tools",
    items: [
      { name: "GenAI Platform Engineering" },
      { name: "LLM Infrastructure" },
      { name: "Cloud (Azure/AWS)" },
      { name: "Kubernetes & Docker" },
      { name: "Databricks" },
      { name: "Python SDK" },
      { name: "RAG Pipelines" },
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", level: "Experienced" },
      { name: "Project Management", level: "Experienced" },
      { name: "Leadership", level: "Experienced" },
      { name: "Communication", level: "Experienced" },
    ]
  }
];

export const LANGUAGES = [
  { language: "Portuguese", level: "Native speaker" },
  { language: "English", level: "Highly proficient" }
];

export const HOBBIES = [
  "Board Games",
  "Gaming",
  "Cooking",
  "Music"
];

// Extrapolated projects from resume content for the portfolio section
export const PROJECTS: Project[] = [
  {
    title: "Conversational AI Platform",
    description: "Designed and deployed TensorFlow-based AI models for customer support solutions, including a functional chatbot and sentiment analysis robot assistant.",
    tags: ["TensorFlow", "NLP", "Deep Learning"],
    image: "https://picsum.photos/seed/ai/600/400"
  },
  {
    title: "Custom MLOps Architecture",
    description: "Engineered a customized MLOps architecture using AWS, Docker, and Kubernetes, achieving a 90% reduction in cloud platform costs.",
    tags: ["AWS", "Kubernetes", "DevOps", "Cost Optimization"],
    image: "https://picsum.photos/seed/cloud/600/400"
  },
  {
    title: "Fraud Detection System",
    description: "Implemented pattern recognition for fraud detection, reducing model training time and GPU efforts by 10% while blocking fraudulent transactions.",
    tags: ["Fraud Detection", "Pattern Recognition", "Security"],
    image: "https://picsum.photos/seed/security/600/400"
  },
  {
    title: "Warehouse Management System",
    description: "Developed a Python-based warehouse system featuring a mobile application for QR code image identification and RFID integration.",
    tags: ["Python", "Computer Vision", "Logistics", "IoT"],
    image: "https://picsum.photos/seed/logistics/600/400"
  }
];