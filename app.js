// 01 Chapter Values & Variables

var myName = 'saqib hussain';
var myAge = 26;
console.log(myName, myAge); 

// 02 Chapter Data Types

var myName = 'saqib hussain';
console.log(typeof(myName)); //string

var iAmSaqib = true;
console.log(typeof(iAmSaqib)); //boolean



// 03 Chapter Expressions & Operators
/* 
    1. Assignment Operators
    2. Arithmethic Operators
    3. Comparison Operators
    4. Increment Decrement Operators
    5. Concatination Operator ( JOORNA )
*/

// Assignment Operators

var x = 5;
var y = 5;

console.log( x == y); //true

// Increment & Decrement Operators
// num++ POST FIX - POSTPAID
// ++num PRE FIX - PREPAID

var num = 15;
console.log(num++); // 15 agar ++ pehle hota tou 16 hojata
console.log(num); // 16

// Comparison Operator 

var a = 30;
var b = 20;

console.log(a == b);
console.log(a > b);


// Logical Operators

var a = 30;
var b = -20;

//          true     false    true
console.log((a > b) && (b > 0) && (b < 0)); // false 
// && operator mai tamam expression true honi chaiye 


console.log((a > b) || (b > 0) || (b > 0));
// || operator bolta hai koi 1 bhi true hua tou mai true dikhao ga

// Logical NOT ( ! ) Operator 
console.log(!true); // false
// true ko false or false ko true kar dega 

/* 
    04 Chapter Control Statement & Loops
    
        1. if else
        2. switch statement
        3. while loop
        4. do-while loop
        5. for loop
        6. for in loop
        7. for of loop
        8. conditional ternary operator
*/

var tomorrow = 'rain'; 

    if (tomorrow == 'dhoop') {
        console.log('take a rain coat');
    }
    else{
        console.log('no need to take rain coat');
    }

// Challenge Time Leap Year
var year = 2020;

if (year % 4 === 0) {
    console.log('the year ' + year + ' is a leap year');
}
else if (year % 100 === 0) {
    console.log('the year ' + year + ' is not a leap year');
}
else if (year % 400 === 0) {
    console.log('the year ' + year + ' is a leap year');
}
else{
    console.log('the year ' + year + ' is not a leap year');
}

 /* 
    truthy and falsy values in JS
        1. 0
        2. " "
        3. undefined
        4. null
        5. NaN not a number
        6. false
 */

// conditional ternary operator

var age = 20;
console.log((age >= 18) ? 'you can vote' : 'you cant vote');

// while loop statement 




 