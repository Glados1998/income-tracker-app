export interface ITransaction {
  id: number;
  type: "income" | "expense";
  amount: number;
  description?: string;
  category: string;
  recurring: boolean;
  currency: string;
  date: Date;
}
