const dayTransactions = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
];

// input: arr
// output: number


const getTotalRevenue = balanceObj => balanceObj.map(el => Object.values(el)[1])
    .reduce((acc, n) => acc + n);


console.log(getTotalRevenue(dayTransactions));