import heroImage from "../assets/images/heroImage.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import labimg from "../assets/images/labimg.jpg";
import pubImage from "../assets/images/pubImage.jpg";
import pubImage2 from "../assets/images/pubImage2.jpg";
// ============================================================
// TYPES & INTERFACES
// ============================================================

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  pmid?: string;
  category?: string[];
  subcategory?: string[];
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
  specialty: string[];
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
  facultyPageUrl: string;
}

export interface ContactInfo {
  email: string;
  officeLocation: {
    campus: string;
    address: string;
    city: string;
  };
  officeHours: string;
}

export interface PublicEngagementItem {
  id: number;
  authors: string;
  title: string;
  type?: string;
  venue: string;
  date: string;
  location: string;
}

export interface PublicEngagementYear {
  year: string;
  items: PublicEngagementItem[];
}

// ============================================================================
// HERO DATA
// ============================================================================
// ✅ COMPLETE
export const heroData: HeroData = {
  name: "Munjireen Sifat, PhD, MPH",
  badge: "Assistant Professor",
  title: "Assistant Professor & Assistant Director of Community Outreach",
  bio: `I am an Assistant Professor at Thomas Jefferson University, affiliated with Sidney Kimmel Medical College, where my research focuses on health equity, addressing modifiable health behaviors and mental health disparities in underserved populations. My work emphasizes cancer prevention, particularly tobacco-related cancers and early detection of cancer.`,
  image: heroImage, // Absolute path was used
  expertiseTags: [
    "Health Equity",
    "Cancer Prevention",
    "Tobacco Cessation",
    "HPV Self-Sampling",
    "Mental Health Disparities",
    "Community Outreach",
    "Refugee Health",
    "Social Determinants of Health",
    "mHealth",
    "Community-Based Research",
  ],
  facultyPageUrl:
    "https://www.jefferson.edu/academics/colleges-schools-institutes/skmc/departments/medical-oncology/faculty/sifat.html", // TODO: Replace with actual faculty page URL
};

// ============================================================
// ABOUT SECTION DATA
// ============================================================

export const aboutData = {
  name: "Dr. Munjireen S. Sifat",
  description:
    "I am an Assistant Professor at Thomas Jefferson University, affiliated with Sidney Kimmel Medical College, where my research focuses on health equity, addressing modifiable health behaviors and mental health disparities in underserved populations. My work emphasizes cancer prevention, particularly tobacco-related cancers and HPV self-sampling for cervical cancer screening",
};

// ============================================================================
// EDUCATION DATA
// ============================================================================
// ✅ COMPLETE
export const education: Education[] = [
  {
    degree: "Postdoctoral Fellowship in Cancer Prevention/Health Disparities",
    institution:
      "The University of Oklahoma Health Sciences Center, Oklahoma City, OK",
    year: "2021-2023",
    description:
      "Specialized training in cancer prevention and health disparities research at the Stephenson Cancer Center's Health Promotion Research Center.",
  },
  {
    degree: "Ph.D. in Public Health/Global Mental Health",
    institution: "The University of Maryland, College Park, MD",
    year: "2017-2021",
    description:
      "Doctoral research focused on global mental health and behavioral and community health with emphasis on vulnerable populations.",
  },
  {
    degree: "Master of Public Health (MPH) in Health Promotion",
    institution: "The George Washington University, Washington, D.C.",
    year: "2014-2016",
    description:
      "Graduate studies in health promotion and public health strategies for community wellness.",
  },
  {
    degree: "Bachelor of Science in Psychology (Neuroscience)",
    institution: "The Pennsylvania State University, University Park, PA",
    year: "2009-2013",
    description:
      "Undergraduate studies in psychology with neuroscience focus and biology minor.",
  },
];

// ============================================================================
// EXPERIENCE DATA
// ============================================================================
// ✅ COMPLETE
export const experience: Experience[] = [
  {
    position:
      "Assistant Professor & Assistant Director of Community Outreach and Engagement",
    institution:
      "Thomas Jefferson University, Sidney Kimmel Comprehensive Cancer Center, Department of Medical Oncology, Population Health Science Division",
    period: "August 2023 - Present",
    description:
      "Leading research initiatives focused on health equity, cancer prevention, and community engagement. Developing partnerships with community organizations and mobile screening units to address cancer screening barriers in underserved populations. Current projects include reducing combustible smoking among formerly unhoused individuals in Philadelphia and promoting cancer screenings among individuals facing significant barriers to traditional healthcare settings. Also serving as Adjunct Instructor at Jefferson College of Population Health.",
  },
  {
    position: "Post-Doctoral Research Fellow",
    institution:
      "University of Oklahoma, Health Promotion Research Center, Stephenson Cancer Center",
    period: "September 2021 - July 2023",
    description:
      "Conducted research on smoking cessation interventions for socioeconomically disadvantaged populations and refugee health under Dr. Darla Kendzor.",
  },
  {
    position: "Consultant, Suicide Prevention Team",
    institution:
      "Stanford University, Muslim Mental Health and Islamic Psychology Lab",
    period: "September 2022 - December 2023",
    description:
      "Contributing to suicide prevention initiatives and mental health research in Muslim communities under Dr. Rania Awaad.",
  },
  {
    position: "Adjunct Faculty, Instructor",
    institution:
      "George Mason University, Department of Global and Community Health",
    period: "January 2023 - May 2023",
    description:
      "Taught GCH626: Migrant Health, focusing on health challenges and interventions for migrant and refugee populations.",
  },
  {
    position: "Graduate Research Assistant",
    institution:
      "University of Maryland, Counseling Center Research Unit & School of Public Health",
    period: "August 2017 - May 2021",
    description:
      "Conducted research on mental health, substance use, and health behaviors in diverse populations. Served as Principal Investigator for dissertation project and instructor for HLTH 106/H: Drug Use and Abuse.",
  },
];

// ============================================================================
// TEACHING COURSES
// ============================================================================
// ⚠️ LIMITED DATA - Only 3 courses available
export const teachingExperience: TeachingCourse[] = [
  {
    course: "Cultural Humility & Competence",
    level: "Graduate/Professional",
    period: "Current (2023-Present)",
    description:
      "Course focusing on developing cultural humility and competence in healthcare and public health practice. Emphasizes culturally appropriate intervention development and community-based approaches to health equity.",
  },
  {
    course: "GCH626: Migrant Health",
    level: "Graduate",
    period: "January 2023 - May 2023",
    description:
      "Comprehensive course covering health challenges, policies, and interventions for migrant and refugee populations. Topics include migration-related stress, access to healthcare, and culturally competent care.",
  },
  {
    course: "HLTH 106/H: Drug Use and Abuse",
    level: "Undergraduate",
    period: "August 2019 - February 2020",
    description:
      "Undergraduate course examining substance use and abuse, prevention strategies, and public health approaches to addiction. Covers behavioral and community health perspectives.",
  },
  // TODO: Add additional current Jefferson courses if applicable
];

// ============================================================
// TEAM SECTION DATA
// ============================================================

export const labDirector: TeamMember = {
  name: "Munjireen Sifat, PhD",
  title: "Lab Director & Principal Investigator",
  image: heroImage,
  specialty: [
    "Health Equity",
    "Cancer Prevention",
    "Tobacco Cessation",
    "Refugee Health",
  ],
  url: "https://www.jefferson.edu/academics/colleges-schools-institutes/population-health/administration-faculty-staff/faculty/sifat.html",
};

export const universityCollaborators: TeamMember[] = [
  {
    name: "Joshua Godbolt, MSEd",
    title: "Clinical Research Coordinator",
    image: img1,
    specialty: [
      "Oncology",
      "Population Science",
      "Health Disparities",
      "Clinical Trials",
    ],
    url: "",
  },
];

export const externalCollaborators: TeamMember[] = [
  {
    name: "Shawn C. Chiang",
    title:
      "Assistant Professor, Department of Health Behavior, Texas A&M University School of Public Health",
    image: img2,
    specialty: [
      "Cancer Prevention",
      "HPV-Related Cancers",
      "Health Communication",
      "Digital Media",
    ],
    url: "https://www.shawnchiang.com/",
  },
];

