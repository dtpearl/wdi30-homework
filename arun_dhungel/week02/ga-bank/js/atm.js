// set global variables
let $checkingBalance = $('#checking-balance');
let $checkingAmount = $('#checking-amount');
let $checkingWithdraw = $('#checking-withdraw');
let $savingsBalance = $('#savings-balance');
let $savingsAmount = $('#savings-amount');
let $savingsWithdraw = $('#savings-withdraw');
let $info = $('#transaction-info');
let $warning = $('#transaction-warning');

const processDeposit = function(isSavingsAccount) {
    clearMessage();

    let $totalAmountAvailable;
    if (isSavingsAccount) {
        let $amountToDeposit = Number($savingsAmount.val());
        if (setAmountError($amountToDeposit)) return;
        $totalAmountAvailable = Number($savingsBalance.text().replace('$', ''));
        $totalAmountAvailable += $amountToDeposit;
        $savingsBalance.text(createAmountString($totalAmountAvailable));
    } else {
        let $amountToDeposit = Number($checkingAmount.val());
        if (setAmountError($amountToDeposit)) return;
        $totalAmountAvailable = Number($checkingBalance.text().replace('$', ''));
        $totalAmountAvailable += $amountToDeposit;
        $checkingBalance.text(createAmountString($totalAmountAvailable));
    }

    SetMessage($info, 'Transaction is successful.');
}


const processWithdraw = function(isSavingsAccount) {
    clearMessage();
    if (isSavingsAccount) {
        let $amountToWithdraw = Number($savingsAmount.val());
        if (setAmountError($amountToWithdraw)) return;
        $totalAmountAvailable = Number($savingsBalance.text().replace('$', ''));
        if ($totalAmountAvailable < $amountToWithdraw) {
            SetMessage($warning, 'Not enough balance.');
            return;
        } else {
            $totalAmountAvailable -= $amountToWithdraw;
            $savingsBalance.text(createAmountString($totalAmountAvailable));
        }

    } else {
        let $amountToWithdraw = Number($checkingAmount.val());
        if (setAmountError($amountToWithdraw)) return;
        $amountAvailableInChecking = Number($checkingBalance.text().replace('$', ''));
        $amountAvailableInSavings = Number($savingsBalance.text().replace('$', ''));
        let $totalAmountAvailable = $amountAvailableInChecking + $amountAvailableInSavings;
        if ($amountAvailableInChecking >= $amountToWithdraw) {
            $amountAvailableInChecking -= $amountToWithdraw;
            $checkingBalance.text(createAmountString($amountAvailableInChecking));

        } else {

            if ($totalAmountAvailable < $amountToWithdraw) {
                SetMessage($warning, 'Not enough balance.');
                return;
            }

            let amountNotEnough = $amountAvailableInChecking - $amountToWithdraw;
            let totalInSavings = $amountAvailableInSavings + amountNotEnough;
            $savingsBalance.text(createAmountString(totalInSavings));
            $checkingBalance.text(createAmountString(0));


        }

    }

    SetMessage($info, 'Transaction is successful.');
}

function setAmountError(amount) {
    let result = false;
    if (amount <= 0 || isNaN(amount)) {
        SetMessage($warning, "Amount must be more than $0");
        result = true;
    }
    return result;
}


function SetMessage(node, message) {
    node.text(message);
}

function clearMessage() {
    $info.text('')
    $warning.text('');
}

function createAmountString(amount) {
    return '$' + amount;
}