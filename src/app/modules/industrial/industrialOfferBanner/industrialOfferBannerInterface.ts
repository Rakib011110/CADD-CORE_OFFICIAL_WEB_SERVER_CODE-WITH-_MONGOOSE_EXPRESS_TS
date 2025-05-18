
export interface IIndustrialOfferBanner {
    _id?: string;
    title: string;
    description: string;
    buyNowText?: string;
    learnMoreText?: string;
    date?: string; // "YYYY-MM-DD"
    time?: string; // "HH:MM"
    remainingDays?: number;
    photoUrl: string;
    createdAt?: string;
    updatedAt?: string;
  }
  