export interface Transaction {
  id: string;
  text: string;
  amount: number | number;
  userId: string;
  createdAt: Date;
}
