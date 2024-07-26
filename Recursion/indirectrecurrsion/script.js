
let money = 20;
let total = 2000;

function buy(x) {
    if(x>0){
        console.log(`i have RS ${x} and i can but ${total} apples`)
buymore(x);

    }
    
     
    }
    function buymore(x) {
        total= total-100;
        buy(x-2);
    }

buy(money);