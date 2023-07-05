//Asign a variable to the button (means that the button is selected on HTML file, only need to asign a task to that button)
var generateBtn = document.querySelector("#generate");

//This are the variables that i am going to use
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialChar = "!@#$%^&*()".split("");

//this variable stores all the results of the questions
var allCharacters = [];

//function that will create diferent prompt and alerts that going to add values to variable allCharacters
function generatePassword() {

//prompt asking how many characters do i need to the password
var passwordLenght = prompt("How many characters do you want in your passord?");
if (passwordLenght < 8 || passwordLenght > 128) {
  alert("Please enter a number between 8 and 128");
  return;
}

//confirm questions ansking if i want lower case characters in the password
var lowerCaseQuestion = confirm("Do you want lower case characters in your password?");
if (lowerCaseQuestion === true) {
  allCharacters = allCharacters.concat(lowerCase);
}

//confirm questions ansking if i want upper case characters in the password
var upperCaseQuestions = confirm('Do you want upper case characters in your password?');
if (upperCaseQuestions === true) {
  allCharacters = allCharacters.concat(upperCase);
}

//confirm questions ansking if i want numbers in the password
var numbersQuestions = confirm("Do you want numbers in your password?");
if (numbersQuestions === true) {
  allCharacters = allCharacters.concat(numbers);
}

//confirm questions ansking if i want special characters in the password
var specialCharQuestions = confirm("Do you want special characters in your password?");
if (specialCharQuestions === true) {
  allCharacters = allCharacters.concat(specialChar);
}

//variable that will store the random password 
var randomPassword = "";
for (let i = 0; i < passwordLenght; i++) {
 randomPassword =  randomPassword + allCharacters[Math.floor(Math.random()*allCharacters.length)];
}

//variable that print the result of the random password
var passwordText = document.querySelector("#password");
passwordText.value = randomPassword;

if (allCharacters = []) {
  passwordText.value = "Please Try again";
}

}


//If you click on the button this is going to call the function generatePassword
generateBtn.addEventListener("click", generatePassword);