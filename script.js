// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var uppercase = ["A","B","C","D","E","F","G",'H',"I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]",";",":","'",",",".","/","<",">","?","`","~","1","2","3","4","5","7","8","9","0"]


characters = characters.concat(lowercase);
characters = characters.concat(uppercase);
characters = characters.concat(special);

function confirmCharacters(){

  confirm("do you want lowercase letters")
  confirm(lowercase)
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

// must create the variable for every character 'a','b' 'A','B'

// after prompt function add confirm function for adding capital, undercase and special characters
if (condition) {
  
 characterLength 

   minLength = 8;
   maxLength = 128;

 }

