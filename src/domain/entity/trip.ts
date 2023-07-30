import { Category } from "./category";
import Expense from "./expense";

export default class Trip {

  destination: string;
  startDate: Date;
  endDate: Date;
  people: string[];
  expenses: Expense[]

  constructor(destination: string, startDate: Date, endDate: Date, createdBy: string) {
    if (endDate < startDate) {
      throw new Error("End date must be greater than start date")
    }
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
    this.people = [createdBy];
    this.expenses = []
  }

  addExpense(value: number, expenseDate: Date, category: Category, createdBy: string): any {
    if (expenseDate < this.startDate || expenseDate > this.endDate) {
      throw new Error("Expense date must be within trip start and end date")
    }
    if (!this.people.includes(createdBy)) {
      throw new Error("Only trip particiants can add expenses")
    }
    const expense = new Expense(category, value, expenseDate, this.destination, createdBy);
    this.expenses.push(expense);
  }

  getTotal(): any {
    return this.expenses.reduce((acc, expense) => acc + expense.value, 0);
  }
}
