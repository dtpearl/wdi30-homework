$(document).ready(() => {

    let $checkingAccount = 0;
    let $savingsAccount = 0;

    // checking ////////////////////////////////////////////////////////////////////////////////////////
    function cScreen(num) {
        $('#checking-balance').html(`$${num}`);
    };

    // deposit
    $('#checking-deposit').on('click', () => {
        const $cDeposit = $('#checking-amount').val();
        if ($cDeposit > 0) {
            $checkingAccount += Number($cDeposit);
            $('div #checking').removeClass('zero');
            cScreen($checkingAccount);
        }
    });

    // checking - withdraw
    $('#checking-withdraw').on('click', () => {
        const $cWithdraw = $('#checking-amount').val();
        if ($cWithdraw <= $checkingAccount) {
            $checkingAccount -= Number($cWithdraw);
            cScreen($checkingAccount);
        }
        if ($cWithdraw > $checkingAccount && $cWithdraw <= $checkingAccount + $savingsAccount) {
            $savingsAccount -= ($cWithdraw - $checkingAccount);
            $checkingAccount = 0;
            cScreen($checkingAccount);
            sScreen($savingsAccount);
        }
        if ($checkingAccount === 0) {
            $('div #checking').addClass('zero');
        }
    });

    // savings /////////////////////////////////////////////////////////////////////////////////////////////////
    function sScreen(num) {
        $('#savings-balance').html(`$${num}`);
    };

    // deposit
    $('#savings-deposit').on('click', () => {
        const $sDeposit = $('#savings-amount').val();
        if ($sDeposit > 0) {
            $savingsAccount += Number($sDeposit);
            $('div #savings').removeClass('zero');
            sScreen($savingsAccount);
        }
    });

    // savings
    $('#savings-withdraw').on('click', () => {
        const $sWithdraw = $('#savings-amount').val();
        if ($sWithdraw <= $savingsAccount) {
            $savingsAccount -= Number($sWithdraw);
            sScreen($savingsAccount);
        }
        if ($sWithdraw > $savingsAccount && $sWithdraw <= $checkingAccount + $savingsAccount) {
            $checkingAccount -= ($sWithdraw - $savingsAccount);
            $savingsAccount = 0;
            sScreen($savingsAccount);
            cScreen($checkingAccount);
        }
        if ($savingsAccount === 0) {
            $('div #savings').addClass('zero');
        }
    });
});



