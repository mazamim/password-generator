
//defining   with default settings
const lowercaseletters ='abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberLetters = '0123456789';
const specialChracterletters='!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

var inputlength;
var satisfied=false;
var lengthSatisfied=false;
const lengthArray=[];
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

//get conditions
isLowerCase = true;
console.log("lowercase " + isLowerCase )
  lengthArray.push(inputlength)

if(isUppercase=confirm("Do you want to include uppercase?")){
    console.log("uppercase " + isUppercase);
    let x = getRandomIntInclusive(1,inputlength-1);
    console.log("x is "+x)
    let y=(inputlength-x);
    console.log("y is "+y)
    
    while (lengthArray.length) {
      lengthArray.pop();
    }

    lengthArray.push(x,y);

}  

if(isNumeric=confirm("Do you want to include numeric?")){
  console.log("numeric " + isNumeric)
 replaceLargestWithTwo(lengthArray);
}

if(isSpecial_characters=confirm("Do you want to include special characters?")){
  console.log("special " + isSpecial_characters)
  replaceLargestWithTwo(lengthArray);
}

////////////////////////////////////


if (isUppercase || isNumeric || isSpecial_characters ){
  satisfied=true;
    break;  
}else{alert("Please choose atlease 1 type of character")}
} while (satisfied);

console.log("satisfied " +satisfied)


//assign input value tobject

var obj=
{ isLowerCase,
  isUppercase,
  isNumeric,
  isSpecial_characters};
/////////////////////////////////////////////////////////////////
if (satisfied){
  console.log("I am satisdfied")

  //call function
return makePassword(lengthArray,obj);
}

}



//function to Password

function makePassword(lenghArray,myObj) {

console.log(lenghArray)

//join chracters depend on true false list
  const joinedObjects =joining(myObj,lenghArray);  
    var outPut="";
  for (const property in joinedObjects) {
    outPut += joinedObjects[property];
  }

   return outPut;
}





//function outsource

function joining(chracters,arrayList){
 
   var results={
    lower:'',
    upper:'',
    numeric:'',
    special:''
  }

  
  if (chracters.isLowerCase){

    let x = arrayList.shift();
    lowerResults='';
    for ( var i = 0; i < x; i++ ) {
      lowerResults += lowercaseletters.charAt(Math.floor(Math.random() * 
      lowercaseletters.length));
   }
     
   console.log(arrayList)
    results.lower=lowerResults;
  }
  else{
    delete results.lower;
  }
  
  if (chracters.isUppercase)
  {
    let x = arrayList.shift();
    upperResults='';
    for ( var i = 0; i < x; i++ ) {
      upperResults += uppercaseLetters.charAt(Math.floor(Math.random() * 
      uppercaseLetters.length));
   }
     
   console.log(arrayList)
    results.upper=upperResults;
}
else{
  delete results.upper;
}
  
  if (chracters.isNumeric)
  {
    let x = arrayList.shift();
    numericResults='';
    for ( var i = 0; i < x; i++ ) {
      numericResults += numberLetters.charAt(Math.floor(Math.random() * 
      numberLetters.length));
   }
     
   console.log(arrayList)
    results.numeric=numericResults;
}
else{
  delete results.numeric;
}
  if (chracters.isSpecial_characters)
  {
    let x = arrayList.shift();
   specialResults='';
    for ( var i = 0; i < x; i++ ) {
      specialResults += specialChracterletters.charAt(Math.floor(Math.random() * 
      specialChracterletters.length));
   }
     
   console.log(arrayList)
    results.special=specialResults;

    
  }
  else{
    delete results.special;
  }

  
  return results;
}
  


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function replaceLargestWithTwo(lengthArray){
  var largest=(Math.max(...lengthArray));
  let x= getRandomIntInclusive(1,largest-1);
  let y= largest-x
  lengthArray.sort((a, b) => a - b);
  lengthArray.pop();
  return lengthArray.push(x,y)
}
