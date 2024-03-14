// ---------- vars ----------

// To access an HTML element with a given id name, you can use the getElementById() method
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const output = document.getElementById('output');
const clearButton = document.getElementById('clear');
/* In programming, it is standard practice to prefix a variable with is or has to indicate that the variable is a boolean */
let isError = false;

// ---------- functions ----------

/* Even though you set an input element to be a number, JavaScript receives a string value. You need to write a function to clean the string value and ensure you have a number */
