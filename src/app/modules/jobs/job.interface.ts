export type TJobs = {
  title: string;
  slug: string;
  type: "Internship" | "Full time" | "Part time"; 
  duration?: string;
  salary?: string;
  date: string;
  category: string;
  location?: string;
  vacancy?: string; 
  
  experience?: string;
  about?: string;
  qualifications?: string[];
  responsibilities?: string[];
  benefits?: string[];
};
