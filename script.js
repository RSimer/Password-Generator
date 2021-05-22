// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var uppercase = ["A","B","C","D","E","F","G",'H',"I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]",";",":","'",",",".","/","<",">","?","`","~","1","2","3","4","5","7","8","9","0"]

var putIn = [];


// end of Assignment code

// ---------------------------------------------------------------------------------------------

// password questions

function PassQuestions(){

// asking for lowercase letters
 var addLowercase = confirm("Do you want lowercase letters?");
 console.log(addLowercase);

//  asking for uppercase characters
var addUppercase = confirm("do you want uppercase letters?");
console.log(addUppercase);

//  asking for special characters (and numbers dont sue me)
var addSpecial = confirm("Do you want special characters and/or numbers because I was too lazy to put numbers in their own category?");
console.log(addSpecial);

// prompting the lenght of the password which my peers helped me immensly on
var passwordLength = prompt("The password's gotta be inbetween 8 and 128 characters. Why someone would create a 128 character password is beyond me.")
while(passwordLength < 8 || passwordLength > 128){
alert ("gotta read homeboi,");
passwordLength = prompt("The password's gotta be inbetween 8 and 128 characters. Why someone would create a 128 character password is beyond me.")
}
console.log(passwordLength);

// end of question section

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// if statements

// if add lowercase
if (addLowercase){
  putIn.push(lowercase);
}
// if add uppercase
if (addUppercase){
  putIn.push(uppercase);
}
// if add special
if (addSpecial){
  putIn.push(special);
}
console.log(putIn); 

// end of if statements

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// this takes the if statements and should put them in the password generator
var passwordCriteria = {
  length: length,
  addLowercase: addLowercase,
  addUppercase: addUppercase,
  addSpecial: addSpecial
};
return passwordCriteria;


// creating the random password with events that are still confusing to me
}
function randomSelector(arr){
var type = Math.floor(Math.random * arr.length);
var element = arr[type];
return element;
console.log (type);
}

// randomizer if statements need to be put in

function generatePassword(){
var options = PassQuestions();
var passResult = [];
var potentialCharacters = [];
var certainCharacters = [];

if (options.addLowercase){
  potentialCharacters = potentialCharacters.concat(lowercase);
  certainCharacters.push(randomSelector(lowercase))
}
if (options.addUppercase){
  potentialCharacters = potentialCharacters.concat(uppercase);
  certainCharacters.push(randomSelector(uppercase))
}
if (options.addSpecial){
  potentialCharacters = potentialCharacters.concat(special);
  certainCharacters.push(randomSelector(special))
}

for (i=0; i<options.length; i++){

  var characters = randomSelector(potentialCharacters);
  passResult.push(characters)

}
for (i=0; i<certainCharacters.length; i++){

 passResult[i] = certainCharacters[i];

}

return passResult.join("");

}
// ----------------------------------------------------------------------------------------------------------------
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



