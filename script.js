// ---------- vars ----------

// To access an HTML element with a given id name, you can use the getElementById() method
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const output = document.getElementById('output');
const clearButton = document.getElementById('clear');
// In programming, it is standard practice to prefix a variable with is or has to indicate that the variable is a boolean
let isError = false;

// ---------- functions ----------

/* This one way to create the cleanInputString function:

Even though you set an input element to be a number, JavaScript receives a string value. You need to write a function to clean the string value and ensure you have a number

You need to split your str into individual characters. You can use the split() method to do this

The split() method splits a string into an array of substrings, and returns the new array. You can pass in an optional separator which tells the method where each split should happen

For loop breakdown: for ([initialization]; [condition]; [final-expression]) {} 

The .includes() method returns true if the array contains the character, and false if not. The logical NOT operator (!) will return the opposite of the value of the .includes() method */ 

// function cleanInputString(str) {
//     const strArray = str.split('');
//     const cleanStrArray = [];

//     for (let i = 0; i < strArray.length; i++) {
//         if (!["+", "-", " "].includes(strArray[i])) {
//             cleanStrArray.push(strArray[i])
//         }
//       }
//    }

/* However there is a better way to create the same function. While looping through the string works, creating a new array is inefficient for memory and runtime performance. Instead, you can use Regular Expressions (referred to as "regex") to match specific characters

Regex in JavaScript is indicated by a pattern wrapped in forward slashes

In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern. Shorthand character classes are preceded with a backslash (\). The character class \s will match any whitespace character 

The pattern won't work just yet. /+-\s/ looks for +, -, and a space in order. This would match +- hello but would not match +hello.

To tell the pattern to match each of these characters individually, you need to turn them into a character class. This is done by wrapping the characters you want to match in brackets 

Regex can also take specific flags to alter the pattern matching behavior. Flags are added after the closing /. The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match 

Strings have a .replace() method which allows you to replace characters in the string with another string. .replace takes two arguments. The first is the character sequence to replace – this can either be a string or a regex pattern. The second is the string to replace that sequence with */

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
  };