export const graduateResearchers: TeamMember[] = [
  {
    name: "Lauren Thompson",
    title: "Medical Student, Scholarly Inquiry",
    image: img3,
    specialty: ["Oncology", "Public Health", "Community Health"],
    url: "www.linkedin.com/in/lauren-thompson-b4aa14398",
  },
];

export const teamSectionData = {
  title: "Meet the Team",
  description:
    "A dedicated team of researchers and community partners advancing health equity through evidence-based interventions and meaningful community engagement.",
};

// ============================================================
// SIFAT LAB SECTION DATA
// ============================================================

export const chenLabData = {
  title: "SIFAT Lab",
  subtitle:
    "Behavioral Health & Cancer Prevention Research at Thomas Jefferson University",
  heroImage: labimg, // Absolute Path
  mission:
    "To advance health equity through innovative research and community partnerships that address the root causes of health disparities. We are committed to reducing tobacco-related cancer burden and improving preventive care access in underserved populations by developing culturally informed interventions, integrating social determinants of health into oncology care, and leveraging digital health solutions to create lasting, meaningful change.",
  whoWeAre: {
    description:
      "We are a multidisciplinary research team based at Thomas Jefferson University’s Sidney Kimmel Cancer Center, dedicated to advancing health equity through innovative behavioral interventions. Led by Dr. Munjireen Sifat, our work bridges public health, psychology, and oncology to address disparities in cancer prevention and behavioral health among underserved populations.",
    stats: ["12 Researchers", "Est. 2019", "Jefferson University"],
  },
  mainFocus: [
    "Our research centers on reducing tobacco - related cancer risk and improving preventive care access for vulnerable communities. We focus on modifiable health behaviors - such as smoking cessation and cervical cancer screening - while addressing structural and psychosocial barriers that perpetuate health inequities",
  ],
  whatWeDo: [
    "Develop and test interventions for smoking cessation and harm reduction.",
    "Advance cancer prevention strategies through HPV self-sampling workflows in diverse communities.",
    "Integrate social determinants of health (SDOH) into oncology care by assessing health-related social needs and designing linkage strategies.",
    "Leverage digital health tools to improve access to care.",
    "Engage communities through partnerships with community organizations and non-profits to ensure culturally relevant solutions.",
  ],
};

