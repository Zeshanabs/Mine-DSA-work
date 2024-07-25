let ar1 =[1,2,3,4,5,6];
let ar2 = [71,8,7,54,23,12,];
let ar3 = [];

for (i = 0; i < ar1.length; i++) {
    ar3[i]= ar1[i];
}
 for (i = 0; i < ar2.length; i++) {
    ar3[ar1.length+i] = ar2[i];
    
 }
 console.log(ar3);

//  some defalut functions
// to reverse the array 
 let dummy =[1,2,3,4,5,6,7];
 dummy.reverse();
  let dummy2 = [45,56,34,23,65,23];

  let dummy3 = [...dummy,...dummy2,...ar3];
console.log(dummy3);
