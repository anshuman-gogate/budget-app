import React from 'react';
import BudgetCard from './BudgetCard';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext';

function UncategorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
      (total, expense) => total + expense.amount, 0
  )

  if(amount === 0) return null;
  return <BudgetCard name="Uncategorized" gray amount={amount} {...props}/>;
}

export default UncategorizedBudgetCard;
