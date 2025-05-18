
export type IInstructorHire = {
  name: string;
  email: string;
  expertise: string;
  phone: string;
  experience: 'beginner' | 'intermediate' | 'expert';
  message: string;
  cvUrl: string;
  review?: 'ongoing' | 'completed' 
} 