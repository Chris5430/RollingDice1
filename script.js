const numbers = document.querySelector('h2');
const total = document.querySelector('h3');
const button = document.querySelector('button');


function rollDice(){
    const d1 = Math.floor(Math.random()*7);
    const d2 = Math.floor(Math.random()*7);
    const dtotal = d1+d2;
    numbers.textContent = ""+d1+" "+d2;
    total.textContent = "Total: " + dtotal;
}


button.addEventListener('click',rollDice);
