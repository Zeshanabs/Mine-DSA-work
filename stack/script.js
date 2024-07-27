let ar =[]
let max = 5;
let currentsize = ar.length;

function chalo(newval)
{

    ar[currentsize]=newval;
    currentsize+=1;
}

function niklo(){
    if(currentsize>0){
        currentsize-=1;
        ar.length=currentsize;
    }
    else{
        alert(`stack is already empty`)
    }
}

chalo(10);
chalo(12);
chalo(13);
chalo(14);
chalo(15);
chalo(16);
chalo(17);
chalo(23423);
niklo();
niklo();
niklo();
niklo();
niklo();
chalo(4567);

console.log(ar);