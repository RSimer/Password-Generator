// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var uppercase = ["A","B","C","D","E","F","G",'H',"I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]",";",":","'",",",".","/","<",">","?","`","~","1","2","3","4","5","7","8","9","0"]

var putIn = [];

// characters = characters.concat(lowercase);
// characters = characters.concat(uppercase);
// characters = characters.concat(special);

function generatePassword(){

 var addLowercase = ("Do you want lowercase letters?");
 console.log(addLowercase);
var addUppercase = ("do you want uppercase letters?");
console.log(addUppercase);
var addSpecial = ("Do you want special characters and/or numbers because I was too lazy to put numbers in their own category?");
console.log(addSpecial);
var passwordLength = "The password's gotta be inbetween 8 and 128 characters. Why someone would create a 128 character password is beyond me."
while(passwordLength < 8 || passwordLength > 128){
alert ("gotta read homeboi,");
passwordLength = prompt("The password's gotta be inbetween 8 and 128 characters. Why someone would create a 128 character password is beyond me.")
}
console.log(passwordLength);

if (addLowercase){
  putIn.push(lowercase);
}
console.log(putIn);
if (addUppercase){
  putIn.push(uppercase);
}
console.log(putIn);
if (addSpecial){
  putIn.push(special);
}
console.log(putIn);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// create a function that on click will prompt the character length for the password (must be between 8-128 characters) 

// after prompt function add confirm function for adding capital, undercase and special characters