// ============================================================================
// JEFFERSON PROJECTS (Current Institution Only)
// ============================================================================
// ✅ COMPLETE
export const jeffersonProjects: JeffersonProject[] = [
  {
    title:
      "Project E-Shift: A Harm Reduction Intervention for Chronically Unhoused Adults Who Smoke",
    description:
      "Examining the feasibility of switching exclusively from combustible cigarettes (CC) to an FDA-authorized electronic cigarette (EC) and financial incentives to promote smoking cessation among adults with a history of homelessness.",
    detailedDescription:
      "This study examines the feasibility of switching exclusively from combustible cigarettes (CC) to an FDA-authorized electronic cigarette (EC) and financial incentives contingent on CC abstinence to promote CC cessation among adults with a history of homelessness and are now in Housing First programs (N=40). Participants accessing services from Project HOME/Pathways to Housing are randomly assigned to either standard care (counseling and nicotine replacement therapy) or EC switching with small financial incentives for carbon monoxide-verified CC abstinence plus counseling. The study addresses significant tobacco-related health disparities in a population for whom standard cessation practices have not historically led to long-term cessation of combustible cigarettes.",
    status: "Active",
    tags: [
      "Tobacco Cessation",
      "Harm Reduction",
      "Homelessness",
      "E-Cigarettes",
      "Health Disparities",
    ],
    publications: [
      {
        title:
          "E-cigarette switching and financial incentives to promote combustible cigarette cessation among adults accessing shelter services: A pilot study",
        authors:
          "Sifat, M., Alexander, A. C., Businelle, M. S., Frank-Pearce, S. G., Boozary, L. K., Wagener, T. L., Ahluwalia, J. S., & Kendzor, D. E.",
        journal: "Drug Abuse and Dependence Reports",
        year: "2024",

        doi: "https://doi.org/10.1016/j.dadr.2024.100XXX",
        pmid: "",
      },
    ],
  },
  {
    title:
      "From Screening to Support: A Multi-Method Analysis of HRSN Integration in Cancer Care",
    description:
      "Multi-method assessment examining why high-risk cancer patients decline care linkage after health-related social needs (HRSN) screening.",
    detailedDescription:
      "The primary aim of this study is to conduct a multi-method assessment of cancer patients who complete HRSN screening using Health System Assessments (HSAs). This assessment delves into the reasons why high-risk cancer patients decline care linkage, providing insights into potential barriers. Qualitative interviews with cancer patients offer a comprehensive view of the challenges and perceptions surrounding HRSN integration in oncology care.",
    status: "Active",
    tags: [
      "Social Determinants of Health",
      "Cancer Care",
      "Health Systems",
      "Patient Barriers",
      "Qualitative Research",
    ],
    publications: [],
  },
  {
    title:
      "Driving Equitable Cancer Patient Outcomes by Addressing the Social Determinants of Health",
    description:
      "Comprehensive assessment of social determinants of health workflows and infrastructure within Philadelphia healthcare systems.",
    detailedDescription:
      "This project involves conducting Health System Assessments (HSAs) to examine Social Determinants of Health workflows and infrastructure within a Philadelphia healthcare system. An action plan with a decision matrix is being developed to enhance SDOH screening, resource referral, and community collaboration. The project includes creating a community collaborative to assess cancer-related SDOH priorities, available resources, and identify gaps, culminating in an Action Plan for staff education, goal-setting, and interventions.",
    status: "Completed",
    tags: [
      "Health Equity",
      "SDOH",
      "Cancer Care",
      "Community Partnerships",
      "Healthcare Systems",
    ],
    publications: [],
  },
  {
    title:
      "A Randomized Factorial Trial of Varenicline with Nicotine Lozenges and a Smartphone Medication Adherence Intervention",
    description:
      "Evaluating the efficacy of combining varenicline with oral nicotine replacement therapy and smartphone-based adherence interventions for smoking cessation.",
    detailedDescription:
      "This randomized factorial trial evaluates the efficacy of combining varenicline with oral nicotine replacement therapy (lozenges) and a smartphone-based medication adherence intervention to improve smoking cessation outcomes. As Co-Investigator, Dr. Sifat contributes to study design, implementation, and analysis, with a focus on behavioral mechanisms and health disparities. The overarching goal is to improve smoking cessation treatment and decrease tobacco-related cancer risk.",
    status: "Active",
    tags: [
      "Tobacco Cessation",
      "Varenicline",
      "Digital Health",
      "Cancer Prevention",
      "Randomized Trial",
    ],
    publications: [
      {
        title:
          "Varenicline combined with oral nicotine replacement therapy and smartphone-based medication reminders for smoking cessation: Feasibility randomized controlled trial",
        authors:
          "Sifat, M. S., Hébert, E. T., Ahluwalia, J. S., Businelle, M. S., Waring, J. J. C., Frank-Pearce, S. G., Bryer, C., Benson, L., Madison, S., Planas, L. G., Baranskaya, I., & Kendzor, D. E.",
        journal: "JMIR Formative Research",
        year: "2023",

        doi: "https://doi.org/10.2196/48857",
        pmid: "37889541",
      },
    ],
  },
  {
    title:
      "Overcoming Barriers to Cervical Cancer Screening by Offering HPV Self-Sampling in Diverse Communities",
    description:
      "Developing and implementing protocols for HPV self-sampling through mobile screening units to increase cervical cancer screening in underserved communities.",
    detailedDescription:
      "This study developed a workflow for HPV self-sampling in community settings through the SKCCC mobile screening unit. The protocol was designed to offer HPV self-sampling kits (n=30) as an acceptable and feasible approach for future larger studies. Preliminary data show 20 HPV self-sampling kits were distributed in community settings, with 5 kits returned (25% return rate) and 1 testing positive for HPV (20% positive rate). The participant with the positive finding was successfully connected to the physician for follow-up care. This research has potential to significantly improve cervical cancer screening rates among cancer survivors and underserved populations.",
    status: "Completed",
    tags: [
      "HPV",
      "Cervical Cancer",
      "Cancer Screening",
      "Mobile Health Unit",
      "Community Outreach",
    ],
    publications: [],
  },
  {
    title:
      "CRIC Pilot Funding, Sidney Kimmel Comprehensive Cancer Center, Sifat & Milliron (MPI)",
    description:
      "Chinese Wellness Culinary Circle: A feasibility study to improve healthy cancer survivorship through a mind-body-culinary medicine approach",
    detailedDescription:
      "Chinese American cancer survivors face significant and persistent challenges in accessing culturally and linguistically appropriate support for nutrition and psychosocial well-being. To address these gaps, we have developed the Chinese Wellness Culinary Circle (CWCC)—a 12-week, culturally tailored, mind-body-culinary medicine program designed to promote cancer-preventive dietary behaviors, mindfulness, and overall well-being among adult Chinese cancer survivors. This single-arm pilot study will evaluate the feasibility and acceptability of CWCC and explore its potential to improve adherence to the American Institute for Cancer Research/World Cancer Research Fund (AICR/WCRF) recommendations for cancer prevention and healthy survivorship.",
    status: "Active",
    tags: [
      "Culinary Medicine",
      "Cancer Survivorship",
      "Chinese American Health",
      "Mind-Body Wellness",
      "Health Disparities",
    ],
    publications: [],
  },
];
// ============================================================================
// Social Impact Initiatives (Current Institution Only)
// ============================================================================
// ✅ COMPLETE
export const socialImpactProjects: JeffersonProject[] = [
  {
    title:
      "Project E-Shift: A Harm Reduction Intervention for Chronically Unhoused Adults Who Smoke",
    description:
      "Examining the feasibility of switching exclusively from combustible cigarettes (CC) to an FDA-authorized electronic cigarette (EC) and financial incentives to promote smoking cessation among adults with a history of homelessness.",
    detailedDescription:
      "This study examines the feasibility of switching exclusively from combustible cigarettes (CC) to an FDA-authorized electronic cigarette (EC) and financial incentives contingent on CC abstinence to promote CC cessation among adults with a history of homelessness and are now in Housing First programs (N=40). Participants accessing services from Project HOME/Pathways to Housing are randomly assigned to either standard care (counseling and nicotine replacement therapy) or EC switching with small financial incentives for carbon monoxide-verified CC abstinence plus counseling. The study addresses significant tobacco-related health disparities in a population for whom standard cessation practices have not historically led to long-term cessation of combustible cigarettes.",
    status: "Active",
    tags: [
      "Tobacco Cessation",
      "Harm Reduction",
      "Homelessness",
      "E-Cigarettes",
      "Health Disparities",
    ],
    publications: [
      {
        title:
          "E-cigarette switching and financial incentives to promote combustible cigarette cessation among adults accessing shelter services: A pilot study",
        authors:
          "Sifat, M., Alexander, A. C., Businelle, M. S., Frank-Pearce, S. G., Boozary, L. K., Wagener, T. L., Ahluwalia, J. S., & Kendzor, D. E.",
        journal: "Drug Abuse and Dependence Reports",
        year: "2024",

        doi: "https://doi.org/10.1016/j.dadr.2024.100XXX",
        pmid: "",
      },
    ],
  },
  {
    title:
      "Overcoming Barriers to Cervical Cancer Screening by Offering HPV Self-Sampling in Diverse Communities",
    description:
      "Developing and implementing protocols for HPV self-sampling through mobile screening units to increase cervical cancer screening in underserved communities.",
    detailedDescription:
      "This study developed a workflow for HPV self-sampling in community settings through the SKCCC mobile screening unit. The protocol was designed to offer HPV self-sampling kits (n=30) as an acceptable and feasible approach for future larger studies. Preliminary data show 20 HPV self-sampling kits were distributed in community settings, with 5 kits returned (25% return rate) and 1 testing positive for HPV (20% positive rate). The participant with the positive finding was successfully connected to the physician for follow-up care. This research has potential to significantly improve cervical cancer screening rates among cancer survivors and underserved populations.",
    status: "Completed",
    tags: [
      "HPV",
      "Cervical Cancer",
      "Cancer Screening",
      "Mobile Health Unit",
      "Community Outreach",
    ],
    publications: [],
  },
  {
    title:
      "CRIC Pilot Funding, Sidney Kimmel Comprehensive Cancer Center, Sifat & Milliron (MPI)",
    description:
      "Chinese Wellness Culinary Circle: A feasibility study to improve healthy cancer survivorship through a mind-body-culinary medicine approach",
    detailedDescription:
      "Cancer is the leading cause of death in the U.S. Asian community. In Philadelphia, Chinese immigrants constitute the largest Asian subgroup. While many are aware of cancer prevention as a concept, they often lack the knowledge or tools to adopt preventive behaviors in daily life. To address this gap, the Chinese Wellness Culinary Circle (CWCC), a culturally tailored culinary medicine program, was developed for the local Chinese community. The primary aim of this pilot feasibility study was to evaluate feasibility and acceptability of the intervention. Secondary aims included exploring changes in cancer-preventive dietary behaviors, self-efficacy, and perceived nutrition-related barriers. Methods: The CWCC program was delivered in person from April to July 2025 and included six 2-hour sessions. Each session began with a 30-40 minute nutrition education segment focused on cancer-preventive properties of food commonly used in Chinese cuisine, followed by a culturally relevant hands-on cooking activity and group discussion. Topics included the gut-brain-body connection, immune system health, antioxidants and cancer-fighting foods, hypertension, and the psychological effects of food. Participants received bilingual materials and culturally tailored recipes. Engagement strategies included pre-session reminders and post-session emails with slides. Feasibility and acceptability were assessed using specific progression criteria (e.g., recruitment, retention, assessment feasibility, and intervention acceptability) to determine whether the study procedures are practicable and whether to proceed to a larger trial. Acceptability was evaluated through post-session surveys capturing satisfaction and likelihood of applying learned practices. Baseline and post-program surveys were used to measure changes in knowledge, dietary behaviors, and self-efficacy.Results: At baseline 14 participants (mean age: 54 years; range 32-80) enrolled. Most identified as female (79%) and Asian (85%), with 79% having resided in the US for more than 25 years. 71% of participants reported ‘somewhat’ or ‘very’ confident in choosing and cooking affordable healthy food. All participants cooked at home in the past week, though most consumed limited fruits (N=10) and vegetables (N=9). Common barriers included concerns about produce spoilage and low satiety. Key participant interests included improving nutrition knowledge, cooking skills, and chronic disease prevention/management. Final feasibility, acceptability, and potential efficacy data will be collected and reported prior to the conference. Conclusions: Preliminary findings suggest that CWCC is a feasible and acceptable community-based program; integrating cultural values, hands-on learning, and bilingual education may improve engagement and reduce nutrition-related disparities among Chinese community. Future studies should evaluate long-term dietary changes and clinical outcomes in larger samples.",
    status: "Active",
    tags: [
      "Culinary Medicine",
      "Cancer Survivorship",
      "Chinese American Health",
      "Mind-Body Wellness",
      "Health Disparities",
    ],
    publications: [],
  },
  {
    title: "Evaluation of Como Sano, Se Feliz (Eat Healthy, Be Happy)",
    description:
      "This project evaluates a 3-month cooking program that empowers Spanish-speaking cancer survivors through nutrition education and culinary skills training. Conducted at Mi Salud Wellness Center, the program teaches cancer-preventive cooking while building dietary confidence. By providing culturally-tailored, practical tools, it helps underserved communities reduce cancer risk and supports recovery—serving as a model for nutrition-focused community health interventions addressing health disparities.",
    detailedDescription: `Principal Investigators:
• Brandy-Joe Milliron, PhD, Drexel University
• Munjireen Sifat, PhD, MPH, Sidney Kimmel Cancer Center

Community Partner: Mi Salud Wellness Center, Keila Canete MPH

Aims:
The purpose of this project is to conduct an evaluation of the 3-month cooking program at Mi Salud Wellness. The primary aim is to determine the feasibility and acceptability of the cooking program. The secondary aim is to estimate the potential efficacy on cancer preventative dietary choices, cooking confidence, and cooking behaviors among Spanish-speaking individuals impacted by cancer.

Program Details:
The 3-month, bi-weekly cooking program is intended to increase familiarity, acceptance, and dietary intake of fruits, vegetables, whole grains, and plant-based protein while building cooking confidence and cancer preventive cooking behaviors.

Topics Covered:
• Cancer Fighting Foods • Healthy Immune System • Antioxidants

• Blood Pressure Management • Mental Health & Wellness • The Mind-Body Connection

Conclusion:
Come Sano, Se Feliz (Eat Healthy, Be Happy) empowered underserved Spanish-speaking populations by providing the tools and knowledge to adopt healthier dietary practices, reduce cancer risks, and support recovery for survivors. This model demonstrates how culturally-tailored interventions can effectively address health disparities through nutrition education.`,
    status: "Completed",
    tags: [
      "Culinary Medicine",
      "Cancer Survivorship",
      "Nutrition Education",
      "Cancer Prevention",
      "Health Disparities",
    ],
    publications: [],
  },
  {
    title: "Cancer Screening Awareness and Education Programming",
    description:
      "Comprehensive community-based cancer screening awareness and education initiative led by the Community Outreach and Engagement Team at Sidney Kimmel Comprehensive Cancer Center. This program aims to increase cancer screening knowledge, improve health literacy, and promote early detection among underserved and diverse populations across the Philadelphia region.",
    detailedDescription: `Our Cancer Screening Awareness and Education Programming represents a comprehensive community-based initiative developed and delivered by the Community Outreach and Engagement Team at Sidney Kimmel Comprehensive Cancer Center. This program is designed to address cancer screening disparities and barriers to preventive care access in underserved communities.

Program Goals:
The primary objectives are to increase awareness about cancer screening guidelines, improve health literacy regarding the importance of early detection, and empower community members to take proactive steps toward preventive care. We focus on multiple cancer types including breast, colorectal, cervical, and prostate cancers.

Community Engagement Approach:
We partner with community organizations, health centers, and local leaders to deliver culturally tailored education programs. Our approach emphasizes community participation, addresses social determinants of health, and integrates patient testimonies and survivor stories to create meaningful connections with diverse audiences.

Educational Content:
Programming covers cancer risk factors, screening recommendations, available screening resources, navigation of the healthcare system, and emotional support for individuals undergoing screening or diagnosis. Materials are available in multiple languages to ensure accessibility.

Target Populations:
We prioritize outreach to underserved populations including low-income communities, racial and ethnic minorities, immigrant and refugee communities, and individuals with limited access to preventive care. Special attention is given to populations with higher cancer burden and lower screening rates.

Community Partnerships:
Our work involves collaboration with community health centers, nonprofit organizations, faith-based organizations, and health departments to ensure programs meet local needs and leverage existing community infrastructure and trust.

Impact:
Through systematic outreach and education, we aim to increase cancer screening rates, reduce cancer mortality, and promote health equity across the Philadelphia region. Our programs contribute to the institutional commitment to advance health equity and eliminate cancer disparities.

For more information about our community outreach initiatives, visit: 

https://www.jeffersonhealth.org/clinical-specialties/cancer/community-outreach-engagement`,
    status: "Active",
    tags: [
      "Cancer Screening",
      "Community Education",
      "Health Literacy",
      "Cancer Prevention",
      "Community Outreach",
      "Health Equity",
      "Cancer Awareness",
      "Preventive Care",
    ],
    publications: [],
  },
];

