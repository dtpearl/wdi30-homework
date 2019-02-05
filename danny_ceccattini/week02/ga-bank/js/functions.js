////////////// THEY KEY IS TO FIRST GET THE RAW FUNCTIONALITY OF THE PROCESS WORKING.
////////////// THEN LINK ALL THE FUNCTIONALITY TO THE BROWSER WITH JQUERY.


const bank = {
  checkings: 50,
  savings: 100,
                    //10,   "checkings"
  deposit: function(amount, account) {
    this[account] += amount // this[account] = this[account] + amount
    console.log(`your balance for your ${ account } account is $${ this[account] }.`);
  },

  withdrawal: function(amount, account) {
    let totalBalance = this[account] + bank.savings;
    if (amount < this[account]) {
      this[account] -= amount
      return `your balance for ${ account } is ${ this[account] }`;
    } else if (amount === this[account]) {
      this[account] = 0;
      return `Please be advised that your ${ account } account is now empty. We will commence overdrafting from your savings account.`;
    } else if (amount > this[account] && amount < bank.savings) {
      let overdraft = amount - this[account];
      this[account] = 0;
      bank.savings -= overdraft;
      return `Warning: Your ${ account } account is now empty. An overdraft of $${ overdraft } was made from your savings account.`;
    } else if (amount > totalBalance) {
      return 'You do not sufficient funds!';
    }
  },
};

bank.deposit(50, 'checkings');
