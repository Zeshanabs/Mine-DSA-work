let arr = [1,2,3,4,5,6,7];

let temp;

function rev(arr , start, end)
{
    console.log(arr);
if(start<=end){
temp = arr[start];
arr[start]=arr[end];
arr[end]=temp;
rev(arr , start+1, end-1)

        
    }

}

rev(arr , 0 , arr.length-1)