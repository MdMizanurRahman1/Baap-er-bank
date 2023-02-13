
document.getElementById('btn-deposit').addEventListener('click', function () {
    //deposit button area
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    /// deposit area
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;


    //balance 
    const balanceField = document.getElementById('balance-field');
    const previousBalanceFieldString = balanceField.innerText;
    const previousBalanceField = parseFloat(previousBalanceFieldString);


    //balance added with new deposit
    const currentBalance = previousBalanceField + newDepositAmount;

    //display/set value
    balanceField.innerText = currentBalance;



    depositField.value = '';
})