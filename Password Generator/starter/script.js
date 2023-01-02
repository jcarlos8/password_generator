// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];~~

// Function to prompt user for password options

function generatePassword() {


var length = parseInt(prompt('Please select the length for your password. It must have at least 10 characters and no more than 64.'));

// Loop to check password length meets requirement and concatenates user options to available characters

while (length <= 10 || length >= 64) {

  alert('Your password must be between 10 and 64 characters!');
  var length = (prompt("Please select the length for your password. It must have at least 10 characters and no more than 64."));
}

var lower = confirm('Would you like to add Lowercase characters?');

var upper = confirm('Would you like to add Uppercase characters?');

var numeric = confirm('Would you like to add Numeric characters?');

var special = confirm('Would you like to add special characters ($@%&*, etc)');

// Empty variable to customize password according to the user's choice

var chars = [];

if (lower) {
  chars = chars.concat(lowerCasedCharacters)
}

if (upper) {
  chars = chars.concat(upperCasedCharacters)
}

if (numeric) {
  chars = chars.concat(numericCharacters)
}

if (special) {
  chars = chars.concat(specialCharacters)
}

console.log(chars);


var randomPwd = [];

for (var i = 0; i < length; i++) {
  randomPwd = randomPwd + chars[Math.floor(Math.random() * chars.length)];
  console.log(randomPwd)
}

return randomPwd;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);