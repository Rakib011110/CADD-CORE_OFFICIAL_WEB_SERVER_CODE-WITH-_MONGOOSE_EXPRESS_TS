export type ICertificateApplications = {
    certificateId?: string;
    studentId: string;
    studentName: string;
    courseName: string;
    issueDate?: string | Date; // optional if admin sets it later
    instructorName: string;
    status: "pending" | "approved" | "rejected" | "applied";
    comment?: string;
    photoUrl?: string;
    appliedAt?: Date;
    approvedAt?: Date;
  };
  