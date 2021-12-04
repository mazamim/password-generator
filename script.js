const length;
const satisfied=false;
const isLowerCase;
const isUppercase;
const isNumeric;
const isSpecial_characters;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
  

    do
{
 length=prompt("length of the password")

   if(!isNaN(length) && length >7 && length < 129)
        break;  
   else
   {
        alert("Please choose length minimum 8  and maximun of 128")
   }     
}while(length)
console.log(length)



do {


isLowerCase=confirm("Do you want to include lowercase?")
console.log("lowercase " + isLowerCase)

isUppercase=confirm("Do you want to include uppercase?")
console.log("uppercase " + isUppercase)


isNumeric=confirm("Do you want to include numeric?")
console.log("numeric " + isNumeric)

isSpecial_characters=confirm("Do you want to include special characters?")
console.log("special " + isSpecial_characters)

if (isLowerCase || isUppercase || isNumeric || isSpecial_characters ){
  satisfied=true;
    break;  
}

else{
   
    alert("Please choose atlease 1 type of character")
    
}
    
} while (satisfied);

console.log("satisfied " +satisfied)


if (satisfied){
  console.log(makeid(length));
}

}

function makeid(length) {
  var special ='!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  var lower   = 'abcdefghijklmnopqrstuvwxyz';
  var upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeric ='0123456789';

  var result           = '';
 
  var charactersLength = characters.length;

  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

