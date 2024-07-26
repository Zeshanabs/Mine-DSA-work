 let monney = 20;
 let apples = 2000;

 function apple(x) {
    if(x>0){
        console.log(`we ammount we have is ${x} and the apples we can buy is ${apples}`);
        buy(x);

    }

    
 }

 function buy(x) {
    apples = apples-100;
    apple(x-2);
 }

 apple(monney);