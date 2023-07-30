import { Category } from "./category";

export default class Expense {
  value: number;
  date: Date;
  type: Category;
  location: string;
  paidBy: string

  constructor(type: Category, value: number, date: Date, location: string, paidBy: string) {
    if (value < 0) {
      throw new Error("Value can not be negative")
    }
    this.type = type;
    this.value = value;
    this.date = date;
    this.location = location;
    this.paidBy = paidBy;
  }

}
