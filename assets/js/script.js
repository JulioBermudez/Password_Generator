// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialchar = "~!@#$%^&*()_+".split("");
var allChars = [];

function generatePassword() {
  var passwordLenght = prompt(
    "How many characters do you want in your password?"
  );
  if (passwordLenght < 8 || passwordLenght > 128) {
    alert("Please enter a number between 8 and 128");
    return;
  }
  console.log(passwordLenght);

  var upperCaseQuestion = confirm(
    "Do you want upper characters in you password?"
  );
  if (upperCaseQuestion === true) {
    //allChars = allChars + upperCase
    allChars = allChars.concat(upperCase);
    console.log(allChars);
  }

  var lowerCaseQuestion = confirm(
    "Do you want lower character in your password? "
  );
  if (lowerCaseQuestion === true) {
    allChars = allChars.concat(lowerCase);
    console.log(allChars);
  }

  var numbersCaseQuestion = confirm("Do you want numbers in your password? ");
  if (numbersCaseQuestion === true) {
    allChars = allChars.concat(numbers);
    console.log(allChars);
  }

  var specialCharCaseQuestion = confirm(
    "Do you want special characters in your password? "
  );
  if (specialCharCaseQuestion === true) {
    allChars = allChars.concat(specialchar);
    console.log(allChars);
  }
  var randomPassword = "";
  //list[Math.floor((Math.random()*list.length))];
  for (let i = 0; i < passwordLenght; i++) {
    randomPassword =
      randomPassword + allChars[Math.floor(Math.random() * allChars.length)];
  }
  allChars = [];
  return randomPassword;
}
