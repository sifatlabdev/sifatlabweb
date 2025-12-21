import heroImage from "../assets/images/heroImage.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import labimg from "../assets/images/labimg.jpg";
import pubImage from "../assets/images/pubImage.jpg";
import pubImage2 from "../assets/images/pubImage2.jpg";

// Import JSON data
import educationsDataRaw from "../content/educations.json";
import experiencesDataRaw from "../content/experiences.json";
import teamData from "../content/team.json";
import projectsDataRaw from "../content/projects.json";
import socialProjectsDataRaw from "../content/social-projects.json";
import publicationsDataRaw from "../content/publications.json";
import contributionsDataRaw from "../content/contributions.json";
import publicEngagementDataRaw from "../content/public-engagement.json";
import heroDataRaw from "../content/hero.json";
import contactDataRaw from "../content/contact.json";

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

type ItemsWrapper<T> = {
  items: T[];
};

// ============================================================================
// HERO DATA
// ============================================================================
// ✅ Imported from JSON
export const heroData: HeroData = {
  ...heroDataRaw,
  image: heroImage, // Map string reference to actual image import
} as HeroData;

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
// ✅ Imported from JSON
export const education: Education[] = (
  educationsDataRaw as ItemsWrapper<Education>
).items;

// ============================================================================
// EXPERIENCE DATA
// ============================================================================
// ✅ Imported from JSON
export const experience: Experience[] = (
  experiencesDataRaw as ItemsWrapper<Experience>
).items;

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

// Map image strings to actual imports
const imageMap: Record<string, string> = {
  heroImage: heroImage,
  img1: img1,
  img2: img2,
  img3: img3,
};

export const labDirector: TeamMember = {
  ...teamData.labDirector,
  image: imageMap[teamData.labDirector.image as string] || heroImage,
} as TeamMember;

export const universityCollaborators: TeamMember[] =
  teamData.universityCollaborators.map((member) => ({
    ...member,
    image: imageMap[member.image as string] || img1,
  }));

export const externalCollaborators: TeamMember[] =
  teamData.externalCollaborators.map((member) => ({
    ...member,
    image: imageMap[member.image as string] || img2,
  }));

export const graduateResearchers: TeamMember[] =
  teamData.graduateResearchers.map((member) => ({
    ...member,
    image: imageMap[member.image as string] || img3,
  }));

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
export const jeffersonProjects: JeffersonProject[] = (
  projectsDataRaw as ItemsWrapper<JeffersonProject>
).items;
// ============================================================================
// Social Impact Initiatives (Current Institution Only)
// ============================================================================
// ✅ COMPLETE
export const socialImpactProjects: JeffersonProject[] = (
  socialProjectsDataRaw as ItemsWrapper<JeffersonProject>
).items;

// ============================================================

export const researchSectionData = {
  title: "Publications",
  description:
    "Our work addresses health equity through tobacco cessation, cancer prevention, mental health interventions, and digital health solutions. Browse our peer-reviewed publications spanning multiple disciplines.",
};

export const contributions: ContributionToScience[] = (
  contributionsDataRaw as ItemsWrapper<ContributionToScience>
).items;

export const otherPublications: Publication[] = (
  publicationsDataRaw as ItemsWrapper<Publication>
).items;

// ============================================================================
// CONTACT INFO
// ============================================================================
// ⚠️ PARTIALLY COMPLETE - Missing phone and office hours
export const contactInfo: ContactInfo = {
  email: contactDataRaw.email,
  officeLocation: contactDataRaw.officeLocation,
  officeHours: contactDataRaw.officeHours,
} as ContactInfo;

export const contactSectionData = {
  title: contactDataRaw.sectionTitle,
  description: contactDataRaw.sectionDescription,
  cardDescription: contactDataRaw.cardDescription,
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
export const publicEngagementData: PublicEngagementYear[] = (
  publicEngagementDataRaw as ItemsWrapper<PublicEngagementYear>
).items;

// ============================================================================
// NAVIGATION DATA
// ============================================================================

export const navigationData = [
  { label: "About Me", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Publications", path: "/publications" },
  { label: "Social Impact Initiatives", path: "/socialimpactprojects" },
  { label: "Public Engagement", path: "/publicengagement" },
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

// ============================================================
// META DATA
// ============================================================
