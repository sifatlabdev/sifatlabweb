// ============================================================
// TYPES & INTERFACES
// ============================================================

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  citations: number;
  doi: string;
  pmid: string;
}

export interface ContributionToScience {
  id: string;
  title: string;
  description: string;
  keyAchievements: string[];
  publications: Publication[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface Experience {
  position: string;
  institution: string;
  period: string;
  description: string;
}

export interface TeachingCourse {
  course: string;
  level: string;
  period: string;
  description: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  specialty: string;
  url: string;
}

export interface JeffersonProject {
  title: string;
  description: string;
  detailedDescription: string;
  status: string;
  tags: string[];
  publications: Publication[];
}

export interface HeroData {
  name: string;
  badge: string;
  title: string;
  bio: string;
  image: string;
  expertiseTags: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  officeLocation: {
    campus: string;
    address: string;
    city: string;
  };
  officeHours: string;
}

// ============================================================
// HERO SECTION DATA
// ============================================================

export const heroData: HeroData = {
  name: "Nicole Alba, PhD",
  badge: "Computational Biology Researcher",
  title: "Assistant Professor of Bioinformatics",
  bio: `I am an Assistant Professor at Thomas Jefferson University, affiliated with Sidney Kimmel Medical College, where my research focuses on health equity, addressing modifiable health behaviors and mental health disparities in underserved populations. My work emphasizes cancer prevention, particularly tobacco-related cancers and HPV self-sampling for cervical cancer screening.
As Assistant Director of Community Outreach and Engagement at the Sidney Kimmel Comprehensive Cancer Center, I have developed strong community partnerships that enabled a pilot study establishing the workflow for our current HPV self-sampling initiative. This formative research, supported by Sidney Kimmel Medical College's Dean's Jump Start Pilot Award, explores how to overcome barriers to cervical cancer screening by offering HPV self-sampling in diverse community settings. My work addresses the behavioral, psychosocial, and structural factors influencing health behaviors in vulnerable populations.`,
  image: "https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHJlc2VhcmNoZXIlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg4NTc3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  expertiseTags: [
    "Machine Learning",
    "Genomics",
    "Bioinformatics",
    "Drug Discovery"
  ]
};

// ============================================================
// ABOUT SECTION DATA
// ============================================================

export const aboutData = {
  name: "Nicole Alba, PhD",
  description: "A computational biologist passionate about leveraging AI and machine learning to solve complex biological problems and advance precision medicine."
};

export const education: Education[] = [
  {
    degree: "Ph.D. in Computational Biology",
    institution: "Stanford University",
    year: "2018",
    description: "Dissertation: Machine Learning Approaches for Genomic Data Analysis"
  },
  {
    degree: "M.S. in Computer Science",
    institution: "MIT",
    year: "2014",
    description: "Focus: Artificial Intelligence and Bioinformatics"
  },
  {
    degree: "B.S. in Biology and Mathematics",
    institution: "University of California, Berkeley",
    year: "2012",
    description: "Summa Cum Laude, Phi Beta Kappa"
  }
];

export const experience: Experience[] = [
  {
    position: "Assistant Professor",
    institution: "University of California, San Francisco",
    period: "2019 - Present",
    description: "Leading research in computational biology and precision medicine"
  },
  {
    position: "Postdoctoral Fellow",
    institution: "Broad Institute",
    period: "2018 - 2019",
    description: "Developed machine learning models for drug discovery"
  },
  {
    position: "Research Intern",
    institution: "Genentech",
    period: "Summer 2017",
    description: "Worked on computational approaches for cancer genomics"
  }
];

// ============================================================
// TEACHING SECTION DATA
// ============================================================

export const teachingExperience: TeachingCourse[] = [
  {
    course: "Computational Biology 101",
    level: "Undergraduate",
    period: "Fall 2020 - Present",
    description: "Introduction to computational methods in biological research"
  },
  {
    course: "Advanced Machine Learning for Genomics",
    level: "Graduate",
    period: "Spring 2021 - Present",
    description: "Deep learning applications in genomic data analysis"
  },
  {
    course: "Bioinformatics Seminar Series",
    level: "Graduate/Postdoc",
    period: "2019 - Present",
    description: "Weekly research presentations and discussions"
  }
];

export const leadershipData = {
  description: "I am passionate about fostering the next generation of computational biologists through hands-on mentorship and collaborative research environments. I currently mentor 12 graduate students and 4 postdoctoral fellows, emphasizing both technical excellence and scientific integrity.",
  stats: [
    "12 Graduate Students Currently Mentored",
    "4 Active Postdoctoral Fellows",
    "Editorial Board Member, 3 Journals",
    "Program Committee, Major Conferences"
  ],
  badges: [
    "Student Mentorship",
    "Diversity & Inclusion",
    "Scientific Leadership",
    "Community Building"
  ]
};

// ============================================================
// TEAM SECTION DATA
// ============================================================

export const labDirector: TeamMember = {
  name: "Nicole Alba, PhD",
  title: "Lab Director & Principal Investigator",
  image: "https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkxMTg2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  specialty: "Computational Biology & AI",
  url: ""
};

export const universityCollaborators: TeamMember[] = [
  {
    name: "Dr. Michael Rodriguez",
    title: "Associate Professor, Computer Science",
    image: "https://images.unsplash.com/photo-1691935152210-35ae500d91d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVyJTIwc2NpZW50aXN0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU5MjE2MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Machine Learning",
    url: ""
  },
  {
    name: "Dr. Emily Watson",
    title: "Professor, Molecular Biology",
    image: "https://images.unsplash.com/photo-1663128637417-d0213df51462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0ZSUyMHN0dWRlbnQlMjByZXNlYXJjaGVyfGVufDF8fHx8MTc1OTIxNjE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Genomics",
    url: ""
  },
  {
    name: "Dr. James Park",
    title: "Assistant Professor, Biostatistics",
    image: "https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkxMTg2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Statistical Modeling",
    url: ""
  }
];

export const externalCollaborators: TeamMember[] = [
  {
    name: "Dr. Lisa Anderson",
    title: "Research Scientist, Broad Institute",
    image: "https://images.unsplash.com/photo-1691935152210-35ae500d91d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVyJTIwc2NpZW50aXN0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU5MjE2MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Drug Discovery",
    url: ""
  },
  {
    name: "Dr. David Kim",
    title: "Senior Researcher, Genentech",
    image: "https://images.unsplash.com/photo-1663128637417-d0213df51462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0ZSUyMHN0dWRlbnQlMjByZXNlYXJjaGVyfGVufDF8fHx8MTc1OTIxNjE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Cancer Genomics",
    url: ""
  }
];

export const graduateResearchers: TeamMember[] = [
  {
    name: "Amanda Thompson",
    title: "Ph.D. Candidate",
    image: "https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkxMTg2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Deep Learning for Genomics",
    url: ""
  },
  {
    name: "Robert Martinez",
    title: "Ph.D. Candidate",
    image: "https://images.unsplash.com/photo-1691935152210-35ae500d91d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVyJTIwc2NpZW50aXN0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU5MjE2MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Precision Medicine",
    url: ""
  },
  {
    name: "Jessica Liu",
    title: "M.S. Student",
    image: "https://images.unsplash.com/photo-1663128637417-d0213df51462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0ZSUyMHN0dWRlbnQlMjByZXNlYXJjaGVyfGVufDF8fHx8MTc1OTIxNjE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Bioinformatics",
    url: ""
  },
  {
    name: "Kevin Brown",
    title: "Ph.D. Candidate",
    image: "https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkxMTg2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Computational Drug Discovery",
    url: ""
  }
];

export const undergraduateResearchers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    title: "Undergraduate Researcher",
    image: "https://images.unsplash.com/photo-1691935152210-35ae500d91d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVyJTIwc2NpZW50aXN0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU5MjE2MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Data Analysis",
    url: ""
  },
  {
    name: "Chris Patel",
    title: "Undergraduate Researcher",
    image: "https://images.unsplash.com/photo-1663128637417-d0213df51462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0ZSUyMHN0dWRlbnQlMjByZXNlYXJjaGVyfGVufDF8fHx8MTc1OTIxNjE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Algorithm Development",
    url: ""
  },
  {
    name: "Maya Davis",
    title: "Undergraduate Researcher",
    image: "https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY2llbnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkxMTg2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specialty: "Genomic Data Processing",
    url: ""
  }
];