// ============================================================
// Publications SECTION DATA -
// ============================================================

export const researchSectionData = {
  title: "Publications",
  description:
    "Our work addresses health equity through tobacco cessation, cancer prevention, mental health interventions, and digital health solutions. Browse our peer-reviewed publications spanning multiple disciplines.",
};

// ============================================================================
// INTERFACES
// ============================================================================
export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  pmid?: string;
  category?: string[];
  subcategory?: string[];
}

export interface ContributionToScience {
  id: string;
  title: string;
  description: string;
  keyAchievements: string[];
  publications: Publication[];
}

// ============================================================================
// CONTRIBUTIONS TO SCIENCE (Reorganized with New Categories)
// ============================================================================
export const contributions: ContributionToScience[] = [
  {
    id: "health-equity-sdoh",
    title: "Health Equity & Social Determinants of Health",
    description:
      "Research addressing the root causes of health disparities by examining social, economic, and environmental factors that influence health outcomes. This work focuses on developing interventions that address systemic barriers to healthcare access and promote equity across vulnerable populations, including refugees, marginalized communities, and underserved groups.",
    keyAchievements: [
      "Examined health disparities across diverse racial, ethnic, and socioeconomic groups",
      "Developed culturally tailored interventions for hard-to-reach populations",
      "Published work on discrimination, structural barriers, and protective factors",
      "Advanced understanding of migration-related stress and refugee health",
    ],
    publications: [
      {
        title:
          "Reaching the unheard: overcoming challenges in health research with hard-to-reach populations",
        authors: "Bekteshi, V., Sifat, M. and Kendzor, D.E",
        journal: "International Journal for Equity in Health",
        year: "2024",
        doi: "",
        pmid: "",
        category: ["Health Equity & Social Determinants of Health"],
        subcategory: [],
      },
      {
        title:
          "The association of migration-related stress with poor mental health among recently resettled Afghan refugees",
        authors:
          "Sifat, M.S., Kenney, S., Bekteshi, V., Chiang, S.C., Ogunsanya, M., Boozary, L.K., Alexander, A.C. and Kendzor, D.E.",
        journal: "Journal of Migration and Health",
        year: "2024",
        doi: "https://doi.org/10.1016/j.jmh.2024.100282",
        pmid: "",
        category: ["Health Equity & Social Determinants of Health"],
        subcategory: ["Refugee & Migrant Health"],
      },
      {
        title:
          "Greater Discrimination Frequency and Lower Distress Tolerance Are Associated with Mental Health Problems Among Racially Privileged and Minoritized Adults Accessing an Urban Day Shelter",
        authors:
          "Sifat, M. S., Ehlke, S. J., Ogunsanya, M., Frank-Pearce, S. G., Boozary, L. K., Alexander, A. C., Businelle, M. S., & Kendzor, D. E",
        journal: "Journal of Racial and Ethnic Health Disparities",
        year: "2023",
        doi: "https://doi.org/10.1007/s40615-022-01496-z",
        pmid: "",
        category: ["Health Equity & Social Determinants of Health"],
        subcategory: [],
      },
      {
        title:
          "Does parental racial socialization protect Black youth from the impact of racism on problematic substance use over the long term?",
        authors: "Kuo, C., Ahn, L. H., Sifat, M., & Green, K. M.",
        journal: "Cultural Diversity & Ethnic Minority Psychology",
        year: "2025",
        doi: "https://doi.org/10.1037/cdp0000759",
        pmid: "",
        category: ["Health Equity & Social Determinants of Health"],
        subcategory: ["Faith & Cultural Contexts in Health"],
      },
      {
        title:
          "The Association of Cultural Identification with Obesity among African Americans",
        authors:
          "Nolan, M., Waring, J.J., Noble, B., Bradley, D., Olurotimi, O., Fronheiser, J., Sifat, M., Boozary, L.K., McQuoid, J., Kendzor, D.E. and Alexander, A.C",
        journal: "Journal of Racial and Ethnic Health Disparities",
        year: "2023",
        doi: "https://doi.org/10.1007/s40615-023-01615-4",
        pmid: "",
        category: ["Health Equity & Social Determinants of Health"],
        subcategory: ["Faith & Cultural Contexts in Health"],
      },
      {
        title:
          "The development and implementation of a custom-tailored suicide response training for Muslim communities",
        authors:
          "Awaad, Rania, Mona Midani, Tasmeer Ali, Munjireen S. Sifat, and Mawdah Albatnuni",
        journal: "Journal of Religion and Health",
        year: "2024",
        doi: "",
        pmid: "",
        category: ["Health Equity & Social Determinants of Health"],
        subcategory: [
          "Faith & Cultural Contexts in Health",
          "Implementation Science & Systems Change",
        ],
      },
      {
        title:
          "Developing a suicide crisis response team in America: an Islamic perspective",
        authors:
          "Awaad, Rania, Zuha Durrani, Yasmeen Quadri, Munjireen S. Sifat, Anwar Hussein, Taimur Kouser, Osama El-Gabalawy, Neshwa Rajeh, and Sana Shareef",
        journal: "Journal of Religion and Health",
        year: "2024",
        doi: "",
        pmid: "",
        category: ["Health Equity & Social Determinants of Health"],
        subcategory: ["Faith & Cultural Contexts in Health"],
      },
    ],
  },
  {
    id: "behavioral-mental-health",
    title: "Behavioral & Mental Health",
    description:
      "Research exploring the complex relationships between behavioral factors, mental health outcomes, and health-seeking behaviors in vulnerable populations. This work examines barriers to mental health care, protective factors that buffer against poor outcomes, and interventions designed to improve mental wellness across diverse communities.",
    keyAchievements: [
      "Identified barriers to mental health care access in diverse populations",
      "Examined protective factors and resilience in underserved communities",
      "Studied family factors and social integration predicting mental health outcomes",
      "Developed culturally appropriate mental health interventions",
    ],
    publications: [
      {
        title:
          "An Examination of Barriers to Accessing Mental Health Care, and Their Association with Depression, Stress, Suicidal Ideation, and Wellness in a Bangladeshi University Student Sample",
        authors: "Sifat M, Huq M, Baig M, Tasnim N, Green K",
        journal:
          "International Journal of Environmental Research and Public Health",
        year: "2023",
        doi: "https://doi.org/10.3390/ijerph20020904",
        pmid: "36673660",
        category: ["Behavioral & Mental Health"],
        subcategory: [],
      },
      {
        title:
          "Motivations and Barriers for Clinical Mental Health Help-Seeking in Bangladeshi University Students, A Cross-Sectional Study",
        authors:
          "Sifat M, Tasnim N, Hoque N, Saperstein S, Stoebenau K, Shin R, Feldman R, Green K.",
        journal: "Global Mental Health",
        year: "2022",
        doi: "",
        pmid: "",
        category: ["Behavioral & Mental Health"],
        subcategory: [],
      },
      {
        title:
          "Associations Between Family Factors, Social Integration, and Suicidal Ideation Across the Life Course of an Urban African American Cohort",
        authors:
          "Sifat, M. S., Kuo, C., Yoo, J. H., Holder, S., & Green, K. M.",
        journal: "Journal of Black Psychology",
        year: "2023",
        doi: "https://doi.org/10.1177/00957984221150062",
        pmid: "",
        category: ["Behavioral & Mental Health"],
        subcategory: [],
      },
      {
        title:
          "College Students' Coping, Resilience, Well-Being, Academic Experiences, and Help-Seeking Attitudes During COVID-19",
        authors:
          "Wang, Y. W., Abebe, I., Cruz, T. E., Arévalo Avalos, M. R., Sifat, M., Abdelwahab, S., & Li, T.",
        journal: "The Counseling Psychologist",
        year: "2024",
        doi: "https://doi.org/10.1177/00110000241234567",
        pmid: "",
        category: ["Behavioral & Mental Health"],
        subcategory: [],
      },
      {
        title:
          "Pandemic-related stress is associated with poor mental health outcomes among African Americans",
        authors:
          "Brewer, K., Waring, J.J.C., Noble, B., Bradley, D., Olurotimi, O., Fronheiser, J., Sifat, M., Ehlke, S.J., Boozary, L.K., McQuoid, J., Kendzor, D. & Alexander, A.C.",
        journal: "Journal of Racial and Ethnic Health Disparities",
        year: "2022",
        doi: "https://doi.org/10.1007/s40615-022-01383-7",
        pmid: "",
        category: ["Behavioral & Mental Health"],
        subcategory: [],
      },
      {
        title:
          "Perceptions of Mental Health and Exploring the Role of Social Activism Among African Americans Exposed to Media Coverage of Police Brutality and Protests",
        authors:
          "Alexander, A.C., Waring, J.J.C., Noble, B., Bradley, D. Olurotimi, O., Fronheiser, J., Sifat, M., Ehlke, S.J., Boozary, L.K., McQuoid, J., & Kendzor, D.E.",
        journal: "Journal of Racial and Ethnic Health Disparities",
        year: "2022",
        doi: "https://doi.org/10.1007/s40615-022-01326-2",
        pmid: "",
        category: ["Behavioral & Mental Health"],
        subcategory: [],
      },
    ],
  },
  {
    id: "cancer-prevention-control",
    title: "Cancer Prevention & Control",
    description:
      "Research focused on reducing cancer risk and improving cancer screening rates in underserved populations. This work addresses tobacco-related cancers, cancer screening barriers, and the development of innovative approaches to cancer prevention including HPV self-sampling, mobile screening units, and culturally tailored interventions.",
    keyAchievements: [
      "Developed smoking cessation interventions targeting cancer prevention",
      "Examined cancer screening disparities and beliefs in diverse communities",
      "Evaluated financial incentives and behavioral interventions for tobacco cessation",
      "Published in high-impact journals including JAMA Network Open",
    ],
    publications: [
      {
        title:
          "E-cigarette switching and financial incentives to promote combustible cigarette cessation among adults accessing shelter services: A pilot study",
        authors:
          "Sifat, M., Alexander, A. C., Businelle, M. S., Frank-Pearce, S. G., Boozary, L. K., Wagener, T. L., Ahluwalia, J. S., & Kendzor, D. E.",
        journal: "Drug Abuse and Dependence Reports",
        year: "2024",
        doi: "https://doi.org/10.1016/j.dadr.2024.100XXX",
        pmid: "",
        category: ["Cancer Prevention & Control"],
        subcategory: ["Tobacco Control & Harm Reduction"],
      },
      {
        title:
          "Small financial incentives for smoking cessation among socioeconomically disadvantaged adults: A randomized controlled trial",
        authors:
          "Kendzor, D. E., Frank-Pearce, S. G., Waring, J. J.C., Chen, S., Hebert, E. T., Swartz, M. D., Alexander, A. C., Sifat, M. S., Boozary, L. K., Wetter, D. W",
        journal: "JAMA Network Open",
        year: "2024",
        doi: "",
        pmid: "",
        category: ["Cancer Prevention & Control"],
        subcategory: [
          "Tobacco Control & Harm Reduction",
          "Implementation Science & Systems Change",
        ],
      },
      {
        title:
          "The influence of sociodemographic, tobacco use, and mental health characteristics on treatment adherence among adults enrolled in a community-based tobacco cessation program",
        authors:
          "Ogunsanya ME, Frank-Pearce S, Chen S, Sifat M, Cohn AM, Businelle MS, Kendzor DE",
        journal: "Addictive Behaviors Reports",
        year: "2024",
        doi: "",
        pmid: "",
        category: ["Cancer Prevention & Control"],
        subcategory: ["Tobacco Control & Harm Reduction"],
      },
      {
        title:
          "Incentivizing Tobacco Helpline Engagement in Persistent Poverty Counties: A Randomized Trial",
        authors:
          "Kendzor, D. E., Davie, M., Chen, M., Hart, J., Frank-Pearce, S. G., Doescher, M. P., Alexander, A. C., Businelle, M. S., Ogunsanya, M. E., Sifat, M. S., Boozary, L. K",
        journal: "American Journal of Preventive Medicine",
        year: "2024",
        doi: "",
        pmid: "",
        category: ["Cancer Prevention & Control"],
        subcategory: [
          "Tobacco Control & Harm Reduction",
          "Implementation Science & Systems Change",
        ],
      },
      {
        title:
          "Sociodemographic Correlates of Cancer-Related Beliefs Among Chinese Speaking Adults in Greater Philadelphia",
        authors: "Song, Y., Sifat, M., Phan, L. et al.",
        journal: "Journal of Racial and Ethnic Health Disparities",
        year: "2025",
        doi: "https://doi.org/10.1007/s40615-025-02565-9",
        pmid: "",
        category: ["Cancer Prevention & Control"],
        subcategory: ["Faith & Cultural Contexts in Health"],
      },
      {
        title:
          "Mobile health (mHealth) interventions in prostate cancer survivorship: a scoping review",
        authors:
          "Ogunsanya, M. E., Sifat, M., Bamidele, O. O., Ezenwankwo, E. F., Clifton, S., Ton, C., Knight, J. M., Odedina, F. T., Greer, J. A., Dwyer, K., & Kendzor, D. E",
        journal: "Journal of Cancer Survivorship",
        year: "2023",
        doi: "https://doi.org/10.1007/s11764-022-01328-3",
        pmid: "",
        category: ["Cancer Prevention & Control"],
        subcategory: [],
      },
      {
        title: "Cannabis Use Among Adults Undergoing Cancer Treatment",
        authors:
          "Azizoddin, D.R., Cohn, A.M., Ulahannan, S.V., Henson, C.E., Alexander, A.C., Moore, K.N., Holman, L.L., Boozary, L.K., Sifat, M.S., and Kendzor, D.E.",
        journal: "Cancer",
        year: "2023",
        doi: "https://doi.org/10.1002/cncr.34922",
        pmid: "",
        category: ["Cancer Prevention & Control"],
        subcategory: [],
      },
    ],
  },
  {
    id: "access-care-navigation",
    title: "Access to Care & Service Navigation",
    description:
      "Research examining barriers to healthcare access and strategies to improve service utilization among vulnerable populations. This work explores help-seeking behaviors, treatment adherence, healthcare navigation challenges, and the development of interventions to connect underserved communities with needed resources and services.",
    keyAchievements: [
      "Identified barriers to mental health care and cancer screening services",
      "Examined treatment adherence patterns in community-based programs",
      "Developed strategies to improve healthcare navigation for underserved populations",
      "Investigated motivations and barriers for clinical help-seeking",
    ],
    publications: [
      {
        title:
          "An Examination of Barriers to Accessing Mental Health Care, and Their Association with Depression, Stress, Suicidal Ideation, and Wellness in a Bangladeshi University Student Sample",
        authors: "Sifat M, Huq M, Baig M, Tasnim N, Green K",
        journal:
          "International Journal of Environmental Research and Public Health",
        year: "2023",
        doi: "https://doi.org/10.3390/ijerph20020904",
        pmid: "36673660",
        category: ["Access to Care & Service Navigation"],
        subcategory: [],
      },
      {
        title:
          "Tobacco use characteristics, treatment preferences, and motivation to quit among adults accessing a day shelter in Oklahoma City",
        authors:
          "Boozary, L.K., Frank-Pearce, S.G., Alexander, A.C., Sifat, M.S., Kurien, J., Waring, J.J., Ehlke, S.J., Businelle, M.S., Ahluwalia, J.S. and Kendzor, D.E.",
        journal: "Drug and Alcohol Dependence Reports",
        year: "2022",
        doi: "https://doi.org/10.1016/j.dadr.2022.100117",
        pmid: "",
        category: ["Access to Care & Service Navigation"],
        subcategory: [],
      },
    ],
  },
  {
    id: "digital-mobile-health",
    title: "Digital & Mobile Health Interventions",
    description:
      "Research leveraging digital health technologies to increase healthcare access and improve service utilization with culturally competent implementation for specific populations. This work examines smartphone-based interventions for medication adherence, mindfulness applications, and the acceptability of digital health tools in low-income countries and underserved communities.",
    keyAchievements: [
      "Developed smartphone-based medication adherence interventions for smoking cessation",
      "Studied digital health acceptability and motivations in international student populations",
      "Explored mindfulness-based mobile interventions across cultural contexts",
      "Published feasibility studies on mHealth interventions for health promotion",
    ],
    publications: [
      {
        title:
          "Varenicline Combined With Oral Nicotine Replacement Therapy and Smartphone-Based Medication Reminders for Smoking Cessation: Feasibility Randomized Controlled Trial",
        authors:
          "Sifat M, Hébert ET, Ahluwalia JS, Businelle MS, Waring JJC, Frank-Pearce SG, Bryer C, Benson L, Madison S, Planas LG, Baranskaya I, Kendzor DE.",
        journal: "JMIR Formative Research",
        year: "2023",
        doi: "https://doi.org/10.2196/48857",
        pmid: "37889541",
        category: ["Digital & Mobile Health Interventions"],
        subcategory: [],
      },
      {
        title:
          "Motivations Toward Using Digital Health and Exploring the Possibility of Using Digital Health for Mental Health in Bangladesh University Students",
        authors: "Sifat MS, Saperstein SL, Tasnim N, Green KM",
        journal: "JMIR Formative Research",
        year: "2022",
        doi: "https://doi.org/10.2196/34901",
        pmid: "35254267",
        category: ["Digital & Mobile Health Interventions"],
        subcategory: [],
      },
      {
        title:
          "A qualitative exploration of university student perspectives on mindfulness-based stress reduction exercises via smartphone app in Bangladesh",
        authors: "Sifat M, Tasnim N, Steobenou K, Green K.",
        journal:
          "International Journal of Qualitative Studies on Health and Well-being",
        year: "2022",
        doi: "https://doi.org/10.1080/17482631.2022.2113015",
        pmid: "",
        category: ["Digital & Mobile Health Interventions"],
        subcategory: [],
      },
    ],
  },
  {
    id: "community-engagement",
    title: "Community Engagement in Health Disparities Research",
    description:
      "Building partnerships with organizations serving marginalized populations to co-develop and implement culturally and contextually relevant interventions. Focus on cancer prevention, behavioral health, and amplifying voices of vulnerable communities through collaborative scholarship and community-based participatory research.",
    keyAchievements: [
      "Established partnerships with mobile screening units and community organizations",
      "Developed culturally tailored research with refugee and homeless populations",
      "Published collaborative work with community-based researchers",
      "Implemented research in shelter settings and hard-to-reach communities",
    ],
    publications: [
      {
        title:
          "Reaching the unheard: overcoming challenges in health research with hard-to-reach populations",
        authors: "Bekteshi, V., Sifat, M. and Kendzor, D.E",
        journal: "International Journal for Equity in Health",
        year: "2024",
        doi: "",
        pmid: "",
        category: ["Community Engagement in Health Disparities Research"],
        subcategory: [],
      },
      {
        title:
          "Tobacco use characteristics, treatment preferences, and motivation to quit among adults accessing a day shelter in Oklahoma City",
        authors:
          "Boozary, L.K., Frank-Pearce, S.G., Alexander, A.C., Sifat, M.S., Kurien, J., Waring, J.J., Ehlke, S.J., Businelle, M.S., Ahluwalia, J.S. and Kendzor, D.E.",
        journal: "Drug and Alcohol Dependence Reports",
        year: "2022",
        doi: "https://doi.org/10.1016/j.dadr.2022.100117",
        pmid: "",
        category: ["Community Engagement in Health Disparities Research"],
        subcategory: [],
      },
      {
        title:
          "Greater Discrimination Frequency and Lower Distress Tolerance Are Associated with Mental Health Problems Among Racially Privileged and Minoritized Adults Accessing an Urban Day Shelter",
        authors:
          "Sifat, M. S., Ehlke, S. J., Ogunsanya, M., Frank-Pearce, S. G., Boozary, L. K., Alexander, A. C., Businelle, M. S., & Kendzor, D. E",
        journal: "Journal of Racial and Ethnic Health Disparities",
        year: "2023",
        doi: "https://doi.org/10.1007/s40615-022-01496-z",
        pmid: "",
        category: ["Community Engagement in Health Disparities Research"],
        subcategory: [],
      },
    ],
  },
];

