/*TEST QUESTIONS 1*/

/*Problem 1: Sum of the Cubes (20 marks)
Write a program that takes a positive integer as input and calculates the sum of the cubes of its digits.

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

Testcase 2:
Input: 101
Output: 2
*/

// const input = require("readline-sync")
// let num = input.questionInt("enter the number")

// let numStr = num.toString();
// sum = 0;

// for (let i = 0; i < numStr.length; i++) {
//    // let digit = parseInt(numStr[i]);
//    let digit = numStr[i]
//    sum += digit * digit * digit; 
// }

// console.log(sum); 




/* TEST QUESTIONS 2 */

/*Problem 2: Only One Digit (20 marks)
Write a program that takes a positive integer as input and repeatedly adds all its digits until the result has only one digit. The program should then return this single-digit result.

Input: A positive integer.

Output: A single-digit integer which is the result of repeatedly adding all the digits of the input number until only one digit remains.

Example Test Cases:
Testcase 1:
Input: 38
Output: 2
Explanation:
3 + 8 = 11
1 + 1 = 2
*/

const input = require("readline-sync")
let n = input.question("enter the name: ")

// let c;
// if(n===0){
//     c = 0;
// }else{
//     c = 1+((n-1)%9);
// }
// console.log(c);

// function riya(n){
//     if(n===0){
//         return 0;
//     }else{
//         return 1+((n-1)%9);
//     }
// }
// console.log(riya(n));



///TEST QUESTION 3


/*Problem 3: Username Masking (30 Marks)
Write a function named maskUsername that takes a username string and applies the specified character replacements. The function should be case-sensitive and only replace the characters explicitly mentioned in the rules below:

Replace 'a' with '@'
Replace 's' and 'S' with '$'
Replace 'i' with '!'
Replace 'o' and 'O' with '0' (zero)
Replace 'E' with '3'

Function: maskUsername(username)

Input Format: A string representing the username.

Output Format: Return a new string with the specified characters replaced by special symbols according to the rules above.

Note: The function should be case-sensitive and only replace the characters explicitly mentioned in the rules.

Example Test Cases:
Test Case 1:
Input: "Alice"
Output: "Al!ce"
Explanation:
'i' is replaced by '!'

Test Case 2:
Input: "snehaS";
Output: "$neh@$"
Explanation:
's' and 'S' are replaced by '$'
‘a’ is replaced by ‘@’*/

// let username = '';
// for(let i=0; i<n.lenght;i++){
//     let c=n[i];
//     if(c==='a'){
//         username+='@';
//     }else if(c==='s'|| c==='S'){
//         username+='$';
//     } else if(c==='i'){
//         username+='!';
//     } else if(c==='o'|| c==='O'){
//         username+='0';
//     }else if(c==='E'){
//         username+='3'
//     }else{
//         username+=c;
//     }
// }
// console.log(username);


// let username = '';

// for (let i = 0; i < n.length; i++) {
//     let c = n[i];
//     if (c === 'a') {
//         username += '@';
//     } else if (c === 's' || c === 'S') {
//         username += '$';
//     } else if (c === 'i') {
//         username += '!';
//     } else if (c === 'o' || c === 'O') {
//         username += '0';
//     } else if (c === 'E') {
//         username += '3';
//     } else {
//         username += c;  
//     }
// }

// console.log(username);  

function riya(n){
    let username= '';
for(let i=0; i<n.length;i++){
    let c=n[i];
    if(c==='a'){
        username+='@'
    }else if(c==='s'|| c==='S'){
        username+='$';
    }else if(c==='i'){
        username+='!';
    }else if(c==='o'|| c==='O'){
        username+='0';
    }else if(c==='E'){
        username+='3';
    }else{
        username+=c;
    }
}
     return username;
}
console.log(riya(n));