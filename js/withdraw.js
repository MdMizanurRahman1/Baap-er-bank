//step-1

document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step-2  
    const withdrawAmount = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawAmount.value;
    const newWithdraw = parseFloat(withdrawAmountString);

    //step-7
    withdrawAmount.value = '';

    //NaN validation check

    if (isNaN(newWithdraw)) {
        alert('Please input a valid number');
        return;
    }

    //step-3
    const withdrawTotal = document.getElementById('withdraw-amount');
    const withdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);


    //step-5
    const withdrawBalanceField = document.getElementById('balance-field');
    const withdrawBalanceFieldString = withdrawBalanceField.innerText;
    const previousWithdrawBalance = parseFloat(withdrawBalanceFieldString);


    //step-8 validation check for more than balance withdraw
    if (newWithdraw > previousWithdrawBalance) {
        alert("You don't have that much sufficient amount");
        return;
    }

    //step-4
    const updatedDepositTotal = previousWithdrawTotal + newWithdraw;
    withdrawTotal.innerText = updatedDepositTotal;


    //step-6
    const upToDatedTotalBalance = previousWithdrawBalance - newWithdraw;
    withdrawBalanceField.innerText = upToDatedTotalBalance;


})