const getBalanceByCategoryInPeriod = (transactions, categories, start, end) => {
  // add your code here
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.time);
    return transactionDate >= start && transactionDate < end;
  });

  // Calculate the balance for each category
  const categoryBalances = {};
  categories.forEach((category) => {
    categoryBalances[category] = 0;
    filteredTransactions.forEach((transaction) => {
      if (transaction.category === category) {
        categoryBalances[category] += transaction.amount;
      }
    });
  });

  return categoryBalances;
};

module.exports = getBalanceByCategoryInPeriod;
