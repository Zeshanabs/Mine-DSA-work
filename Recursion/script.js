//simple recursion function
function fac(x) {
    console.log(x)
    if (x<15){
fac(x+1);
    }
}

fac(3);

//findig the factorial of number using recursion
function facto(item) {
if(item==0) {
    return 1;
}
return item*facto(item-1)
}
console.log(facto(5));


//applying while loop on array 
let arr= ["apple" , "banana" , "mango" , "pear" , "spidermen"];
let i=0;

while(i<arr.length){
console.log(arr[i]);
    i++;
}
