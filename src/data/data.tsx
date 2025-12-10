import heroImage from "../assets/images/heroImage.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import labimg from "../assets/images/labimg.jpg";
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
  category?: string;
  subcategory?: string;
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
    period: "September 2022 - Present",
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
        pmid: "N/A",
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
];

// ============================================================
// Publications SECTION DATA -
// ============================================================

export const researchSectionData = {
  title: "Publications",
  description:
    "Our work addresses health equity through tobacco cessation, cancer prevention, mental health interventions, and digital health solutions. Browse our peer-reviewed publications spanning multiple disciplines.",
};

export const contributions: ContributionToScience[] = [
  {
    id: "tobacco-cessation",
    title: "Tobacco Cessation and Health Equity",
    description:
      "Promoting health equity amongst vulnerable populations by focusing on smoking cessation interventions tailored to individuals experiencing homelessness and other socioeconomically disadvantaged groups. Research explores e-cigarettes as harm reduction and the impact of financial incentives on cessation outcomes.",
    keyAchievements: [
      "Developed innovative smoking cessation interventions for homeless populations",
      "Evaluated e-cigarette switching as harm reduction strategy",
      "Examined financial incentives impact on cessation outcomes",
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
        pmid: "N/A",
      },
      {
        title:
          "Small financial incentives for smoking cessation among socioeconomically disadvantaged adults: A randomized controlled trial",
        authors:
          "Kendzor, D. E., Frank-Pearce, S. G., Waring, J. J. C., Chen, S., Hebert, E. T., Swartz, M. D., Alexander, A. C., Sifat, M. S., Boozary, L. K., & Wetter, D. W.",
        journal: "JAMA Network Open",
        year: "2024",
        
        doi: "https://doi.org/10.1001/jamanetworkopen.2024",
        pmid: "N/A",
      },
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
      {
        title:
          "The influence of sociodemographic, tobacco use, and mental health characteristics on treatment adherence among adults enrolled in a community-based tobacco cessation program",
        authors:
          "Ogunsanya, M.E., Frank-Pearce, S.G., Chen, S., Sifat, M., Cohn, A.M., Businelle, M.S. and Kendzor, D.E.",
        journal: "Addictive Behaviors Reports",
        year: "2024",
        
        doi: "https://doi.org/10.1016/j.abrep.2024.100568",
        pmid: "N/A",
      },
    ],
  },
  {
    id: "community-engagement",
    title: "Community Engagement in Health Disparities Research",
    description:
      "Building partnerships with organizations serving marginalized populations to co-develop and implement culturally and contextually relevant interventions. Focus on cancer prevention, behavioral health, and amplifying voices of vulnerable communities through collaborative scholarship.",
    keyAchievements: [
      "Established partnerships with mobile screening units and community organizations",
      "Developed culturally tailored research with refugee populations",
      "Published collaborative work with community-based researchers",
      "Implemented HPV self-sampling protocols in diverse communities",
    ],
    publications: [
      {
        title:
          "Reaching the unheard: Overcoming challenges in health research with hard-to-reach populations",
        authors: "Bekteshi, V., Sifat, M., & Kendzor, D. E.",
        journal: "International Journal for Equity in Health",
        year: "2024",
        
        doi: "N/A",
        pmid: "N/A",
      },
      {
        title:
          "Tobacco use characteristics, treatment preferences, and motivation to quit among adults accessing a day shelter in Oklahoma City",
        authors:
          "Boozary, L.K., Frank-Pearce, S.G., Alexander, A.C., Sifat, M.S., Kurien, J., Waring, J.J., Ehlke, S.J., Businelle, M.S., Ahluwalia, J.S. and Kendzor, D.E.",
        journal: "Drug and Alcohol Dependence Reports",
        year: "2022",
        
        doi: "https://doi.org/10.1016/j.dadr.2022.100117",
        pmid: "N/A",
      },
      {
        title:
          "Greater discrimination frequency and lower distress tolerance are associated with mental health problems among racially privileged and minoritized adults accessing an urban day shelter",
        authors:
          "Sifat, M.S., Ehlke, S.J., Ogunsanya, M., Frank-Pearce, S.G., Boozary, L.K., Alexander, A.C., Businelle, M.S. and Kendzor, D.E.",
        journal: "Journal of Racial and Ethnic Health Disparities",
        year: "2024",
        
        doi: "https://doi.org/10.1007/s40615-022-01496-z",
        pmid: "N/A",
      },
    ],
  },
  {
    id: "mental-health-protective-factors",
    title: "Mental Health and Protective Factors in Disadvantaged Populations",
    description:
      "Understanding modifiable factors related to help-seeking behaviors and health problems in socioeconomically disadvantaged populations. Research explores self-determining factors of behavior change and identifies protective factors like social support that buffer poor health outcomes.",
    keyAchievements: [
      "Examined migration-related stress in Afghan refugee population",
      "Identified barriers to mental health care access in university students",
      "Studied family factors predicting suicidal ideation across life course",
      "Published work on protective factors in African American cohort",
    ],
    publications: [
      {
        title:
          "The association of migration-related stress with poor mental health among recently resettled Afghan refugees",
        authors:
          "Sifat, M.S., Kenney, S., Bekteshi, V., Chiang, S.C., Ogunsanya, M., Boozary, L.K., Alexander, A.C. and Kendzor, D.E.",
        journal: "Journal of Migration and Health",
        year: "2024",
        
        doi: "https://doi.org/10.1016/j.jmh.2024.100282",
        pmid: "N/A",
      },
      {
        title:
          "An Examination of Barriers to Accessing Mental Health Care, and Their Association with Depression, Stress, Suicidal Ideation, and Wellness in a Bangladeshi University Student Sample",
        authors: "Sifat M, Huq M, Baig M, Tasnim N, Green KM.",
        journal:
          "International Journal of Environmental Research and Public Health",
        year: "2023",
        
        doi: "https://doi.org/10.3390/ijerph20020904",
        pmid: "36673660",
      },
      {
        title:
          "Motivations and Barriers for Clinical Mental Health Help-Seeking in Bangladeshi University Students, A Cross-Sectional Study",
        authors:
          "Sifat M, Tasnim N, Hoque N, Saperstein S, Stoebenau K, Shin R, Feldman R, Green K.",
        journal: "Global Mental Health",
        year: "2022",
        
        doi: "N/A",
        pmid: "N/A",
      },
      {
        title:
          "Associations Between Family Factors, Social Integration, and Suicidal Ideation Across the Life Course of an Urban African American Cohort",
        authors:
          "Sifat, M. S., Kuo, C., Yoo, J. H., Holder, S., & Green, K. M.",
        journal: "Journal of Black Psychology",
        year: "2023",
        
        doi: "https://doi.org/10.1177/00957984221150062",
        pmid: "N/A",
      },
    ],
  },
  {
    id: "digital-health",
    title: "Digital Health for Underserved Populations",
    description:
      "Leveraging digital health technologies to increase access to healthcare and improve service utilization, with focus on culturally competent implementation for specific populations. Research examines mobile health applications for mental wellness in low-income country populations.",
    keyAchievements: [
      "Developed smartphone-based medication adherence interventions",
      "Studied digital health acceptability in Bangladesh university students",
      "Explored mindfulness-based mobile interventions cross-culturally",
      "Published feasibility studies on mHealth for smoking cessation",
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
      },
      {
        title:
          "Motivations Toward Using Digital Health and Exploring the Possibility of Using Digital Health for Mental Health in Bangladesh University Students: Cross-sectional Questionnaire Study",
        authors: "Sifat M, Tasnim N, Saperstein S, Green K.",
        journal: "JMIR Formative Research",
        year: "2022",
        
        doi: "https://doi.org/10.2196/34901",
        pmid: "35254267",
      },
      {
        title:
          "A qualitative exploration of university student perspectives on mindfulness-based stress reduction exercises via smartphone app in Bangladesh",
        authors: "Sifat M, Tasnim N, Steobenou K, Green K.",
        journal:
          "International Journal of Qualitative Studies on Health and Well-being",
        year: "2022",
        
        doi: "https://doi.org/10.1080/17482631.2022.2113015",
        pmid: "N/A",
      },
    ],
  },
];

