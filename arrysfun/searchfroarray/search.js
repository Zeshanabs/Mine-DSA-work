let arr = [1,2,3,4,5,6,7,8,23,44,54];


let btn = document.querySelector("button");

btn.onclick = function show() {
    let val = document.getElementById('abc').value;
    let index = undefined;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==val)
            {
                index = i;
                break
            }

    }
   
    console.log(` the index of the given value is ${index}`);

}

