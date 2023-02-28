// Assignment Code
var generateBtn = document.querySelector("#generate");


//generatepwd -> generate pwd according to user criteria
//1. Ask user how many characters between 8 and 128
// 2. Ask user if they want upper/lowercase, numbers, and/or special characters
// 3. Validate user inputs, ensure user selects a criteria
const characters = {
  capitals:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  numbers:'0123456789',
  specials:'!@#$%^&*',
};

function generatePassword() {
  let passInfo = "";

  let pwdlength = prompt("Please enter password length between 8 and 128 characters");
  if (pwdlength > 128 || pwdlength < 8 || isNaN(pwdlength) == true) {
    console.log ("wrong")
    return generatePassword ()
  } 

   

  let capitals = confirm('Would you like upper and lower case?'); 
  if (capitals == true) {
    console.log ("Capitals will be involved")
    passInfo = passInfo + characters.capitals;

  }

  let numbers = confirm('Would you like numbers?')
  if (numbers == true) {
    console.log ("Numbers will be involved")
    passInfo = passInfo + characters.numbers;
  }

  let specials = confirm('Would you like special characters?')
  if (specials == true) {
    console.log ("Specials will be involved")
    passInfo = passInfo + characters.specials; 
  }
  console.log (passInfo)
  let randomPassword = "";
  for(let i = 0; i < pwdlength; i++) {
  randomPassword += passInfo[Math.floor(Math.random() * passInfo.length)];
    };
  return randomPassword

}


// Write password to the #password input
 function writePassword() {
var password = generatePassword()
 


  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