export const otherPublications: Publication[] = [
  // 2025
  {
    title:
      "Sociodemographic Correlates of Cancer-Related Beliefs Among Chinese Speaking Adults in Greater Philadelphia",
    authors: "Song, Y., Sifat, M., Phan, L. et al.",
    journal: "Journal of Racial and Ethnic Health Disparities",
    year: "2025",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1007/s40615-025-02565-9",
    pmid: "N/A",
  },
  {
    title:
      "Does parental racial socialization protect Black youth from the impact of racism on problematic substance use over the long term?",
    authors: "Kuo, C., Ahn, L. H., Sifat, M., & Green, K. M.",
    journal: "Cultural Diversity & Ethnic Minority Psychology",
    year: "2025",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1037/cdp0000759",
    pmid: "N/A",
  },

  // 2024
  {
    title:
      "College Students' Coping, Resilience, Well-Being, Academic Experiences, and Help-Seeking Attitudes During COVID-19",
    authors:
      "Wang, Y. W., Abebe, I., Cruz, T. E., Arévalo Avalos, M. R., Sifat, M., Abdelwahab, S., & Li, T.",
    journal: "The Counseling Psychologist",
    year: "2024",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1177/00110000241234567",
    pmid: "N/A",
  },
  {
    title:
      "Incentivizing Tobacco Helpline Engagement in Persistent Poverty Counties: A Randomized Trial",
    authors:
      "Kendzor, D. E., Davie, M., Chen, M., Hart, J., Frank-Pearce, S. G., Doescher, M. P., Alexander, A. C., Businelle, M. S., Ogunsanya, M. E., Sifat, M. S., Boozary, L. K.",
    journal: "American Journal of Preventive Medicine",
    year: "2024",
     // TODO: Update from Google Scholar
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "The development and implementation of a custom-tailored suicide response training for Muslim communities",
    authors:
      "Awaad, Rania, Mona Midani, Tasmeer Ali, Munjireen S. Sifat, and Mawdah Albatnuni.",
    journal: "Journal of Religion and Health",
    year: "2024",
     // TODO: Update from Google Scholar
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "Developing a suicide crisis response team in America: an Islamic perspective",
    authors:
      "Awaad, Rania, Zuha Durrani, Yasmeen Quadri, Munjireen S. Sifat, Anwar Hussein, Taimur Kouser, Osama El-Gabalawy, Neshwa Rajeh, and Sana Shareef.",
    journal: "Journal of Religion and Health",
    year: "2024",
     // TODO: Update from Google Scholar
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "An exploratory qualitative analysis of the Stanford-Templeton convenings on Islam and suicide",
    authors:
      "Awaad, R., Quadri, Y., Sifat, M., Elzamzamy, K., Suleiman, K., Rehman, O., Husain, A., Abdelrehim, A., Rushdi, R., Belanger, C.C. and Hill, T.D.",
    journal: "Journal of Religion and Health",
    year: "2024",
     // TODO: Update from Google Scholar
    doi: "N/A",
    pmid: "N/A",
  },

  // 2023
  {
    title: "Impacts Of Census Categories On Muslim American Health",
    authors:
      "Awaad, Rania, Neshwa B. Rajeh, Kubra Cabuk, Munjireen Sifat, Ali Raza Khan.",
    journal: "Health Affairs Forefront",
    year: "2023",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1377/forefront.20230614.685636",
    pmid: "N/A",
  },
  {
    title:
      "Satisfaction with Online/In-person Social Interactions and Psychological Well-being: The Mediating Role of Social Connectedness",
    authors:
      "Abebe, Israel; Wang, Yu-Wei; O'Connor, Seini; Cruz, Tiana; Keum, Brian; Sifat, Munjireen.",
    journal: "Current Psychology",
    year: "2023",
     // TODO: Update from Google Scholar
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "The Association of Cultural Identification with Obesity among African Americans",
    authors:
      "Nolan, M., Waring, J.J., Noble, B., Bradley, D., Olurotimi, O., Fronheiser, J., Sifat, M., Boozary, L.K., McQuoid, J., Kendzor, D.E. and Alexander, A.C.",
    journal: "Journal of Racial and Ethnic Health Disparities",
    year: "2023",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1007/s40615-023-01615-4",
    pmid: "N/A",
  },
  {
    title: "Cannabis Use Among Adults Undergoing Cancer Treatment",
    authors:
      "Azizoddin, D.R., Cohn, A.M., Ulahannan, S.V., Henson, C.E., Alexander, A.C., Moore, K.N., Holman, L.L., Boozary, L.K., Sifat, M.S., and Kendzor, D.E.",
    journal: "Cancer",
    year: "2023",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1002/cncr.34922",
    pmid: "N/A",
  },
  {
    title:
      "Mobile health (mHealth) interventions in prostate cancer survivorship: a scoping review",
    authors:
      "Ogunsanya, M. E., Sifat, M., Bamidele, O. O., Ezenwankwo, E. F., Clifton, S., Ton, C., Knight, J. M., Odedina, F. T., Greer, J. A., Dwyer, K., & Kendzor, D. E.",
    journal: "Journal of Cancer Survivorship",
    year: "2023",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1007/s11764-022-01328-3",
    pmid: "N/A",
  },

  // 2022
  {
    title:
      "Co-Occurring Intimate Partner Violence and Child Abuse in Eastern Democratic Republic of Congo: The Influence of Early Life Experiences of Abuse",
    authors:
      "Falb, K. L., Blackwell, A., Hategekimana, J. de D., Sifat, M., Roth, D., & O'Connor, M.",
    journal: "Violence Against Women",
    year: "2022",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1177/10778012221145302",
    pmid: "N/A",
  },
  {
    title:
      "Single-use, co-use, and polysubstance use of alcohol, tobacco, and cannabis in sexual minority and heterosexual females",
    authors:
      "Ehlke, S. J., Kendzor, D. E., Smith, M. A., Sifat, M. S., Boozary, L. K., & Cohn, A. M.",
    journal: "The American Journal on Addictions",
    year: "2022",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1111/ajad.13344",
    pmid: "N/A",
  },
  {
    title:
      "The Role of Adolescent Anxious Mood, Marijuana Use, and Locus of Control in the School to Prison Pipeline",
    authors: "Holder, S., Sifat, M., Green, K.",
    journal: "Education and Urban Society",
    year: "2022",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1177/00131245221124871",
    pmid: "N/A",
  },
  {
    title:
      "Pandemic-related stress is associated with poor mental health outcomes among African Americans",
    authors:
      "Brewer, K., Waring, J.J.C., Noble, B., Bradley, D., Olurotimi, O., Fronheiser, J., Sifat, M., Ehlke, S.J., Boozary, L.K., McQuoid, J., Kendzor, D. & Alexander, A.C.",
    journal: "Journal of Racial and Ethnic Health Disparities",
    year: "2022",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1007/s40615-022-01383-7",
    pmid: "N/A",
  },
  {
    title:
      "Perceptions of Mental Health and Exploring the Role of Social Activism Among African Americans Exposed to Media Coverage of Police Brutality and Protests",
    authors:
      "Alexander, A.C., Waring, J.J.C., Noble, B., Bradley, D. Olurotimi, O., Fronheiser, J., Sifat, M., Ehlke, S.J., Boozary, L.K., McQuoid, J., & Kendzor, D.E.",
    journal: "Journal of Racial and Ethnic Health Disparities",
    year: "2022",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1007/s40615-022-01326-2",
    pmid: "N/A",
  },

  // 2019-2021
  {
    title:
      "Beyond Performative Activism- An Exploration of Motivators to Participate Social Media Activism Through the Lens of Self-Determination Theory",
    authors: "Sifat, M., Chiang, S., Irfan, A., Green, K.",
    journal: "Harvard Public Health Review",
    year: "2021",
     // TODO: Update from Google Scholar
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "Misinformation, health equity, news media: application of critical race theory (CRT) to examine news media's role in normalizing religious bigotry",
    authors: "Irfan A, Sifat M, Brown Z.",
    journal: "Harvard Public Health Review",
    year: "2020",
     // TODO: Update from Google Scholar
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "Engaging Children to Support Parental Weight Loss: A Randomized Trial",
    authors:
      "Winston, G., Sifat, M., Phillips, E., Dietz, W., Wikner, E., Barrow, M., Khurana, K., & Charlson, M.",
    journal: "Health Education & Behavior",
    year: "2019",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1177/1090198119853005",
    pmid: "N/A",
  },
  {
    title:
      "Explaining continuity in substance use: The role of criminal justice system involvement over the life course of an urban African American prospective cohort",
    authors: "Green, K. M., Doherty, E. E., Sifat, M. S., & Ensminger, M. E.",
    journal: "Drug and Alcohol Dependence",
    year: "2019",
     // TODO: Update from Google Scholar
    doi: "https://doi.org/10.1016/j.drugalcdep.2018.09.033",
    pmid: "N/A",
  },
  {
    title:
      "Sociodemographic Correlates of Cancer-Related Beliefs Among Chinese Speaking Adults in Greater Philadelphia",
    authors: "Song, Y., Sifat, M., Phan, L. et al.",
    journal: "Journal of Racial and Ethnic Health Disparities",
    year: "2025",
    
    doi: "https://doi.org/10.1007/s40615-025-02565-9",
    pmid: "N/A",
  },
  {
    title:
      "Does parental racial socialization protect Black youth from the impact of racism on problematic substance use over the long term?",
    authors: "Kuo, C., Ahn, L. H., Sifat, M., & Green, K. M.",
    journal: "Cultural Diversity & Ethnic Minority Psychology",
    year: "2025",
    
    doi: "https://doi.org/10.1037/cdp0000759",
    pmid: "N/A",
  },

  // 2024
  {
    title:
      "E-Cigarette Switching and Financial Incentives to Promote Combustible Cigarette Cessation Among Adults Accessing Shelter Services: a Pilot Study",
    authors:
      "Sifat, M, Alexander, A.C., Businelle, M.S., Frank-Pearce, S.G., Boozary, L.K., Wagener, T.L., Ahluwalia, J.S., and Kendzor, D.E.",
    journal: "Drug Abuse and Dependence Reports",
    year: "2024",
    
    doi: "https://doi.org/10.1016/j.dadr.2024.100XXX",
    pmid: "N/A",
  },
  {
    title:
      "The Association of Migration-Related Stress with Poor Mental Health Among Recently Resettled Afghan Refugees",
    authors:
      "Sifat M, Kenney S, Chiang S, Boozary L, Ogusunya M, Alexander A, Kendzor D.",
    journal: "Journal of Migration and Health",
    year: "2024",
    
    doi: "https://doi.org/10.1016/j.jmh.2024.100282",
    pmid: "N/A",
  },
  {
    title:
      "College Students' Coping, Resilience, Well-Being, Academic Experiences, and Help-Seeking Attitudes During COVID-19",
    authors:
      "Wang, Y. W., Abebe, I., Cruz, T. E., Arévalo Avalos, M. R., Sifat, M., Abdelwahab, S., & Li, T.",
    journal: "The Counseling Psychologist",
    year: "2024",
    
    doi: "https://doi.org/10.1177/00110000241234567",
    pmid: "N/A",
  },
  {
    title:
      "The influence of sociodemographic, tobacco use, and mental health characteristics on treatment adherence among adults enrolled in a community-based tobacco cessation program",
    authors:
      "Ogunsanya ME, Frank-Pearce S, Chen S, Sifat M, Cohn AM, Businelle MS, Kendzor DE.",
    journal: "Addictive Behaviors Reports",
    year: "2024",
    
    doi: "https://doi.org/10.1016/j.abrep.2024.100568",
    pmid: "N/A",
  },
  {
    title:
      "Incentivizing Tobacco Helpline Engagement in Persistent Poverty Counties: A Randomized Trial",
    authors:
      "Kendzor, D. E., Davie, M., Chen, M., Hart, J., Frank-Pearce, S. G., Doescher, M. P., Alexander, A. C., Businelle, M. S., Ogunsanya, M. E., Sifat, M. S., Boozary, L. K.",
    journal: "American Journal of Preventive Medicine",
    year: "2024",
    
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "Small financial incentives for smoking cessation among socioeconomically disadvantaged adults: A randomized controlled trial",
    authors:
      "Kendzor, D. E., Frank-Pearce, S. G., Waring, J. J.C., Chen, S., Hebert, E. T., Swartz, M. D., Alexander, A. C., Sifat, M. S., Boozary, L. K., Wetter, D. W.",
    journal: "JAMA Network Open",
    year: "2024",
    
    doi: "https://doi.org/10.1001/jamanetworkopen.2024",
    pmid: "N/A",
  },
  {
    title:
      "Reaching the unheard: overcoming challenges in health research with hard-to-reach populations",
    authors: "Bekteshi, V., Sifat, M. and Kendzor, D.E.",
    journal: "International Journal for Equity in Health",
    year: "2024",
    
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "The development and implementation of a custom-tailored suicide response training for Muslim communities",
    authors:
      "Awaad, Rania, Mona Midani, Tasmeer Ali, Munjireen S. Sifat, and Mawdah Albatnuni.",
    journal: "Journal of Religion and Health",
    year: "2024",
    
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "Developing a suicide crisis response team in America: an Islamic perspective",
    authors:
      "Awaad, Rania, Zuha Durrani, Yasmeen Quadri, Munjireen S. Sifat, Anwar Hussein, Taimur Kouser, Osama El-Gabalawy, Neshwa Rajeh, and Sana Shareef.",
    journal: "Journal of Religion and Health",
    year: "2024",
    
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "An exploratory qualitative analysis of the Stanford-Templeton convenings on Islam and suicide",
    authors:
      "Awaad, R., Quadri, Y., Sifat, M., Elzamzamy, K., Suleiman, K., Rehman, O., Husain, A., Abdelrehim, A., Rushdi, R., Belanger, C.C. and Hill, T.D.",
    journal: "Journal of Religion and Health",
    year: "2024",
    
    doi: "N/A",
    pmid: "N/A",
  },

  // 2023
  {
    title:
      "Associations Between Family Factors, Social Integration, and Suicidal Ideation Across the Life Course of an Urban African American Cohort",
    authors: "Sifat, M. S., Kuo, C., Yoo, J. H., Holder, S., & Green, K. M.",
    journal: "Journal of Black Psychology",
    year: "2023",
    
    doi: "https://doi.org/10.1177/00957984221150062",
    pmid: "N/A",
  },
  {
    title:
      "Varenicline Combined With Oral Nicotine Replacement Therapy and Smartphone-Based Medication Reminders for Smoking Cessation: Feasibility Randomized Controlled Trial",
    authors:
      "Sifat M, Hébert ET, Ahluwalia JS, Businelle MS, Waring JJC, Frank-Pearce SG, Bryer C, Benson L, Madison S, Planas LG, Baranskaya I, Kendzor DE.",
    journal: "JMIR Formative Research",
    year: "2023",
    
    doi: "https://doi.org/10.2196/48857",
    pmid: "37889541",
  },
  {
    title: "Impacts Of Census Categories On Muslim American Health",
    authors:
      "Awaad, Rania, Neshwa B. Rajeh, Kubra Cabuk, Munjireen Sifat, Ali Raza Khan.",
    journal: "Health Affairs Forefront",
    year: "2023",
    
    doi: "https://doi.org/10.1377/forefront.20230614.685636",
    pmid: "N/A",
  },
  {
    title:
      "Satisfaction with Online/In-person Social Interactions and Psychological Well-being: The Mediating Role of Social Connectedness",
    authors:
      "Abebe, Israel; Wang, Yu-Wei; O'Connor, Seini; Cruz, Tiana; Keum, Brian; Sifat, Munjireen.",
    journal: "Current Psychology",
    year: "2023",
    
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "The Association of Cultural Identification with Obesity among African Americans",
    authors:
      "Nolan, M., Waring, J.J., Noble, B., Bradley, D., Olurotimi, O., Fronheiser, J., Sifat, M., Boozary, L.K., McQuoid, J., Kendzor, D.E. and Alexander, A.C.",
    journal: "Journal of Racial and Ethnic Health Disparities",
    year: "2023",
    
    doi: "https://doi.org/10.1007/s40615-023-01615-4",
    pmid: "N/A",
  },
  {
    title: "Cannabis Use Among Adults Undergoing Cancer Treatment",
    authors:
      "Azizoddin, D.R., Cohn, A.M., Ulahannan, S.V., Henson, C.E., Alexander, A.C., Moore, K.N., Holman, L.L., Boozary, L.K., Sifat, M.S., and Kendzor, D.E.",
    journal: "Cancer",
    year: "2023",
    
    doi: "https://doi.org/10.1002/cncr.34922",
    pmid: "N/A",
  },
  {
    title:
      "An Examination of Barriers to Accessing Mental Health Care, and Their Association with Depression, Stress, Suicidal Ideation, and Wellness in a Bangladeshi University Student Sample",
    authors: "Sifat M, Huq M, Baig M, Tasnim N, Green K.",
    journal:
      "International Journal of Environmental Research and Public Health",
    year: "2023",
    
    doi: "https://doi.org/10.3390/ijerph20020904",
    pmid: "36673660",
  },
  {
    title:
      "Greater Discrimination Frequency and Lower Distress Tolerance Are Associated with Mental Health Problems Among Racially Privileged and Minoritized Adults Accessing an Urban Day Shelter",
    authors:
      "Sifat, M. S., Ehlke, S. J., Ogunsanya, M., Frank-Pearce, S. G., Boozary, L. K., Alexander, A. C., Businelle, M. S., & Kendzor, D. E.",
    journal: "Journal of Racial and Ethnic Health Disparities",
    year: "2023",
    
    doi: "https://doi.org/10.1007/s40615-022-01496-z",
    pmid: "N/A",
  },
  {
    title:
      "Mobile health (mHealth) interventions in prostate cancer survivorship: a scoping review",
    authors:
      "Ogunsanya, M. E., Sifat, M., Bamidele, O. O., Ezenwankwo, E. F., Clifton, S., Ton, C., Knight, J. M., Odedina, F. T., Greer, J. A., Dwyer, K., & Kendzor, D. E.",
    journal: "Journal of Cancer Survivorship",
    year: "2023",
    
    doi: "https://doi.org/10.1007/s11764-022-01328-3",
    pmid: "N/A",
  },

  // 2022
  {
    title:
      "Co-Occurring Intimate Partner Violence and Child Abuse in Eastern Democratic Republic of Congo: The Influence of Early Life Experiences of Abuse",
    authors:
      "Falb, K. L., Blackwell, A., Hategekimana, J. de D., Sifat, M., Roth, D., & O'Connor, M.",
    journal: "Violence Against Women",
    year: "2022",
    
    doi: "https://doi.org/10.1177/10778012221145302",
    pmid: "N/A",
  },
  {
    title:
      "Tobacco use characteristics, treatment preferences, and motivation to quit among adults accessing an urban day shelter in Oklahoma City",
    authors:
      "Boozary, L.K., Frank-Pearce, S. G., Alexander, A.C., Sifat, M.S., Kurien, J., Waring, J.J.C., Ehlke, S.J., Businelle, M.S., Ahluwalia, J.S., Kendzor, D.E.",
    journal: "Drug and Alcohol Dependence Reports",
    year: "2022",
    
    doi: "https://doi.org/10.1016/j.dadr.2022.100117",
    pmid: "N/A",
  },
  {
    title:
      "Single-use, co-use, and polysubstance use of alcohol, tobacco, and cannabis in sexual minority and heterosexual females",
    authors:
      "Ehlke, S. J., Kendzor, D. E., Smith, M. A., Sifat, M. S., Boozary, L. K., & Cohn, A. M.",
    journal: "The American Journal on Addictions",
    year: "2022",
    
    doi: "https://doi.org/10.1111/ajad.13344",
    pmid: "N/A",
  },
  {
    title:
      "The Role of Adolescent Anxious Mood, Marijuana Use, and Locus of Control in the School to Prison Pipeline",
    authors: "Holder, S., Sifat, M., Green, K.",
    journal: "Education and Urban Society",
    year: "2022",
    
    doi: "https://doi.org/10.1177/00131245221124871",
    pmid: "N/A",
  },
  {
    title:
      "A qualitative exploration of university student perspectives on mindfulness-based stress reduction exercises via smartphone app in Bangladesh",
    authors: "Sifat, M.S., Tasnim, N., Stoebenau, K., Green, K.M.",
    journal:
      "International Journal of Qualitative Studies on Health and Well-being",
    year: "2022",
    
    doi: "https://doi.org/10.1080/17482631.2022.2113015",
    pmid: "N/A",
  },
  {
    title:
      "Pandemic-related stress is associated with poor mental health outcomes among African Americans",
    authors:
      "Brewer, K., Waring, J.J.C., Noble, B., Bradley, D., Olurotimi, O., Fronheiser, J., Sifat, M., Ehlke, S.J., Boozary, L.K., McQuoid, J., Kendzor, D. & Alexander, A.C.",
    journal: "Journal of Racial and Ethnic Health Disparities",
    year: "2022",
    
    doi: "https://doi.org/10.1007/s40615-022-01383-7",
    pmid: "N/A",
  },
  {
    title:
      "Perceptions of Mental Health and Exploring the Role of Social Activism Among African Americans Exposed to Media Coverage of Police Brutality and Protests",
    authors:
      "Alexander, A.C., Waring, J.J.C., Noble, B., Bradley, D. Olurotimi, O., Fronheiser, J., Sifat, M., Ehlke, S.J., Boozary, L.K., McQuoid, J., & Kendzor, D.E.",
    journal: "Journal of Racial and Ethnic Health Disparities",
    year: "2022",
    
    doi: "https://doi.org/10.1007/s40615-022-01326-2",
    pmid: "N/A",
  },
  {
    title:
      "Motivations and Barriers for Clinical Mental Health Help-Seeking in Bangladeshi University Students, A Cross-Sectional Study",
    authors:
      "Sifat, M., Tasnim, N., Hoque, N., Saperstein, S., Stoebenau, K., Shin, R., Feldman, R., Green, K.",
    journal: "Global Mental Health",
    year: "2022",
    
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "Motivations Toward Using Digital Health and Exploring the Possibility of Using Digital Health for Mental Health in Bangladesh University Students: Cross-sectional Questionnaire Study",
    authors: "Sifat MS, Saperstein SL, Tasnim N, Green KM.",
    journal: "JMIR Formative Research",
    year: "2022",
    
    doi: "https://doi.org/10.2196/34901",
    pmid: "35254267",
  },

  // 2019-2021
  {
    title:
      "Beyond Performative Activism- An Exploration of Motivators to Participate Social Media Activism Through the Lens of Self-Determination Theory",
    authors: "Sifat, M., Chiang, S., Irfan, A., Green, K.",
    journal: "Harvard Public Health Review",
    year: "2021",
    
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "Misinformation, health equity, news media: application of critical race theory (CRT) to examine news media's role in normalizing religious bigotry",
    authors: "Irfan A, Sifat M, Brown Z.",
    journal: "Harvard Public Health Review",
    year: "2020",
    
    doi: "N/A",
    pmid: "N/A",
  },
  {
    title:
      "Engaging Children to Support Parental Weight Loss: A Randomized Trial",
    authors:
      "Winston, G., Sifat, M., Phillips, E., Dietz, W., Wikner, E., Barrow, M., Khurana, K., & Charlson, M.",
    journal: "Health Education & Behavior",
    year: "2019",
    
    doi: "https://doi.org/10.1177/1090198119853005",
    pmid: "N/A",
  },
  {
    title:
      "Explaining continuity in substance use: The role of criminal justice system involvement over the life course of an urban African American prospective cohort",
    authors: "Green, K. M., Doherty, E. E., Sifat, M. S., & Ensminger, M. E.",
    journal: "Drug and Alcohol Dependence",
    year: "2019",
    
    doi: "https://doi.org/10.1016/j.drugalcdep.2018.09.033",
    pmid: "N/A",
  },
];

