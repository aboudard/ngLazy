export interface Bill {
    id: string;
    name: string;
    amount: number;
    date: Date;
    pending?: boolean;
  }