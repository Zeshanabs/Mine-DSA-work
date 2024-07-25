
let arr =[1,2,3,4,5,6,7];
let btn = document.querySelector("button");
btn.onclick = function show() {
    
    let pos = document.getElementById('abc').value;
    pos = parseInt(pos);
    for (let i = pos; i < arr.length; i++) {
        arr[i] = arr[i+1]
    }
    arr.length=arr.length-1;
    alert(`the updated value in the arry is ${arr}`)
    console.log(arr);

}
