// stap-1: add a event handlear 
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // stap-2: add a money or pine value;
    const inputAddMoney=document.getElementById('input-add-money').value;
    const inputAddPin=document.getElementById('input-pin-number').value;
    
    // stap-03: input field value 
    if(inputAddPin==='1234'){
        // innertext ta nita hobe 
        const balnceAmount=document.getElementById('account_money').innerText;
        const newinputAmount=parseFloat(inputAddMoney);
        const inputbalnceAmount=parseFloat(balnceAmount);
        const newbalanceAmout=newinputAmount+inputbalnceAmount;
        document.getElementById('account_money').innerText=newbalanceAmout;
    }
    else{
        alert('wrong is a pine Number');
    }
})
