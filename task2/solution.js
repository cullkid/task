const categorizeSimilarTransactions = (transactions) => {
  // add your code here
  const categoriesMap = transactions.reduce((map, transaction) => {
    if (transaction.category) {
      map[transaction.id] = transaction.category;
    }
    return map;
  }, {});

  // enhance transactions with category information if available
  return transactions.map((transaction) => {
    if (transaction.id in categoriesMap) {
      return { ...transaction, category: categoriesMap[transaction.id] };
    }
    return transaction;
  });
};

module.exports = categorizeSimilarTransactions;
