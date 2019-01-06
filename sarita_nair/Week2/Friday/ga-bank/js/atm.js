$(document).ready(function(){
  const ArrAccounts = [
    {
      OwnerName : "Steve",
      accountNumber : "234344545",
      Type : "Savings",
      balance : "0"
    },
    {
      OwnerName : "Steve",
      accountNumber : "565678788",
      Type : "Checking",
      balance : "0"
    },
  ];

  let transactions = function(name,acno,type,amount,transtype){
    return [{
      OwnerName: name,
      accountNumber: acno,
      Type: type,
      balance: amount,
      TransType: transtype
    //   CalculateBalance: function(accountNumber,type){
    //     for(let key in this.students)
    //     {
    //       if(this.students[key] > 2)
    //       {
    //       this.shortlist.push(key);
    //       }
    //     }
    // };
  }];
  };
  let OverDraftArray = [];
  let ovrdiv, ovraccno, currdiv,ovrtype = '';
  let trn = [];
  const CheckZeroBalance = function(acno, type){
      const balance = CalculateBalance(acno,type);
      if(balance === 0)
      $((`#${type}-balance`).toLowerCase()).addClass('zero');
      else
      $((`#${type}-balance`).toLowerCase()).removeClass('zero');

  };

  const generateOverDraftArray = function(curracno,curractyp,curracwdAmt,ovracno,ovractyp,ovracwdAmt){
    OverDraftArray.push(transactions('',curracno,curractyp,curracwdAmt,'D'));
    OverDraftArray.push(transactions('',ovracno,ovractyp,ovracwdAmt,'D'));
  };
  //validation selection
  const CheckNegativeBalance = function(acno, type,amt){
      const balance = CalculateBalance(acno,type);
      if(balance < amt)
      {
        const overdraftbal = OverDraft(acno,type,amt);
        if(overdraftbal === true)
        {
          return true;
        }
        else
        return overdraftbal;
      }
      //return `There is no sufficient balance in your acc#${acno} to withdraw amount ${amt}`;
      else
      return true;
  };

  const DepositMoney = function(name,accno,type,amt){
    trn.push(transactions(name,accno,type,parseFloat(amt),'C'));

  };
  const WithDrawMoney = function(name,accno,type,amt)
  {
      if(OverDraftArray.length === 0)
      {
        trn.push(transactions(name,accno,type,parseFloat(amt),'D'));
      }
      else
      {
        $.each( OverDraftArray, function(index,record){
            $.each( record, function( index2, sub_record ) {
                trn.push(transactions(name,sub_record.accountNumber,sub_record.Type,sub_record.balance,'D'));
            });
        });

        const ovrbalance = CalculateBalance(ovraccno,ovrtype);
        $(ovrdiv).html(`<span>$${ovrbalance}<span>`);
      }
        const curbalance = CalculateBalance(accno,type);
        $((`#${type}-balance`).toLowerCase()).html(`<span>$${curbalance}<span>`);
  };

  const CalculateBalance = function(accountNumber,type)
  {
        let transaction = [];
        $.each( trn, function(index,record){
            const tranFilterelements = record.filter( function( el, index ) {
              console.table(el.accountNumber);
                return el.accountNumber === accountNumber && el.Type === type;
            });
            if(tranFilterelements.length > 0)
            transaction.push(tranFilterelements);

        });

        let balance = 0;
            $.each( transaction, function(index,record){
                $.each( record, function( index2, sub_record ) {
                  if(sub_record.TransType === 'C')
                      balance += sub_record.balance;
                  else
                      balance -= sub_record.balance;
                });
            });
        return balance;
  };

  const OverDraft = function(acno,type,amt){
    const currentBalance = CalculateBalance(acno,type);
    const secondAcc = ArrAccounts.filter( function( el, index ) {
        return el.accountNumber !== acno;// && el.Type === type;
    });

    const secondAccBalance = CalculateBalance(secondAcc[0].accountNumber,secondAcc[0].Type);
    if((currentBalance + secondAccBalance) < amt )
    {
      return `Withdrawal amount cannot exceed the OverDraft limit.`;
    }
    else
    {
      ovrdiv = (`#${secondAcc[0].Type}-balance`).toLowerCase();
      ovrtype = secondAcc[0].Type;
      ovraccno = secondAcc[0].accountNumber;
      generateOverDraftArray(acno,type,currentBalance,secondAcc[0].accountNumber,secondAcc[0].Type,(amt-currentBalance));
      return true;
    }
  };
  const ClearData = function(){
    OverDraftArray = [];
    ovrdiv = '';
    ovrtype = '';
    ovraccno = '';
  };
  const TransacDeposit = function(Ownername, accno, type,amt){
    DepositMoney(Ownername,accno,type,parseFloat(amt));
    const balance = CalculateBalance(accno,type);
    $((`#${type}-balance`).toLowerCase()).html(`<span>$${balance}<span>`);
    CheckZeroBalance(accno,type);
    $(`.errorMessage`).html('');
  };
  const TrasacWithdraw = function(Ownername, accno, type,amt){
    const result = CheckNegativeBalance(accno,type,amt);
      if(result === true)
      {
            $(`.errorMessage`).html('');
            WithDrawMoney(Ownername,accno,type,parseFloat(amt));
            CheckZeroBalance(accno,type);
      }
      else{
        //alert(result);
        $(`.errorMessage`).html(`<span>${result}</span>`);
      }
      ClearData();
  };
$('#checking-deposit').on('click',function(){
    const amount = $('#checking-amount').val();
    TransacDeposit(ArrAccounts[1].OwnerName,ArrAccounts[1].accountNumber,ArrAccounts[1].Type,parseFloat(amount));
});
$('#savings-deposit').on('click', function(){
    const amount = $('#savings-amount').val();
    TransacDeposit(ArrAccounts[0].OwnerName,ArrAccounts[0].accountNumber,ArrAccounts[0].Type,parseFloat(amount));
});
$('#checking-withdraw').on('click', function(){
    const amount = $('#checking-amount').val();
    TrasacWithdraw(ArrAccounts[1].OwnerName,ArrAccounts[1].accountNumber,ArrAccounts[1].Type,parseFloat(amount));
});

$('#savings-withdraw').on('click', function(){
    const amount = $('#savings-amount').val();
    TrasacWithdraw(ArrAccounts[0].OwnerName,ArrAccounts[0].accountNumber,ArrAccounts[0].Type,parseFloat(amount));
});
const populateData = function(){
  $.each(ArrAccounts, function(index ,arr ){
    CheckZeroBalance(arr.accountNumber,arr.Type);
  });
};
populateData();
});