export const citations: Publication[] = [
  {
    title:"Sociodemographic Correlates of Cancer-Related Beliefs Among Chinese Speaking Adults in Greater Philadelphia",
    authors:"Song, Y., Sifat, M., Phan, L. et al",
    journal:"J. Racial and Ethnic Health Disparities",
    year:'2025',
    doi:"https:\/\/doi.org\/10.1007\/s40615-025-02565-9",
    category:"Cancer Prevention & Control, Health Equity & Social Determinants of Health",
    subcategory:"Faith & Cultural Contexts in Health"
  },
  {
    title:"Does parental racial socialization protect Black youth from the impact of racism on problematic substance use over the long term?\u00a0Cultural Diversity & Ethnic Minority Psychology",
    authors:"Kuo, C., Ahn, L. H., Sifat, M., & Green, K. M.",
    journal:"Advance online publication",
    year:'2025',
    doi:"https:\/\/doi.org\/10.1037\/cdp0000759",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory:"Faith & Cultural Contexts in Health"
  },
  {
    title:"E-Cigarette Switching and Financial Incentives to Promote Combustible Cigarette Cessation Among Adults Accessing Shelter Services: a Pilot Study",
    authors:"Sifat, M, Adam C. Alexander,Michael S. Businelle, Summer G. Frank-Pearce, Laili Kharazi Boozary, Theodore L. Wagener, Jasjit S. Ahluwalia, and Darla E. Kendzor",
    journal:"Drug Abuse and Dependence Reports",
    year: '',
    doi:"",
    category:"Cancer Prevention & Control, Health Equity & Social Determinants of Health, Access to Care & Service Navigation",
    subcategory:"Tobacco Control & Harm Reduction, Implementation Science & Systems Change"
  },
  {
    title:"The Association of Migration-Related Stress with Poor Mental Health Among Recently Resettled Afghan Refugees",
    authors:"Sifat M, Kenney S, Chiang S, Boozary L, Ogusunya M, Alexander A, Kendzor D.",
    journal:"Journal of Migration and Health",
    year:'2024',
    doi:"",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory:"Refugee & Migrant Health"
  },
  {
    title:"",
    authors:"Wang, Y. W., Abebe, I., Cruz, T. E., Ar\u00e9valo Avalos, M. R., Sifat, M., Abdelwahab, S., & Li, T. (2024). College Students\u2019 Coping, Resilience, Well-Being, Academic Experiences, and Help-Seeking Attitudes During COVID-19. The Counseling Psychologist, 52(8), 1239-1278",
    journal:"",
    year:'2024',
    doi:"",
    category:"Behavioral & Mental Health",
    subcategory: ''
  },
  {
    title:"Addictive Behaviors Reports Journal",
    authors:"Ogunsanya ME, Frank-Pearce S, Chen S, Sifat M, Cohn AM, Businelle MS, Kendzor DE. (2024). The influence of sociodemographic, tobacco use, and mental health characteristics on treatment adherence among adults enrolled in a community-based tobacco cessation program",
    journal:"",
    year:'2024',
    doi:"",
    category:"Cancer Prevention & Control, Health Equity & Social Determinants of Health, Digital & Mobile Health Interventions, Behavioral & Mental Health, Access to Care & Service Navigation",
    subcategory:"Tobacco Control & Harm Reduction"
  },
  {
    title:"Incentivizing Tobacco Helpline Engagement in Persistent Poverty Counties: A Randomized Trial",
    authors:"Kendzor, D. E., Davie, M., Chen, M., Hart, J., Frank-Pearce, S. G., Doescher, M. P., Alexander, A. C., Businelle, M. S., Ogunsanya, M. E., Sifat, M. S., Boozary, L. K.",
    journal:"American Journal of Preventive Medicine",
    year:'2024',
    doi:"",
    category:"Cancer Prevention & Control, Health Equity & Social Determinants of Health, Access to Care & Service Navigation",
    subcategory:"Tobacco Control & Harm Reduction, Implementation Science & Systems Change"
  },
  {
    title:"Small financial incentives for smoking cessation among socioeconomically disadvantaged adults: A randomized controlled trial",
    authors:"Kendzor, D. E ., Frank-Pearce, S. G., Waring, J. J.C., Chen, S., Hebert, E. T., Swartz, M. D., Alexander, A. C., Sifat, M. S., Boozary, L. K., Wetter, D. W.",
    journal:"JAMA Network Open",
    year:'2024',
    doi:"",
    category:"Cancer Prevention & Control",
    subcategory:"Tobacco Control & Harm Reduction, Implementation Science & Systems Change"
  },
  {
    title:"Reaching the unheard: overcoming challenges in health research with hard-to-reach populations",
    authors:"Bekteshi, V., Sifat, M. and Kendzor, D.E., 2024",
    journal:"International Journal for Equity in Health, 23(1), p.61",
    year:'2024',
    doi:"",
    category:"Health Equity & Social Determinants of Health",
    subcategory: ''
  },
  {
    title:"The development and implementation of a custom-tailored suicide response training for Muslim communities",
    authors:"Awaad, Rania, Mona Midani, Tasmeer Ali, Munjireen S. Sifat, and Mawdah Albatnuni",
    journal:"Journal of religion and health (2024): 1-13",
    year:'2024',
    doi:"",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory:"Faith & Cultural Contexts in Health, Implementation Science & Systems Change"
  },
  {
    title:"Developing a suicide crisis response team in America: an Islamic perspective",
    authors:"Awaad, Rania, Zuha Durrani, Yasmeen Quadri, Munjireen S. Sifat, Anwar Hussein, Taimur Kouser, Osama El-Gabalawy, Neshwa Rajeh, and Sana Shareef",
    journal:"Journal of religion and health (2024): 1-17",
    year:'2024',
    doi:"",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory:"Faith & Cultural Contexts in Health"
  },
  {
    title:"An exploratory qualitative analysis of the Stanford-Templeton convenings on Islam and suicide",
    authors:"Awaad, R., Quadri, Y., Sifat, M., Elzamzamy, K., Suleiman, K., Rehman, O., Husain, A., Abdelrehim, A., Rushdi, R., Belanger, C.C. and Hill, T.D., 2024",
    journal:"Journal of religion and health, pp.1-14",
    year:'2024',
    doi:"",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory:"Faith & Cultural Contexts in Health"
  },
  {
    title:"",
    authors:"Sifat, M. S., Kuo, C., Yoo, J. H., Holder, S., & Green, K. M. (2023). Associations Between Family Factors, Social Integration, and Suicidal Ideation Across the Life Course of an Urban African American Cohort. Journal of Black Psychology, 49(3), 404-429",
    journal:"",
    year:'2023',
    doi:"",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory:"Faith & Cultural Contexts in Health, Implementation Science & Systems Change"
  },
  {
    title:"Varenicline Combined With Oral Nicotine Replacement Therapy and Smartphone-Based Medication Reminders for Smoking Cessation: Feasibility Randomized Controlled Trial JMIR Form Res 2023;7:e48857",
    authors:"Sifat M, H\u00e9bert ET, Ahluwalia JS, Businelle MS, Waring JJC, Frank-Pearce SG, Bryer C, Benson L, Madison S, Planas LG, Baranskaya I, Kendzor DE",
    journal:"",
    year:'2023',
    doi:"",
    category:"Cancer Prevention & Control, Digital & Mobile Health Interventions",
    subcategory:"Tobacco Control & Harm Reduction, Implementation Science & Systems Change"
  },
  {
    title:"(2023) Impacts Of Census Categories On Muslim American Health",
    authors:"Rania Awaad, Neshwa B. Rajeh, Kubra Cabuk, Munjireen Sifat, Ali Raza Khan",
    journal:"Health Affairs Forefront",
    year:'2023',
    doi:"https:\/\/doi.org\/10.1377\/forefront.20230614.685636",
    category:"Health Equity & Social Determinants of Health",
    subcategory:"Faith & Cultural Contexts in Health"
  },
  {
    title:"Satisfaction with Online\/In-person Social Interactions and Psychological Well-being: The Mediating Role of Social Connectedness",
    authors:"Abebe, Israel; Wang, Yu-Wei; O\u2019Connor, Seini; Cruz, Tiana; Keum, Brian; Sifat, Munjireen.",
    journal:"Current Psychology",
    year:'2023',
    doi:"",
    category:"Behavioral & Mental Health",
    subcategory: ''
  },
  {
    title:"The Association of Cultural Identification with Obesity among African Americans",
    authors:"Nolan, M., Waring, J.J., Noble, B., Bradley, D., Olurotimi, O., Fronheiser, J., Sifat, M., Boozary, L.K., McQuoid, J., Kendzor, D.E. and Alexander, A.C., 2023",
    journal:"Journal of Racial and Ethnic Health Disparities, pp.1-9",
    year:'2023',
    doi:"https:\/\/doi.org\/10.1007\/s40615-023-01615-4",
    category:"Health Equity & Social Determinants of Health",
    subcategory:"Faith & Cultural Contexts in Health"
  },
  {
    title:"Cannabis Use Among Adults Undergoing Cancer Treatment",
    authors:"Desiree R. Azizoddin, Amy M. Cohn, Susanna V. Ulahannan, Christina E. Henson, Adam C. Alexander, Kathleen N. Moore, Laura L. Holman, Laili Kharazi Boozary, Munjireen S. Sifat, and Darla E. Kendzor.",
    journal:"Cancer",
    year:'2023',
    doi:"https:\/\/doi.org\/10.1002\/cncr.34922",
    category:"Cancer Prevention & Control",
    subcategory: ''
  },
  {
    title:"International Journal of Environmental Research and Public Health",
    authors:"Sifat M, Huq M, Baig M, Tasnim N, Green K. An Examination of Barriers to Accessing Mental Health Care, and Their Association with Depression, Stress, Suicidal Ideation, and Wellness in a Bangladeshi University Student Sample",
    journal:"2023; 20(2):904",
    year:'2023',
    doi:"https:\/\/doi.org\/10.3390\/ijerph20020904",
    category:"Behavioral & Mental Health, Access to Care & Service Navigation",
    subcategory: ''
  },
  {
    title:"Greater Discrimination Frequency and Lower Distress Tolerance Are Associated with Mental Health Problems Among Racially Privileged and Minoritized Adults Accessing an Urban Day Shelter",
    authors:"Sifat, M. S., Ehlke, S. J., Ogunsanya, M., Frank-Pearce, S. G., Boozary, L. K., Alexander, A. C., Businelle, M. S., & Kendzor, D. E.",
    journal:"Journal of racial and ethnic health disparities, 10.1007\/s40615-022-01496-z. Advance online publication",
    year:'2023',
    doi:"https:\/\/doi.org\/10.1007\/s40615-022-01496-z",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory: ''
  },
  {
    title:"Mobile health (mHealth) interventions in prostate cancer survivorship: a scoping review",
    authors:"Ogunsanya, M. E., Sifat, M., Bamidele, O. O., Ezenwankwo, E. F., Clifton, S., Ton, C., Knight, J. M., Odedina, F. T., Greer, J. A., Dwyer, K., & Kendzor, D. E.",
    journal:"Journal of cancer survivorship : research and practice,",
    year: '2023',
    doi:"https:\/\/doi.org\/10.1007\/s11764-022-01328-3",
    category:"Cancer Prevention & Control, Digital & Mobile Health Interventions",
    subcategory: ''
  },
  {
    title:"Co-Occurring Intimate Partner Violence and Child Abuse in Eastern Democratic Republic of Congo: The Influence of Early Life Experiences of Abuse",
    authors:"Falb, K. L., Blackwell, A., Hategekimana, J. de D., Sifat, M., Roth, D., & O\u2019Connor, M.",
    journal:"Violence Against Women, 0(0)",
    year:'2022',
    doi:"https:\/\/doi.org\/10.1177\/10778012221145302",
    category:"Other Publications",
    subcategory:''
  },
  {
    title:"",
    authors:"Boozary, L.K., Frank-Pearce, S. G., Alexander, A.C., Sifat, M.S., Kurien, J., Waring, J.J.C., Ehlke, S.J., Businelle, M.S., Ahluwalia, J.S., Kendzor, D.E. (2022). Tobacco use characteristics, treatment preferences, and motivation to quit among adults accessing an urban day shelter in Oklahoma City. Drug and Alcohol Dependence Reports",
    journal:"",
    year:'2022',
    doi:"https:\/\/doi.org\/10.1016\/j.dadr.2022.100117",
    category:"Cancer Prevention & Control, Health Equity & Social Determinants of Health",
    subcategory:"Tobacco Control & Harm Reduction"
  },
  {
    title:"The American Journal on Addictions",
    authors:"Ehlke, S. J., Kendzor, D. E., Smith, M. A., Sifat, M. S., Boozary, L. K., & Cohn, A. M. (2022). Single-use, co-use, and polysubstance use of alcohol, tobacco, and cannabis in sexual minority and heterosexual females",
    journal:"",
    year:'2022',
    doi:"https:\/\/doi.org\/10.1111\/ajad.13344",
    category:"Cancer Prevention & Control, Behavioral & Mental Health",
    subcategory:"Tobacco Control & Harm Reduction"
  },
  {
    title:"",
    authors:"Holder, S., Sifat, M., Green, K. (2022) The Role of Adolescent Anxious Mood, Marijuana Use, and Locus of Control in the School to Prison Pipeline. Education and Urban Society",
    journal:"",
    year: '2022',
    doi:"https:\/\/doi.org\/10.1177\/00131245221124871",
    category:"Behavioral & Mental Health",
    subcategory: ''
  },
  {
    title:"A qualitative exploration of university student perspectives on mindfulness-based stress reduction exercises via smartphone app in Bangladesh International Journal of Qualitative Studies on Health and Well-being",
    authors:"Munjireen S. Sifat, Naima Tasnim, Kirsten Stoebenau, Kerry M. Green.",
    journal:"",
    year:'2022',
    doi:"https:\/\/doi.org\/10.1080\/17482631.2022.2113015",
    category:"Digital & Mobile Health Interventions, Behavioral & Mental Health",
    subcategory: ''
  },
  {
    title:"Pandemic-related stress is associated with poor mental health outcomes among African Americans",
    authors:"Khandis Brewer, Joseph J.C. Waring, Bishop Noble, David Bradley, Oluwakemi Olurotimi, Jack Fronheiser, Munjireen Sifat, Sarah J. Ehlke, Laili K. Boozary, Julia McQuoid, Darla Kendzor & Adam C. Alexander.",
    journal:"Journal of Racial and Ethnic Health Disparities",
    year:'2022',
    doi:"https:\/\/doi.org\/10.1007\/s40615-022-01383-7",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory:"Faith & Cultural Contexts in Health"
  },
  {
    title:"Perceptions of Mental Health and Exploring the Role of Social Activism Among African Americans Exposed to Media Coverage of Police Brutality and Protests",
    authors:"Alexander, A.C., Waring, J.J.C., Noble, B., Bradley, D. Olurotimi, O., Fronheiser, J., Sifat, M., Ehlke, S.J., Boozary, L.K., McQuoid, J., & Kendzor, D.E.",
    journal:"Journal of Racial and Ethnic Health Disparities",
    year:'2022',
    doi:"https:\/\/doi.org\/10.1007\/s40615-022-01326-2",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory:"Faith & Cultural Contexts in Health"
  },
  {
    title:"Global Mental Health",
    authors:"Munjireen Sifat, N Tasnim, N Hoque, S Saperstein, K Stoebenau, R Shin, R Feldman, K Green. (2022).Motivations and Barriers for Clinical Mental Health Help-Seeking in Bangladeshi University Students, A Cross-Sectional Study",
    journal:"",
    year:'2022',
    doi:"",
    category:"Behavioral & Mental Health, Access to Care & Service Navigation",
    subcategory: ''
  },
  {
    title:"Motivations Toward Using Digital Health and Exploring the Possibility of Using Digital Health for Mental Health in Bangladesh University Students: Cross-sectional Questionnaire Study",
    authors:"Sifat MS, Saperstein SL, Tasnim N, Green KM.",
    journal:"JMIR Form Res; 6(3):e34901. PMID: 35254267",
    year:'2022',
    doi:"https:\/\/doi.org\/10.2196\/34901",
    category:"Digital & Mobile Health Interventions, Behavioral & Mental Health",
    subcategory: ''
  },
  {
    title:"Beyond Performative Activism- An Exploration of Motivators to Participate Social Media Activism Through the Lens of Self-Determination Theory",
    authors:"M Sifat, S Chiang, A Irfan, K Green.",
    journal:"Harvard Public Health Review",
    year:'2021',
    doi:"https:\/\/hphr.org\/53-article-sifat\/",
    category:"Other Publications",
    subcategory: ''
  },
  {
    title:"Harvard Public Health Review",
    authors:"Irfan A, Sifat M, Brown Z. (2020). Misinformation, health equity, news media: application of critical race theory (CRT) to examine news media\u2019s role in normalizing religious bigotry",
    journal:"",
    year:'2020',
    doi:"https:\/\/harvardpublichealthreview.org\/misinformation_racism\/",
    category:"Health Equity & Social Determinants of Health",
    subcategory:"Faith & Cultural Contexts in Health"
  },
  {
    title:"Engaging Children to Support Parental Weight Loss: A Randomized Trial",
    authors:"Winston, G., Sifat, M., Phillips, E., Dietz, W., Wikner, E., Barrow, M., Khurana, K., & Charlson, M.",
    journal:"Health education & behavior: 46(5), 755\u2013762",
    year:'2019',
    doi:"https:\/\/doi.org\/10.1177\/1090198119853005",
    category:"Other Publications",
    subcategory:"Implementation Science & Systems Change"
  },
  {
    title:"Explaining continuity in substance use: The role of criminal justice system involvement over the life course of an urban African American prospective cohort",
    authors:"Green, K. M., Doherty, E. E., Sifat, M. S., & Ensminger, M. E.",
    journal:"Drug and alcohol dependence, 195, 74\u201381",
    year:'2019',
    doi:"https:\/\/doi.org\/10.1016\/j.drugalcdep.2018.09.033",
    category:"Health Equity & Social Determinants of Health, Behavioral & Mental Health",
    subcategory:"Faith & Cultural Contexts in Health, Implementation Science & Systems Change"
  }
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
  officeHours: "N/A", // TODO: Add office hours
};

export const contactSectionData = {
  title: "Contact & Collaboration",
  description:
    "We welcome collaboration opportunities with researchers, community organizations, and students dedicated to health equity. Reach out to discuss partnerships, research inquiries, or joining our team.",
  cardDescription:
    "Multiple ways to connect for research collaboration and academic inquiries",
};

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