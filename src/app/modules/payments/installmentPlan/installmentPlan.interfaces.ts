
export interface IInstallmentPlan  {
  name: string;               // e.g. 'full', '2x', '3x'
  installments: number;       // 1, 2, 3
  discountPercent: number;    // e.g. 40, 20, 10
  isActive: boolean;
}
