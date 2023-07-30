import { Category } from "../../src/domain/entity/category"
import Expense from "../../src/domain/entity/expense"

test("Nao deve criar uma despesa com valor negativo", function() {
  expect(
    () => new Expense(Category.RESTAURANT, -20, new Date("2023-10-10"), "new city", "John Doe"))
    .toThrow(new Error("Value can not be negative"))
})
