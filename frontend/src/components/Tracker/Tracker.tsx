import React, { useState } from "react";
import { Content, Flexer, Page } from "../../framework/Containers";
import { Summary, TrackerItem } from "./components";

export interface Data {
  name: string;
  amount: number;
  type: string;
}

const initialData: Data = { name: "", amount: 0, type: "" };

const Tracker: React.FC = () => {
  const [incomes, setIncomes] = useState<Data[]>([]);
  const [expenses, setExpenses] = useState<Data[]>([]);

  const [incomeData, setIncomeData] = useState<Data>(initialData);
  const [expenseData, setExpenseData] = useState<Data>(initialData);

  const handleAddIncome = () => {
    const newIncomes = [...incomes];
    newIncomes.push(incomeData);
    setIncomes(newIncomes);
    setIncomeData(initialData);
  };

  const handleAddExpense = () => {
    const newExpenses = [...expenses];
    newExpenses.push(expenseData);
    setExpenses(newExpenses);
    setExpenseData(initialData);
  };

  return (
    <Page>
      <Content
        maxWidth={1000}
        header="Financial Tracker"
        headerVar="h2"
        boxShadow={0}
        pad={3}
        pt={1.5}
        pb={0}
        j="center"
        a="center"
        divider
        collapse
      >
        <Flexer a="fs">
          <Flexer w="50%">
            <TrackerItem
              setData={setIncomeData}
              data={incomeData}
              dataArray={incomes}
              headerText="Incomes"
              buttonText="Add Income"
              addClick={handleAddIncome}
              position="left"
            />
          </Flexer>
          <Flexer w="50%">
            <TrackerItem
              setData={setExpenseData}
              data={expenseData}
              dataArray={expenses}
              headerText="Expenses"
              buttonText="Add Expense"
              addClick={handleAddExpense}
              position="right"
            />
          </Flexer>
        </Flexer>

        <Summary incomes={incomes} expenses={expenses} />
      </Content>
    </Page>
  );
};

export default Tracker;