export const teamSectionData = {
  title: "Meet the Team",
  description: "A diverse and talented group of researchers dedicated to advancing computational biology and precision medicine through collaborative innovation."
};

// ============================================================
// Alba Lab SECTION DATA
// ============================================================

export const chenLabData = {
  title: "Sifat Lab",
  subtitle: "Computational Health and Engineering Network Laboratory at Thomas Jefferson University",
  heroImage: "https://images.unsplash.com/photo-1666558889375-798fa96b559a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2glMjB0ZWFtfGVufDF8fHx8MTc1OTIxNjIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  mission: "To advance precision medicine through innovative computational approaches, developing AI-driven solutions that transform how we understand and treat complex diseases. We are committed to translating cutting-edge research into clinical applications that improve patient outcomes at Jefferson and beyond.",
  whoWeAre: {
    description: "A multidisciplinary team of computational biologists, bioinformaticians, and data scientists working at the intersection of AI and medicine. Established in 2019 at Thomas Jefferson University, we bring together expertise in machine learning, genomics, and clinical research.",
    stats: ["12 Researchers", "Est. 2019", "Jefferson University"]
  },
  mainFocus: [
    "Machine learning for drug discovery and therapeutic target identification",
    "Genomic data analysis for personalized medicine applications",
    "Development of AI-driven clinical decision support tools",
    "Biomarker discovery for early disease detection and monitoring"
  ],
  whatWeDo: [
    "Develop novel computational algorithms and machine learning models",
    "Analyze large-scale genomic and clinical datasets",
    "Collaborate with clinicians to translate research into practice",
    "Train the next generation of computational biologists"
  ]
};

