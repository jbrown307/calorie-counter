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

/* function cleanInputString(str) {
    const strArray = str.split('');
    const cleanStrArray = [];

    for (let i = 0; i < strArray.length; i++) {
         if (!["+", "-", " "].includes(strArray[i])) {
            cleanStrArray.push(strArray[i])
         }
      }
    } */

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

/* In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out 

The e in a number input can also be an uppercase E. Regex has a flag for this, however – the i flag, which stands for "insensitive"

Number inputs only allow the e to occur between two digits. To match any number, you can use the character class [0-9]. This will match any digit between 0 and 9

The + modifier in a regex allows you to match a pattern that occurs one or more times. To match your digit pattern one or more times, add a plus after each of the digit character classes

There is a shorthand character class to match any digit: \d 

Strings have a .match() method, which takes a regex argument. .match() will return an array of match results – containing either the first match, or all matches if the global flag is used*/

function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
};

/* You'll need to know which category the entry goes in 

JavaScript has a feature called template literals, which allow you to interpolate variables directly within a string. Template literals are denoted with backticks ``, as opposed to single or double quotes. Variables can be passed in to a template literal by surrounding the variable with ${} – the value of the variable will be inserted into the string 

You will want to number the entries a user adds. To get all of the number inputs, you can use the querySelectorAll() method

The querySelectorAll() method returns a NodeList of all the elements that match the selector. A NodeList is an array-like object, so you can access the elements using bracket notation

To see your new HTML content for the targetInputContainer, you will need to use the innerHTML property

The innerHTML property sets or returns the HTML content inside an element */
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
targetInputContainer.innerHTML += HTMLString; 
}

