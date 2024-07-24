let ar = [34,45,67,78,89,12,23,34,54];




let btn = document.querySelector("button");

btn.onclick = function abs() {
    let pos = document.getElementById('index').value;
    let newel = document.getElementById('newvalue').value;
    for (let i = ar.length-1; i>=0; i--) {
    

        if(i>=pos){
            ar[i+1] = ar[i];
            if(i==pos){
                ar[i] = newel;
            }
        
        }  
        
    }
    console.log(ar);
    
}


