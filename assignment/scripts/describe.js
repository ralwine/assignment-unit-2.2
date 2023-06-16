// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called name and set its value to the string called 'Dane'.
// Then we create a conditional to check to see if the name variable is an exact match to the string 'Mary'; if this proves to be so, we console.log 'Hi, Mary!'.
// Should that condition fail to be met, we console.log 'How do you do?'.
// Since the strings 'Mary' and 'Dane" are not exact matches, we would get the console.log 'How do you do?' in our console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called secret. We declare another variable called code with a value set to the number 123.
// We create a conditional where if the variable code is an exact match to the number 123, the value of variable called secret shall be set to the string named 'super',
// whereas the value of the variable code shall multiply by 2. We create another conditional where if the updated value of the vairable code is greater than the number 250,
// then the variable secret shall be assigned the value of the string named 'duper'.
// We then console.log the variable secret and are prompted with the string named 'super' in our console since the updated number value of code is now 246... not greater than 250.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a variable called isStudent and assign it the boolean value of true. We decalre abother vairable called age and assign it the number value of 34.
// We declare another variable called zip and assign it the number value of 55407. We create a compound conditional where if the variable isStudent is an exact match to its
// inital boolean value of true AND the number value of the variable zip is greater than 80000; we will console.log 'You're a student on the West Coast!'.
// Should that not check out we create another compound conditional where either the variable isStudent boolean value is false or the vairable age is a number value less than 30 and
// we console.log 'What are your hobbies?'. We also create another if the variable isStudent is the boolean value of true on its own, we console.log 'Welcome to Prime!'.
// If none of these condtions check out we create a final condition where we console.log out 'How about the weather?'.
// If we are to run this code as is, our console will log out 'Welcome to Prime'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

