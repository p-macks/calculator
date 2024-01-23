function calculateTotalCost(){
    const inputElement = document.querySelector('.input');

    let cost = Number(inputElement.value);

    if(cost < 40){
        cost = cost + 10
    }
    document.querySelector('.price').innerHTML=`Total Cost: $${cost}`;
   
}