export const jeffersonProjects: JeffersonProject[] = [
  {
    title: "AI-Driven Cancer Therapeutics",
    description: "Developing machine learning models to identify novel therapeutic targets for cancer treatment at Jefferson.",
    detailedDescription: "This project focuses on leveraging advanced deep learning architectures and artificial intelligence to revolutionize cancer drug discovery at Thomas Jefferson University. We are developing novel computational methods to predict drug-target interactions, identify potential therapeutic compounds, and optimize lead molecules for various cancer types. Our approach integrates multi-omics data with clinical outcomes to create predictive models that can accelerate the drug discovery pipeline and reduce the time and cost associated with traditional methods.",
    status: "Ongoing",
    tags: ["AI", "Cancer Research", "Drug Discovery"],
    publications: [
      {
        title: "Deep Learning Approaches for Drug-Target Interaction Prediction in Cancer",
        authors: "N. Alba, M. Rodriguez, K. Liu, D. Thompson",
        journal: "Nature Biotechnology",
        year: "2024",
        citations: 127,
        doi: "10.1038/s41587-024-00000-0",
        pmid: "38123456"
      },
      {
        title: "Network-Based Analysis of Cancer Metabolic Pathways",
        authors: "N. Alba, R. Williams, S. Patel",
        journal: "Cancer Research",
        year: "2023",
        citations: 267,
        doi: "10.1158/0008-5472.CAN-22-0000",
        pmid: "35456789"
      },
      {
        title: "AI-Powered Target Identification for Precision Oncology",
        authors: "N. Alba, L. Anderson, M. Kim",
        journal: "Cell Systems",
        year: "2024",
        citations: 89,
        doi: "10.1016/j.cels.2024.00000",
        pmid: "38234567"
      }
    ]
  },
  {
    title: "Personalized Genomic Medicine Platform",
    description: "Creating a comprehensive platform for personalized treatment recommendations based on patient genomic data.",
    detailedDescription: "Our personalized genomic medicine platform represents a comprehensive effort to translate genomic discoveries into clinical practice at Jefferson. The platform integrates whole-genome sequencing data, electronic health records, and clinical outcomes to provide personalized treatment recommendations. We utilize machine learning algorithms to identify genomic biomarkers, predict treatment responses, and stratify patients based on their molecular profiles. This initiative aims to make precision medicine accessible and actionable for clinicians, ultimately improving patient outcomes through data-driven therapeutic decisions.",
    status: "Ongoing",
    tags: ["Precision Medicine", "Genomics", "Clinical Applications"],
    publications: [
      {
        title: "Genomic Biomarkers for Precision Medicine: A Multi-Ethnic Cohort Study",
        authors: "N. Alba, A. Patel, L. Zhang, J. Martinez",
        journal: "Cell",
        year: "2023",
        citations: 234,
        doi: "10.1016/j.cell.2023.00.000",
        pmid: "37234567"
      },
      {
        title: "Integrative Multi-Omics Analysis for Patient Stratification",
        authors: "N. Alba, D. Kim, R. Williams",
        journal: "Nature Medicine",
        year: "2024",
        citations: 167,
        doi: "10.1038/s41591-024-00000-0",
        pmid: "38345678"
      },
      {
        title: "Clinical Decision Support System for Genomic Medicine",
        authors: "N. Alba, T. Brown, K. Anderson",
        journal: "JAMA Oncology",
        year: "2024",
        citations: 145,
        doi: "10.1001/jamaoncol.2024.0000",
        pmid: "38456789"
      },
      {
        title: "Pharmacogenomic Predictors of Treatment Response",
        authors: "N. Alba, M. Anderson, K. Thompson",
        journal: "Journal of Clinical Oncology",
        year: "2023",
        citations: 143,
        doi: "10.1200/JCO.23.00000",
        pmid: "37456789"
      }
    ]
  },
  {
    title: "Biomarker Discovery Initiative",
    description: "Utilizing computational methods to discover and validate novel biomarkers for early disease detection.",
    detailedDescription: "The Biomarker Discovery Initiative is a systematic effort to identify and validate novel molecular biomarkers for early disease detection and monitoring. Using advanced bioinformatics approaches and machine learning algorithms, we analyze large-scale multi-omics datasets to discover biomarker signatures that can predict disease risk, track progression, and monitor treatment response. Our work focuses on liquid biopsy technologies, circulating tumor DNA, and protein biomarkers that can be translated into clinical diagnostic tests. This initiative collaborates closely with Jefferson's clinical departments to ensure rapid translation of discoveries into patient care.",
    status: "Planning",
    tags: ["Biomarkers", "Early Detection", "Computational Biology"],
    publications: [
      {
        title: "Liquid Biopsy Biomarkers for Early Cancer Detection",
        authors: "N. Alba, L. Brown, S. Patel",
        journal: "Clinical Cancer Research",
        year: "2023",
        citations: 198,
        doi: "10.1158/1078-0432.CCR-22-0000",
        pmid: "35567890"
      },
      {
        title: "Machine Learning for Biomarker Discovery in Multi-Omics Data",
        authors: "N. Alba, R. Martinez, J. Davis",
        journal: "Nature Biotechnology",
        year: "2024",
        citations: 176,
        doi: "10.1038/s41587-024-00002-0",
        pmid: "38567890"
      },
      {
        title: "Circulating Tumor DNA Analysis for Disease Monitoring",
        authors: "N. Alba, K. Liu, A. Thompson",
        journal: "Science Translational Medicine",
        year: "2023",
        citations: 134,
        doi: "10.1126/scitranslmed.abc0000",
        pmid: "37678901"
      }
    ]
  }
];

