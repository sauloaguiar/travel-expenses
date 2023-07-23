import Trip from "../../src/domain/entity/trip";
import Expense from "../../src/domain/entity/expense";
import { Category } from "../../src/domain/entity/category";

const validTrip = new Trip("New York", new Date("2023-10-10"), new Date("2023-10-20"), "John Doe");

test('Não deve criar uma viagem com data de fim menor que data de início', function() {
  const destination = "New York";
  const startDate = new Date("2023-10-10");
  const endDate = new Date("2023-10-09");
  const createdBy = "John Doe";

  expect(() => new Trip(destination, startDate, endDate, createdBy)).toThrow(new Error("End date must be greater than start date"));
});

test('Não deve criar uma despesa com data fora do intervalo da viagem', function() {
  const expenseDate = new Date("2023-10-21");

  expect(() => validTrip.addExpense(100, expenseDate, Category.RESTAURANT, "John Doe")).toThrow(new Error("Expense date must be within trip start and end date"));
});

test('Quando adicionar despesa o total da viagem deve ser alterado', () => {
  const expenseDate = new Date("2023-10-15");

  validTrip.addExpense(100, expenseDate, Category.RESTAURANT, "John Doe");
  expect(validTrip.getTotal()).toBe(100);
})


test('Somente participantes da viagem podem adicionar despesas', () => {
  const expenseDate = new Date("2023-10-15");

  expect(() => validTrip.addExpense(100, expenseDate, Category.RESTAURANT, "Marie Foe")).toThrow(new Error("Only trip particiants can add expenses"));
});