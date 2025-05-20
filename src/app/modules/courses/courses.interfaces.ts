export type TCourse = {
  _id?: string;
  title?: string;
  slug?: string;
  categories?: string;
  batch?: string;
  courseBanner?:"string";
  duration?: string;
  lessons?: string;
  photoUrl?: string;
  projects?: string;
  description?: string;
   courseFee: number;
  
  courseDiscount?: string;
  scholar:string;
  schedule?: {
    startingDate?: string;
    mode?: string;
    days?: string;
    time?: string;
  };

  overview?: {
    overviewDescription?: string;
    videoUrl?: string;
  };

  courseIncludes?: {
    duration?: string;
    weeklyLiveClasses?: string;
    weeklyClassHours?: string;
  };

  topicsCovered?: {
    topicTitle?: string;
    topicDescription?: string;
  }[];

  softwaresTaught?: {
    softwareTitle?: string;
    photoUrl?: string;
  }[];

  expertPanel?: {
    advisors?: {
      name?: string;
      title?: string;
      photoUrl?: string;
    }[];
    teachers?: {
      name?: string;
      role?: string;
      photoUrl?: string;
    }[];
  };

  learningProject?: {
    title?: string;
    description?: string;
    photoUrl?: string;
  }[];

  freeTrainingSessions?: {
    title?: string;
    videoUrl?: string;
  }[];

  // ✅ These two were missing
  InternationaldemoCertificate?: {
    certificateTitle?: string;
    certificateOverview?: string;
    photoUrl?: string;
  }[];

  demoCertificate?: {
    title?: string;
    photoUrl?: string;
  }[];


  faqs?: {
    question?: string;
    answer?: string;
  }[];

  createdAt?: Date;
  updatedAt?: Date;
};
