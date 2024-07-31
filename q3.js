
const input=require("readline-sync")
let n=input.questionInt("enter the lenth of array")
let a=[];

let i=0;
 while (i<n) {
    
         a[i] = input.questionInt("enter The element no:")
    
     i=i+1
 }
 console.log(a)
