// stap -1 set a event hendlar 
document.getElementById('input-button').addEventListener('click', function(event){
    // stap -2: event prevent dejault (prevent default reloding browes)
    event.preventDefault();
    // stap -3: input value setup 
    const phoneNumer=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    if(phoneNumer==='5'&& pinNumber==='1234'){
        window.location.href="/home.html"
    }
    else{
        alert('wron is a phone number of pin')
    }
})