// ============================================================
// RESEARCH SECTION DATA - Research
// ============================================================

export const researchSectionData = {
  title: "Publications",
  description: "Our research spans multiple areas at the intersection of computational biology, machine learning, and precision medicine. Below are our four major contributions to scientific knowledge and their associated publications."
};

export const contributions: ContributionToScience[] = [
  {
    id: "contribution-1",
    title: "Machine Learning for Drug Discovery and Target Prediction",
    description: "Pioneering the application of deep learning and artificial intelligence to accelerate drug discovery pipelines. Our work focuses on developing novel computational methods to predict drug-target interactions, identify potential therapeutic compounds, and optimize lead molecules.",
    keyAchievements: [
      "Developed state-of-the-art neural network architectures for drug-target binding prediction",
      "Created open-source tools adopted by pharmaceutical companies worldwide",
      "Reduced computational time for virtual screening by 80%",
      "Identified 15+ novel drug candidates currently in pre-clinical validation"
    ],
    publications: [
      {
        title: "Deep Learning Approaches for Drug-Target Interaction Prediction",
        authors: "N. Alba, M. Rodriguez, K. Liu, D. Thompson",
        journal: "Nature Biotechnology",
        year: "2024",
        citations: 127,
        doi: "10.1038/s41587-024-00000-0",
        pmid: "38123456"
      },
      {
        title: "Machine Learning Models for Predicting Drug Resistance in Tuberculosis",
        authors: "N. Alba, J. Davis, M. Thompson, L. Anderson",
        journal: "The Lancet Digital Health",
        year: "2022",
        citations: 201,
        doi: "10.1016/S2589-7500(22)00000-0",
        pmid: "34567890"
      },
      {
        title: "Graph Neural Networks for Molecular Property Prediction",
        authors: "N. Alba, R. Martinez, A. Thompson",
        journal: "Nature Machine Intelligence",
        year: "2023",
        citations: 89,
        doi: "10.1038/s42256-023-00000-0",
        pmid: "37123456"
      },
      {
        title: "Transfer Learning Strategies in Drug Discovery: A Comprehensive Review",
        authors: "N. Alba, K. Brown, L. Zhang",
        journal: "Chemical Reviews",
        year: "2023",
        citations: 156,
        doi: "10.1021/acs.chemrev.3b00000",
        pmid: "36789012"
      },
      {
        title: "Multi-Task Learning for ADMET Property Prediction",
        authors: "N. Alba, J. Liu, P. Anderson",
        journal: "Journal of Chemical Information and Modeling",
        year: "2022",
        citations: 72,
        doi: "10.1021/acs.jcim.2c00000",
        pmid: "35234567"
      }
    ]
  },
  {
    id: "contribution-2",
    title: "Genomic Biomarkers for Precision Medicine",
    description: "Advancing personalized healthcare through the identification and validation of genomic biomarkers. Our research integrates multi-omics data to develop predictive models for disease risk, treatment response, and patient stratification.",
    keyAchievements: [
      "Identified novel biomarker signatures for 8+ cancer types",
      "Developed clinical decision support tools implemented in 12 hospitals",
      "Published multi-ethnic cohort studies improving healthcare equity",
      "Contributed to FDA-approved companion diagnostic tests"
    ],
    publications: [
      {
        title: "Genomic Biomarkers for Precision Medicine: A Multi-Ethnic Cohort Study",
        authors: "N. Alba, A. Patel, L. Zhang, J. Martinez",
        journal: "Cell",
        year: "2023",
        citations: 234,
        doi: "10.1016/j.cell.2023.00.000",
        pmid: "37234567"
      },
      {
        title: "Integrative Multi-Omics Analysis for Cancer Patient Stratification",
        authors: "N. Alba, D. Kim, R. Williams",
        journal: "Nature Medicine",
        year: "2024",
        citations: 167,
        doi: "10.1038/s41591-024-00000-0",
        pmid: "38345678"
      },
      {
        title: "Pharmacogenomic Predictors of Treatment Response in Breast Cancer",
        authors: "N. Alba, M. Anderson, K. Thompson",
        journal: "Journal of Clinical Oncology",
        year: "2023",
        citations: 143,
        doi: "10.1200/JCO.23.00000",
        pmid: "37456789"
      },
      {
        title: "Liquid Biopsy Biomarkers for Early Cancer Detection",
        authors: "N. Alba, L. Brown, S. Patel",
        journal: "Clinical Cancer Research",
        year: "2022",
        citations: 198,
        doi: "10.1158/1078-0432.CCR-22-0000",
        pmid: "35567890"
      }
    ]
  },
  {
    id: "contribution-3",
    title: "Computational Methods for Single-Cell and Spatial Genomics",
    description: "Developing innovative computational frameworks to analyze single-cell and spatial transcriptomics data. Our methods enable researchers to understand cellular heterogeneity, identify rare cell populations, and map spatial organization of tissues at unprecedented resolution.",
    keyAchievements: [
      "Created widely-used bioinformatics pipelines with 10,000+ downloads",
      "Discovered novel cell states in immune system and cancer microenvironment",
      "Developed spatial deconvolution algorithms improving resolution by 3x",
      "Contributed to major consortia including Human Cell Atlas"
    ],
    publications: [
      {
        title: "Computational Framework for Single-Cell RNA Sequencing Data Integration",
        authors: "N. Alba, T. Brown, H. Kim",
        journal: "Bioinformatics",
        year: "2023",
        citations: 289,
        doi: "10.1093/bioinformatics/btab000",
        pmid: "36345678"
      },
      {
        title: "Spatial Transcriptomics Analysis Reveals Tumor Microenvironment Architecture",
        authors: "N. Alba, R. Martinez, L. Anderson",
        journal: "Nature Biotechnology",
        year: "2024",
        citations: 176,
        doi: "10.1038/s41587-024-00001-0",
        pmid: "38234567"
      },
      {
        title: "Deep Learning for Cell Type Annotation in Single-Cell Data",
        authors: "N. Alba, K. Liu, J. Davis",
        journal: "Nature Methods",
        year: "2023",
        citations: 221,
        doi: "10.1038/s41592-023-00000-0",
        pmid: "37567890"
      },
      {
        title: "Batch Effect Correction in Multi-Sample Single-Cell Studies",
        authors: "N. Alba, A. Thompson, M. Rodriguez",
        journal: "Genome Biology",
        year: "2022",
        citations: 134,
        doi: "10.1186/s13059-022-00000-0",
        pmid: "35678901"
      }
    ]
  },
  {
    id: "contribution-4",
    title: "Network-Based Approaches to Systems Biology and Cancer Research",
    description: "Applying network science and systems biology approaches to understand complex biological systems and disease mechanisms. Our research focuses on constructing and analyzing biological networks to identify key drivers of cancer progression and potential therapeutic targets.",
    keyAchievements: [
      "Mapped comprehensive protein-protein interaction networks for cancer pathways",
      "Identified master regulators and therapeutic targets in multiple cancer types",
      "Developed network-based drug repurposing strategies",
      "Collaborated with pharmaceutical companies on target validation studies"
    ],
    publications: [
      {
        title: "Network-Based Analysis of Cancer Metabolic Pathways",
        authors: "N. Alba, R. Williams, S. Patel",
        journal: "Cancer Research",
        year: "2022",
        citations: 267,
        doi: "10.1158/0008-5472.CAN-22-0000",
        pmid: "35456789"
      },
      {
        title: "Systems Biology Approach to Identify Cancer Dependencies",
        authors: "N. Alba, D. Kim, L. Zhang",
        journal: "Cell Systems",
        year: "2023",
        citations: 189,
        doi: "10.1016/j.cels.2023.00.000",
        pmid: "37678901"
      },
      {
        title: "Network Medicine Framework for Drug Repurposing",
        authors: "N. Alba, M. Thompson, K. Brown",
        journal: "Nature Communications",
        year: "2024",
        citations: 145,
        doi: "10.1038/s41467-024-00000-0",
        pmid: "38456789"
      },
      {
        title: "Multi-Layer Network Analysis of Cancer Signaling Pathways",
        authors: "N. Alba, J. Martinez, A. Patel",
        journal: "Molecular Systems Biology",
        year: "2023",
        citations: 112,
        doi: "10.15252/msb.2023000000",
        pmid: "37789012"
      },
      {
        title: "Integrative Network Analysis Reveals Synthetic Lethality Interactions",
        authors: "N. Alba, L. Anderson, R. Davis",
        journal: "Science Advances",
        year: "2022",
        citations: 98,
        doi: "10.1126/sciadv.abc0000",
        pmid: "35890123"
      }
    ]
  }
];

