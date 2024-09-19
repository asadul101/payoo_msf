// stap-01: setup is a button handler 
document.getElementById('casout-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // input filed casout and pin address
    const casoutField = document.getElementById('casout-money').value;
    const pinField = document.getElementById('casout-pin').value;

    const newcasoutField = parseFloat(casoutField);

    if (pinField === '1234') {
        const balance = document.getElementById('account_money').innerText;
        const newBalance = parseFloat(balance);
        const newbalance = newBalance - newcasoutField;
        document.getElementById('account_money').innerText=newbalance;

    }
    else {
        alert('this is a pin and money chick')
    }
})