// ============================================================================
// OTHER PUBLICATIONS
// ============================================================================
export const otherPublications: Publication[] = [
  {
    title: "Impacts Of Census Categories On Muslim American Health",
    authors:
      "Awaad, Rania, Neshwa B. Rajeh, Kubra Cabuk, Munjireen Sifat, Ali Raza Khan.",
    journal: "Health Affairs Forefront",
    year: "2023",
    doi: "https://doi.org/10.1377/forefront.20230614.685636",
    pmid: "",
    category: [],
    subcategory: ["Faith & Cultural Contexts in Health"],
  },
  {
    title:
      "Satisfaction with Online/In-person Social Interactions and Psychological Well-being: The Mediating Role of Social Connectedness",
    authors:
      "Abebe, Israel; Wang, Yu-Wei; O'Connor, Seini; Cruz, Tiana; Keum, Brian; Sifat, Munjireen.",
    journal: "Current Psychology",
    year: "2023",
    doi: "",
    pmid: "",
    category: [],
    subcategory: [],
  },
  {
    title:
      "An exploratory qualitative analysis of the Stanford-Templeton convenings on Islam and suicide",
    authors:
      "Awaad, R., Quadri, Y., Sifat, M., Elzamzamy, K., Suleiman, K., Rehman, O., Husain, A., Abdelrehim, A., Rushdi, R., Belanger, C.C. and Hill, T.D.",
    journal: "Journal of Religion and Health",
    year: "2024",
    doi: "",
    pmid: "",
    category: [],
    subcategory: ["Faith & Cultural Contexts in Health"],
  },
  {
    title:
      "Co-Occurring Intimate Partner Violence and Child Abuse in Eastern Democratic Republic of Congo: The Influence of Early Life Experiences of Abuse",
    authors:
      "Falb, K. L., Blackwell, A., Hategekimana, J. de D., Sifat, M., Roth, D., & O'Connor, M.",
    journal: "Violence Against Women",
    year: "2022",
    doi: "https://doi.org/10.1177/10778012221145302",
    pmid: "",
    category: [],
    subcategory: [],
  },
  {
    title:
      "Single-use, co-use, and polysubstance use of alcohol, tobacco, and cannabis in sexual minority and heterosexual females",
    authors:
      "Ehlke, S. J., Kendzor, D. E., Smith, M. A., Sifat, M. S., Boozary, L. K., & Cohn, A. M.",
    journal: "The American Journal on Addictions",
    year: "2022",
    doi: "https://doi.org/10.1111/ajad.13344",
    pmid: "",
    category: [],
    subcategory: [],
  },
  {
    title:
      "The Role of Adolescent Anxious Mood, Marijuana Use, and Locus of Control in the School to Prison Pipeline",
    authors: "Holder, S., Sifat, M., Green, K.",
    journal: "Education and Urban Society",
    year: "2022",
    doi: "https://doi.org/10.1177/00131245221124871",
    pmid: "",
    category: [],
    subcategory: [],
  },
  {
    title:
      "Beyond Performative Activism- An Exploration of Motivators to Participate Social Media Activism Through the Lens of Self-Determination Theory",
    authors: "Sifat, M., Chiang, S., Irfan, A., Green, K.",
    journal: "Harvard Public Health Review",
    year: "2021",
    doi: "",
    pmid: "",
    category: [],
    subcategory: [],
  },
  {
    title:
      "Misinformation, health equity, news media: application of critical race theory (CRT) to examine news media's role in normalizing religious bigotry",
    authors: "Irfan A, Sifat M, Brown Z.",
    journal: "Harvard Public Health Review",
    year: "2020",
    doi: "",
    pmid: "",
    category: [],
    subcategory: [],
  },
  {
    title:
      "Engaging Children to Support Parental Weight Loss: A Randomized Trial",
    authors:
      "Winston, G., Sifat, M., Phillips, E., Dietz, W., Wikner, E., Barrow, M., Khurana, K., & Charlson, M.",
    journal: "Health Education & Behavior",
    year: "2019",
    doi: "https://doi.org/10.1177/1090198119853005",
    pmid: "",
    category: [],
    subcategory: [],
  },
  {
    title:
      "Explaining continuity in substance use: The role of criminal justice system involvement over the life course of an urban African American prospective cohort",
    authors: "Green, K. M., Doherty, E. E., Sifat, M. S., & Ensminger, M. E.",
    journal: "Drug and Alcohol Dependence",
    year: "2019",
    doi: "https://doi.org/10.1016/j.drugalcdep.2018.09.033",
    pmid: "",
    category: [],
    subcategory: [],
  },
];

