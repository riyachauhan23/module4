/*Write a program that takes a positive integer as input and calculates the sum of the cubes of its digits.

Input: A positive integer.

Output: The sum of the cubes of the digits of the input integer.

Example Test Cases:
Testcase 1:
Input: 123
Output: 36
Explanation: 
1^3+2^3+3^3 
= 1+8+27 
= 36

*/

// const input=require("readline-sync")
// let num= input.questionInt("enter the number");
// let r;
// let sum=0;
// for(let i=0;num!=0;i++){
//  r=num%10;
//  sum=sum+r**3;
//  num=Math.floor(num/10);
// }
// console.log(sum);

 const input = require("readline-sync")
 let num = input.questionInt("enter the number")

let numStr = num.toString();
sum = 0;

for (let i = 0; i < numStr.length; i++) {
    // let digit = parseInt(numStr[i]);
    let digit = numStr[i]
    sum += digit * digit * digit; 
}

console.log(sum); 


// const input = require("readline-sync")
// let a = input.questionInt("enter the number")
// let b = input.questionInt("enter the number")
// let c = input.questionInt("enter the number")
// function sumofcubes(a,b,c){
//     return Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3);
// }
// console.log(sumofcubes(a,b,c));
