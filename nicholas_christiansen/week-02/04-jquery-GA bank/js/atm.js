$(document).ready(function() {

  bank = {
    accounts: {
      checking: 0,
      savings: 0
    },

    withdraw: function (account) {
      const input = parseInt($( `#${ account }-amount` ).val());
      if (input >= 0 ) {

        if (input <= this.accounts[account]) {
          $(`#${ account }-balance`).empty;
          this.accounts[account] -= input;
          $(`#${ account }-balance`).text(`$${ this.accounts[account] }`)
          $(`#${ account }-amount`).val('');
        } else {
          for (let key in this.accounts) {
            if( key !== account ) {
              const balanceA = this.accounts[account];
              const balanceB = this.accounts[key];
              const overdraw  = Math.abs(balanceA - input);

              if (overdraw <= balanceB) {

                $(`#${ account }-balance`).empty;
                this.accounts[account] = 0;
                $(`#${ account }-balance`).text(`$${ this.accounts[account] }`)
                $(`#${ account }-amount`).val('');

                $(`#${ key }-balance`).empty;
                this.accounts[key] -= overdraw;
                $(`#${ key }-balance`).text(`$${ this.accounts[key] }`)
                $(`#${ key }-amount`).val('');
              }
            }
          }
        }
      } else {
        console.log("Error: not valid amount");
      }
      this.zero(this.accounts[account], account);
    },

    deposit: function (account) {
      const input = parseInt($( `#${ account }-amount` ).val());
      if (input >= 0 ) {
        $(`#${ account }-balance`).empty;
        this.accounts[account] += input;
        $(`#${ account }-balance`).text(`$${ this.accounts[account] }`)
        $(`#${ account }-amount`).val('');
      }
      this.zero(this.accounts[account], account);
      console.log(this);
    },

    zero: function (balance, account) {
      if (balance === 0) {
        $( `#${ account }` ).addClass( "zero" );
      } else {
        $( `#${ account }` ).removeClass( "zero" );
      }
    }
  }

  $('#checking-deposit').on('click', function() {
    event.preventDefault();
    bank.deposit('checking');
  })

  $('#checking-withdraw').on('click', function () {
    event.preventDefault();
    bank.withdraw('checking');
  })

  $('#savings-deposit').on('click', function () {
    event.preventDefault();
    bank.deposit('savings');
  })

  $('#savings-withdraw').on('click', function () {
    event.preventDefault();
    bank.withdraw('savings');
  })

  for (let key in bank.accounts) {
    bank.zero(bank.accounts[key], key);
  }

})
