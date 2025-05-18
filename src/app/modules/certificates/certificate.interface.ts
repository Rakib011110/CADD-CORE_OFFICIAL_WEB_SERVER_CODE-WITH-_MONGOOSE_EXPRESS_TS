export type ICertificate = {
    certificateId?: string;
    studentId: string;
    studentName: string;
    courseName: string;
    issueDate: string | Date;
    instructorName: string;
    status: 'pending' | 'issued' | 'revoked' | 'applied' | 'approved' | 'rejected'; 
    comment?: string;
    photoUrl?: string;
    appliedAt?: Date;
    approvedAt?: Date;
   
  };
  