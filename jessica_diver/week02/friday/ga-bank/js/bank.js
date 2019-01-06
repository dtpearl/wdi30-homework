// this should be the singl source of truth for account balances.
// It should not contain any DOM code
// It contains all the logic and code for deposits and withdrawals

const bank = {

  checkingBalance: 0,
  savingsBalance: 0,
  checkingDeposit: function (amount) {
     this.checkingBalance += Number(amount);
     return this.checkingBalance + this.savingsBalance;
  },
  checkingWithdraw: function (amount){
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= Number(amount);
    } else if (amount <= this.total()){
      const difference = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= difference;
    }
  },
  savingsDeposit: function (amount) {
    this.savingsBalance += Number (amount);
  },
  savingsWithdraw: function (amount) {
    if (amount < this.savingsBalance) {
      this.savingsBalance -= Number(amount);
    } else if (amount <= this.total()) {
      const difference = amount - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBalance -= difference;
    }
  }
};
