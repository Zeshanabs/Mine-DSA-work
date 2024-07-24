let arr = [1,3,2,5,6,8,12,4,61,78,];

let btn = document.querySelector("button");


// for ( let i = 0; i < arr.length; i++) 
//     {
// document.write(`the value of arry on index ${i} is ${arr[i]}`);

// }
console.log(arr[7]);

btn.onclick = function show() {
    let text = document.getElementById('el').value
    
    if(text<arr.length){
        alert(`the value of index ${text} is ${arr[text]} `);
    }
    else{
        alert(`enter the valid number.  this number is exceding the index of the arry`);
    }

}