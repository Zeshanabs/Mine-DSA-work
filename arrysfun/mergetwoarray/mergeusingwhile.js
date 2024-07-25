let arr1 = [6,7,8,9,10,11,12,14];
let arr2 =[1,98,54,3,2,8];
let arr3 =[];
let a1 = 0;
let a2 =0;
let a3 = 0;
let p = 0;

// for (let i = 0; i < arr2.length; i++) {
//     if(arr2[i]>arr2[i+1])
//     {
    
//         arr2[i] = arr2[i+1];
//         arr2[i+1]=arr2[i];
       
//     }
//     console.log(arr2[i]);
    
// }


 while(a1<arr1.length && a2<arr2.length)
 {
    if(arr1[a1]<arr2[a2]){
        arr3[a3] = arr1[a1];
        a1++;
        console.log(arr3[a3]);
    }
   else{
    arr3[a3]=arr2[a2];
    a2++;
    console.log(arr3[a3]);
   }
     a3++;
 }

 console.log(arr3);
