import { ObjectId } from "mongoose";

export enum AcademicQualification {
  DiplomaInCivil = "Diploma in Civil",
  DiplomaInArchitecture = "Diploma in Architecture",
  DiplomaInMechanical = "Diploma in Mechanical",
  DiplomaInElectrical = "Diploma in Electrical",
  DiplomaInComputer = "Diploma in Computer",
  BArch = "Bachelor of Architecture (B.Arch)",
  BScInCivil = "Bachelor of Science in Civil Engineering",
  BScInMechanical = "Bachelor of Science in Mechanical Engineering",
  BScInElectrical = "Bachelor of Science in Electrical Engineering",
  BScInComputer = "Bachelor of Science in Computer Engineering",
  MScInEngineering = "Master of Science in Engineering",
  BBA = "Bachelor of Business Administration (BBA)",
  MBA = "Master of Business Administration (MBA)",
  BScInArchitecture = "Bachelor of Science in Architecture",
  BScInConstruction = "Bachelor of Science in Construction Management",
  BScInEnvironmental = "Bachelor of Science in Environmental Engineering",
  MScInArchitecture = "Master of Science in Architecture",
  MScInConstruction = "Master of Science in Construction Management",
  MScInCivil = "Master of Science in Civil Engineering",
  Others = "Others",
}

export interface IApplication {
  jobId: ObjectId;
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  resumeLink: string;
  academicQualifications: string 
  presentAddress: string;
  portfolio: string;
  whyHireYou:string; 
  exprience: string;
  vacancy: string;
  certifications:string[]
  softSkills: string[]; 
  hardSkills: string[]; 
}
