
//defining   with default settings
var inputlength;
var satisfied=false;
var lengthSatisfied=false;

var obj={
  isLowerCase:false,
  isUppercase:false,
  isNumeric:false,
  isSpecial_characters:false

};

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




// generate password function
function generatePassword(){
  

//     do
// {
//  inputlength=prompt("length of the password")


//  if(!isNaN(inputlength) && inputlength > 7 && inputlength < 129 && inputlength !== null ){
//   lengthSatisfied=true;
//   continue;
//  } 
//  else{
//   alert("Please choose length minimum 8  and maximun of 128")
//   lengthSatisfied=false;
//   break;
//  }  

// }

// while(lengthSatisfied)



do {
  inputlength=prompt("length of the password")
 if(!isNaN(inputlength) && inputlength > 7 && inputlength < 129 && inputlength !== null ){
  lengthSatisfied=true;
 
 } 
 else{
  alert("Please choose length minimum 8  and maximun of 128")
  lengthSatisfied=false;

 } 


  } while (lengthSatisfied==false);



console.log(inputlength)

do {

console.log("lengh satisfy is "+lengthSatisfied+ "check")
isLowerCase = confirm("Do you want to include lowercase?")
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


var obj=
{ isLowerCase,
  isUppercase,
  isNumeric,
  isSpecial_characters};

if (satisfied){
  console.log("I am satisdfied")

  //call function
  makePassword(inputlength,obj);
}

}




//function to Password

function makePassword(mylength,myObj) {

//asign chracters
var chracters={
  lower:'abcdefghijklmnopqrstuvwxyz', 
  upper:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric:'0123456789',
  special:'!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
};


//join chracters depend on true false list
  var joined="abcdefghijklmnopqrstuvwxyz";


  var result           = '';
 
  // var charactersLength = joined.length;
  var charactersLength = mylength;

  for ( var i = 0; i < mylength; i++ ) {
    result += joined.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

