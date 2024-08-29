export interface ITransaction {
  id?: number;
  type: "income" | "expense";
  amount: number;
  category: string;
  recurring: boolean;
  recurringDate?: Date;
  currency: string;
  date: Date;
}
