const API_URL = "http://localhost:3000";
export const CV_URL = `${API_URL}/uploads/resume.pdf`;
export const PROFILE_IMAGE_URL =
  "https://i.ibb.co.com/DPQyMcV7/Firefly-20240528080315-fotor-bg-remover-20240sfdds52882431-removebg-preview-removebg-preview.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags: string[];
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
  location?: string;
}

export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSkills = async (): Promise<Skill[]> => {
  try {
    const response = await fetch(`${API_URL}/skills`);
    if (!response.ok) {
      throw new Error("Failed to fetch skills");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getExperience = async (): Promise<Experience[]> => {
  try {
    const response = await fetch(`${API_URL}/experience`);
    if (!response.ok) {
      throw new Error("Failed to fetch experience");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getEducation = async (): Promise<Education[]> => {
  try {
    const response = await fetch(`${API_URL}/education`);
    if (!response.ok) {
      throw new Error("Failed to fetch education");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export interface ProfileSummary {
  id: number;
  content: string;
}

export const getProfileSummary = async (): Promise<ProfileSummary> => {
  try {
    const response = await fetch(`${API_URL}/profile-summary`);
    if (!response.ok) {
      throw new Error("Failed to fetch profile summary");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return { id: 0, content: "" };
  }
};
