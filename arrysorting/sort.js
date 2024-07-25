let arr = [78,5,3,6,23,45,76,6,65,98,34,1];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if(arr[j] > arr[j+1])
    {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
    }
    console.log(arr);
    
  }
}