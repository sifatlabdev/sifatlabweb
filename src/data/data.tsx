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
import aboutDataRaw from "../content/about.json";
import teachingDataRaw from "../content/teaching.json";
import labDataRaw from "../content/lab.json";
import navigationDataRaw from "../content/navigation.json";
import footerDataRaw from "../content/footer.json";
import joinUsDataRaw from "../content/join-us.json";
import researchSectionDataRaw from "../content/research-section.json";
import publicEngagementSectionDataRaw from "../content/public-engagement-section.json";
import teamSectionDataRaw from "../content/team-section.json";

// Types
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

// Exports
export const heroData: HeroData = heroDataRaw as HeroData;
export const aboutData = aboutDataRaw;
export const education: Education[] = (
  educationsDataRaw as ItemsWrapper<Education>
).items;
export const experience: Experience[] = (
  experiencesDataRaw as ItemsWrapper<Experience>
).items;
export const teachingExperience: TeachingCourse[] = (
  teachingDataRaw as ItemsWrapper<TeachingCourse>
).items;
export const labDirector: TeamMember = teamData.labDirector as TeamMember;
export const universityCollaborators: TeamMember[] =
  teamData.universityCollaborators as TeamMember[];
export const externalCollaborators: TeamMember[] =
  teamData.externalCollaborators as TeamMember[];
export const graduateResearchers: TeamMember[] =
  teamData.graduateResearchers as TeamMember[];
export const teamSectionData = teamSectionDataRaw;
export const chenLabData = labDataRaw;
export const jeffersonProjects: JeffersonProject[] = (
  projectsDataRaw as ItemsWrapper<JeffersonProject>
).items;
export const socialImpactProjects: JeffersonProject[] = (
  socialProjectsDataRaw as ItemsWrapper<JeffersonProject>
).items;
export const researchSectionData = researchSectionDataRaw;
export const contributions: ContributionToScience[] = (
  contributionsDataRaw as ItemsWrapper<ContributionToScience>
).items;
export const otherPublications: Publication[] = (
  publicationsDataRaw as ItemsWrapper<Publication>
).items;
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
export const publicEngagementSectionData = publicEngagementSectionDataRaw;
export const publicEngagementData: PublicEngagementYear[] = (
  publicEngagementDataRaw as ItemsWrapper<PublicEngagementYear>
).items;
export const navigationData = navigationDataRaw.items;
export const footerData = footerDataRaw;
export const joinUsData = joinUsDataRaw;