export const otherPublications: Publication[] = [
  {
    title: "Artificial Intelligence in Clinical Diagnostics: Opportunities and Challenges",
    authors: "N. Alba, L. Thompson, M. Williams",
    journal: "JAMA",
    year: "2024",
    citations: 312,
    doi: "10.1001/jama.2024.0000",
    pmid: "38567890"
  },
  {
    title: "Ethical Considerations in AI-Driven Healthcare",
    authors: "N. Alba, R. Patel, K. Anderson",
    journal: "New England Journal of Medicine",
    year: "2023",
    citations: 278,
    doi: "10.1056/NEJMp2300000",
    pmid: "37890123"
  },
  {
    title: "Big Data Analytics in Biomedical Research: A Survey",
    authors: "N. Alba, D. Martinez, J. Brown",
    journal: "Nature Reviews Genetics",
    year: "2023",
    citations: 189,
    doi: "10.1038/s41576-023-00000-0",
    pmid: "37234567"
  },
  {
    title: "Reproducibility and Transparency in Computational Biology",
    authors: "N. Alba, A. Kim, S. Davis",
    journal: "Nature Biotechnology",
    year: "2022",
    citations: 167,
    doi: "10.1038/s41587-022-00000-0",
    pmid: "35678901"
  },
  {
    title: "Cloud Computing Infrastructure for Genomics Research",
    authors: "N. Alba, T. Johnson, L. Lee",
    journal: "Genome Research",
    year: "2022",
    citations: 134,
    doi: "10.1101/gr.276000.121",
    pmid: "35123456"
  },
  {
    title: "Data Visualization Techniques for Multi-Omics Integration",
    authors: "N. Alba, M. Anderson, P. Wilson",
    journal: "Bioinformatics",
    year: "2021",
    citations: 156,
    doi: "10.1093/bioinformatics/btab000",
    pmid: "34567890"
  },
  {
    title: "Open Science Practices in Computational Biology Research",
    authors: "N. Alba, K. Thompson, R. Garcia",
    journal: "PLOS Computational Biology",
    year: "2021",
    citations: 145,
    doi: "10.1371/journal.pcbi.1009000",
    pmid: "34234567"
  },
  {
    title: "Statistical Methods for High-Dimensional Data Analysis",
    authors: "N. Alba, J. Liu, D. Brown",
    journal: "Biostatistics",
    year: "2021",
    citations: 121,
    doi: "10.1093/biostatistics/kxab000",
    pmid: "33890123"
  }
];

// ============================================================
// CONTACT SECTION DATA
// ============================================================

export const contactInfo: ContactInfo = {
  email: "nicole.alba@ucsf.edu",
  phone: "(415) 555-0123",
  officeLocation: {
    campus: "UCSF Mission Bay Campus",
    address: "1700 4th Street, Suite 203",
    city: "San Francisco, CA 94158"
  },
  officeHours: "Tuesdays & Thursdays, 2:00 PM - 4:00 PM\nOr by appointment"
};

export const contactSectionData = {
  title: "Contact & Collaboration",
  description: "Interested in collaboration, speaking opportunities, or discussing research? I'd love to hear from you.",
  cardDescription: "Multiple ways to connect for research collaboration and academic inquiries"
};

// ============================================================
// FOOTER DATA
// ============================================================

export const footerData = {
  copyright: "© 2025 Nicole Alba, PhD. All rights reserved.",
  links: [
    { text: "Academic CV", href: "#" },
    { text: "Linkedin", href: "#" },
    { text: "Google Scholar", href: "#" }
  ]
};
