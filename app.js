function calculateTotalCost(){
    const inputElement = document.querySelector('.input');

    let cost = Number(inputElement.value);

    if(cost < 40){
        cost = cost + 10
    }
    if(inputElement.value === '')
    {
        document.querySelector('.price').innerHTML='Enter a valid amount';
    } else{
        document.querySelector('.price').innerHTML=`Total Cost: $${cost}`;
    }
    
   
}