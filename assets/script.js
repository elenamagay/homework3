// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialSymbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

function passwordCriteria () {
  var length = parseInt(
    prompt ("Please choose the length of the password")
  );

  if (isNaN(length) === true) {
    alert ("The length of the password should be a number!");
    return;
  }

  if (length < 8) {
    alert ("The length of the password should be more than 8 characters!");
    return;
  }

  if (length > 128) {
    alert ("The length of the password should be less than 128 characters!");
    return;
  }

  var hasLowercase = confirm(
    "Click OK to include lowercase letters in the password"
  );

  var hasUppercase = confirm(
    "Click OK to include uppercase letters in the password"
  );
  
  var hasNumbers = confirm(
    "Click OK to include numbers in the password"
  );
  
  var hasSpecial = confirm(
    "Click OK to include special characters in the password"
  );

  if (
    hasLowercase === false &&
    hasUppercase === false &&
    hasNumbers === false &&
    hasSpecial === false
    ) {
      alert("Please select at least one type of characters to include in the password!");
      return;
    }

  var newPassword = {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumbers: hasNumbers,
    hasSpecial: hasSpecial,
  };

  return newPassword;  
}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}

function generatePassword() {
  var characters = passwordCriteria();
  var finalPassword = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (characters.hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));    
  }

  if (characters.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));    
  }

  if (characters.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));    
  }

  if (characters.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialSymbol);
    guaranteedCharacters.push(getRandom(specialSymbol));    
  }

  for (var i = 0; i < characters.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    finalPassword.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    
    finalPassword[i] = guaranteedCharacters[i];
  }

  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