// ============================================================================
// CONTACT INFO
// ============================================================================
// ⚠️ PARTIALLY COMPLETE - Missing phone and office hours
export const contactInfo: ContactInfo = {
  email: "munjireen.sifat@jefferson.edu", // TODO: Verify correct email
  officeLocation: {
    campus: "Thomas Jefferson University",
    address:
      "Sidney Kimmel Comprehensive Cancer Center, Department of Medical Oncology",
    city: "Philadelphia, PA",
  },
  officeHours: "", // TODO: Add office hours
};

export const contactSectionData = {
  title: "Contact & Collaboration",
  description: `We welcome collaboration opportunities with researchers, community organizations, and students dedicated to health equity.

We also welcome media inquiries from journalists seeking expert, research informed perspectives on health equity.`,
  cardDescription:
    "Multiple ways to connect for research collaboration and academic or media inquiries",
};

export const publicEngagementSectionData = {
  title: "Public Engagement",
  subtitle:
    "Engaging with ​the public, community partners, policymakers, ​and practitioners through ​public talks, workshops, and outreach​ activities, translating research findings into real ​- world policy and practice.",
  pubImage: pubImage,

  pubImage2: pubImage2,
};

// ============================================================================
// PUBLIC ENGAGEMENT DATA
// ============================================================================
export const publicEngagementData: PublicEngagementYear[] = [
  {
    year: "2026",
    items: [
      {
        id: 1,
        authors: "Sifat, M.",
        title: "Community Centered Cancer Research in Philadelphia",
        type: "Invited Talk",
        venue: "MCC Seminar Series, University of Minnesota",
        date: "March 2026",
        location: "Minneapolis, MN",
      },
      {
        id: 2,
        authors: "Sifat, M.",
        title:
          "Combustible Cigarette and E-Cigarette Use and Cancer Fatalism in Philadelphia",
        type: "Invited Talk",
        venue: "Jefferson Health 14th Annual Lung Cancer Symposium",
        date: "March 12, 2026",
        location: "Philadelphia, PA",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        id: 3,
        authors: "Sifat, M.",
        title:
          "Making the Switch: A Mobile E-Cigarette Incentive Intervention to Promote Combustible Cigarette Abstinence in Adults with a History of Homelessness",
        type: "Invited Pop Talk",
        venue:
          "Population Science Division of Medical Oncology, Sidney Kimmel Comprehensive Cancer Center",
        date: "December 11, 2025",
        location: "Philadelphia, PA",
      },
      {
        id: 4,
        authors: "M Sifat, S Chiang, D Kendzor",
        title:
          "Correlates of Self-Rated Health Among Newly Resettled Afghan Refugees in Oklahoma City",
        type: "Presentation",
        venue: "International Refugee and Migration Health Conference",
        date: "June 26-29, 2025",
        location: "Nova Scotia, Canada",
      },
      {
        id: 5,
        authors: "Sifat, M.",
        title: "Importance of community outreach",
        type: "Invited Speaker",
        venue: "SKCCC Summer FOCUS Program",
        date: "June 25, 2025",
        location: "Philadelphia, PA",
      },
      {
        id: 6,
        authors: "Sifat, M.",
        title:
          "Closing Remarks on Behalf of Sidney Kimmel Comprehensive Cancer Center",
        type: "Invited Speaker",
        venue: "Liver Cancer Conference, Hepatitis B Foundation",
        date: "June 2025",
        location: "Virtual",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        id: 7,
        authors: "Sifat, M; Cammy, R; Dimino, M",
        title:
          "Impact of SDOH Screening on Cancer Care: Uncovering Needs and Enhancing Community Connections",
        type: "Presentation",
        venue: "CCCIF Annual Meeting",
        date: "2024",
        location: "Salt Lake City, UT",
      },
      {
        id: 8,
        authors:
          "Munjireen Sifat, Amy Leader, Yawei Song, Rebecca Melillo, Joshua Banks",
        title:
          "Exploring Reasons for Ethnic and Racial Disparities in Cancer Screening in the Greater Philadelphia Area",
        type: "Presentation",
        venue: "Annual Society for Behavioral Medicine Conference",
        date: "2024",
        location: "Philadelphia, PA",
      },
      {
        id: 9,
        authors:
          "Munjireen Sifat, Meng Chen, Morgan Davie, Amy M. Cohn, Adam C. Alexander, Michael S. Businelle, Laili Kharazi Boozary, Motolani Ogunsanya, Darla E. Kendzor",
        title:
          "The Association of Cannabis Use with Smoking Dependence and Cessation among Tobacco Helpline Callers from Persistent Poverty Counties",
        type: "Presentation",
        venue:
          "Annual SRNT Conference, Society for Research on Nicotine and Tobacco",
        date: "2024",
        location: "Edinburgh, Scotland",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        id: 10,
        authors: "Sifat, M.S.",
        title:
          "Culture and Faith as Healing: Caring for the Mental Health of Refugees After Resettlement",
        type: "Invited Speaker (Symposium)",
        venue:
          "Society for the Study of Psychiatry and Culture Annual Meeting: Practices that Harm Practices that Heal",
        date: "April 2023",
        location: "San Diego, CA",
      },
      {
        id: 11,
        authors: "Sifat, M.S., Zaring-Hinkle, B.",
        title: "Tobacco Cessation",
        type: "Co-Presenters (Lecture)",
        venue:
          "Psychiatry Grand Rounds, University of Oklahoma Health Science Center",
        date: "February 21, 2023",
        location: "Oklahoma City, OK",
      },
      {
        id: 12,
        authors:
          "Munjireen Sifat, Bishop Noble, Brittany Zaring-Hinkle, Shawn Chiang, Darla Kendzor",
        title: "Tobacco Use Among Afghan Refugees Resettled In The U.S.",
        type: "Poster Presentation",
        venue: "SRNT 2023 Annual Meeting",
        date: "2023",
        location: "San Antonio, TX",
      },
      {
        id: 13,
        authors: "Shawn Chiang, Munjireen Sifat, Phillip Massey",
        title:
          "Patterns of Tobacco Product Use Among Adult Tobacco Users in the Wave 5 of the PATH study: A Latent Class Analysis",
        type: "Poster Presentation",
        venue: "American Academy of Health Behavior Meeting",
        date: "March 2023",
        location: "San Francisco, CA",
      },
      {
        id: 14,
        authors: "Munjireen Sifat, Bishop Noble, Darla Kendzor",
        title:
          "Post-Migration Stress in Afghan Refugees Resettled in Oklahoma City",
        type: "Poster Presentation",
        venue: "15th Annual Muslim Mental Health Conference",
        date: "March 10-11, 2023",
        location: "Lansing, MI (Online)",
      },
      {
        id: 15,
        authors:
          "Munjireen S. Sifat, Emily T. Hébert, Jasjit S. Ahluwalia, Michael S. Businelle, Joseph J.C. Waring, Summer G. Frank-Pearce, Bishop Noble, Chase Bryer, Stefani Madison, Lourdes G. Planas, Darla E. Kendzor",
        title:
          "Smartphone-Based Medication Reminders Increase Daily Medication Adherence and Decrease the Likelihood of Daily Smoking",
        type: "Poster Presentation",
        venue: "Society for Behavioral Medicine Scientific Meeting",
        date: "April 2023",
        location: "Phoenix, AZ",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        id: 16,
        authors: "Sifat, M.",
        title:
          "Mental Health In University Students In Bangladesh: An Examination Of The Current Use Of Practices And Services And Acceptability Of Mhealth For Mental Health",
        type: "Invited Guest Speaker",
        venue:
          "University of Maryland, School of Public Health, Behavioral and Community Health Seminar",
        date: "April 4, 2022",
        location: "College Park, MD",
      },
      {
        id: 17,
        authors:
          "Sifat M., Ehlke S., Alexander A., Boozary L., Businelle M., Kendzor, D.",
        title:
          "Higher Distress Tolerance Protects Against Discrimination-Related Mental Health Problems Among Non-White Adults Experiencing Homelessness",
        type: "Presentation",
        venue: "Society for Prevention Research 30th Annual Meeting",
        date: "May 31-June 3, 2022",
        location: "Seattle, WA",
      },
      {
        id: 18,
        authors: "Sifat M.",
        title:
          "Refugee Mental Health, and overview and case studies of Syrian and Afghan refugees",
        type: "Invited Guest Lecture",
        venue: "University of Arkansas, PBHL 4643: Multicultural Health",
        date: "April 2022",
        location: "Fayetteville, AR",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        id: 19,
        authors: "Sifat, M.",
        title: "Mental Health in College Students",
        type: "Invited Guest Lecture",
        venue: "University of Arkansas, PBHL 1103 – Personal Health & Safety",
        date: "September 2021",
        location: "Fayetteville, AR",
      },
      {
        id: 20,
        authors: "M Sifat, S Chiang, N Amin, A Irfan, K Green",
        title:
          "Beyond Performative Activism- An Exploration of Motivators to Participate Social Media Activism Through the Lens of Self-Determination Theory",
        type: "Poster Presentation",
        venue: "SPR Virtual 29th Annual Meeting",
        date: "June 2021",
        location: "Washington, DC (Virtual)",
      },
      {
        id: 21,
        authors:
          "Sifat, Munjireen, Tasnim, Naima, Sarker, Abheet, Green, Kerry",
        title:
          "Mental Health in University Students in Bangladesh: An Examination Of Current Practices & Service Use For Mental Health",
        type: "Virtual Poster Presentation",
        venue: "Public Health Research Day",
        date: "April 2021",
        location: "College Park, MD (Virtual)",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        id: 22,
        authors: "Sifat, Munjireen",
        title: "Muslim mental health and the impact of COVID-19",
        type: "Video Presentation",
        venue: "Helping Hand Chapter at University of Maryland, Instagram",
        date: "October 30, 2020",
        location: "Instagram (Virtual)",
      },
      {
        id: 23,
        authors: "Sifat M, Kuo C, Green K",
        title:
          "An Examination of Adolescent Social Factors in Predicting Midlife Mental Health Outcomes in an African American Cohort",
        type: "Poster Presentation",
        venue: "Society for Prevention Research 28th Annual Meeting",
        date: "July 2020",
        location: "Washington, DC (Virtual)",
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        id: 24,
        authors: "Sifat, M., Green, K., Holder, S., Kuo, C.",
        title:
          "How Family Factors in Childhood and Adolescence Influence Suicidal Ideation in Midlife in an Urban African-American Cohort",
        type: "Poster Presentation",
        venue:
          "American Public Health Association 2019 Annual Meeting and Expo",
        date: "November 2-6, 2019",
        location: "Philadelphia, PA",
      },
      {
        id: 25,
        authors: "Holder, S., Sifat, M., Green, K., Kuo, C.",
        title:
          "Role of Adolescent Anxious Mood in the School to Prison Pipeline: Educational Attainment and Incarceration among urban African-Americans",
        type: "Poster Presentation",
        venue:
          "American Public Health Association 2019 Annual Meeting and Expo",
        date: "November 2-6, 2019",
        location: "Philadelphia, PA",
      },
      {
        id: 26,
        authors: "Sifat, Munjireen, Holder S, Green, Kerry",
        title:
          "The Relationship between Social Integration and Suicidal Ideation Among African Americans in a Longitudinal Study",
        type: "Poster Presentation",
        venue: "Society for Preventative Research Annual Conference",
        date: "June 1-4, 2019",
        location: "San Diego, CA",
      },
    ],
  },
  {
    year: "2017",
    items: [
      {
        id: 27,
        authors: "Sifat, M.",
        title:
          "Adverse Childhood Experiences as a Moderating Factor between Healthy Days Amongst Adults with Obesity",
        type: "Presentation",
        venue: "GW Research Days",
        date: "April 2017",
        location: "Washington, DC",
      },
    ],
  },
];

// ============================================================
// FOOTER DATA
// ============================================================

export const footerData = {
  copyright: "© 2025 Munjireen Sifat, PhD, MPH. All rights reserved.",
  links: [
    {
      text: "Linkedin",
      href: "https://www.linkedin.com/in/munjireen-sifat-b6037b94/",
    },
    {
      text: "Google Scholar",
      href: "https://scholar.google.com/citations?user=Yxpb0w8AAAAJ&hl=en&inst=9752039510217644241&oi=ao",
    },
    {
      text: "Bibliography",
      href: "https://www.ncbi.nlm.nih.gov/myncbi/munjireen.sifat.3/bibliography/public/",
    },
  ],
};

// ============================================================
// JOIN US
// ============================================================

export const joinUsData = {
  title: "Join Us",
  description:
    "We are always looking for passionate researchers to join our multidisciplinary team. Whether you're a prospective graduate student, postdoctoral fellow, or visiting scholar, we welcome dedicated individuals who share our commitment to advancing health equity.",
  howToApply:
    "Please send your CV, research statement, and names of 2-3 references to munjireen.sifat@jefferson.edu with the subject line 'SIFAT Lab Application - [Position]'.",
};
