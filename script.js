var inputlength;
var satisfied=false;


//defining the object with default settings
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



function generatePassword(){
  

    do
{
 inputlength=prompt("length of the password")

   if(!isNaN(inputlength) && inputlength >7 && inputlength < 129)
        break;  
   else
   {
        alert("Please choose length minimum 8  and maximun of 128")
   }     
}while(inputlength)
console.log(inputlength)



do {


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
  console.log(makeid(inputlength,obj));
}

}

function makeid(length,myObj) {
  console.log(myObj)
var chracters= ['!"#$%&()*+,-./:;<=>?@[\]^_`{|}~',
'abcdefghijklmnopqrstuvwxyz',
'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
'0123456789']

  var joined;
  
//need to check here
if (myObj.isLowerCase || myObj.isUppercase || myObj.isNumeric || myObj.isSpecial_characters){
  
  joined = chracters.join(',')
  console.log("all")
}



  var result           = '';
 
  var charactersLength = joined.length;

  for ( var i = 0; i < length; i++ ) {
    result += joined.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

