let string1 = "Akande";
let string2 = "257";

function checkString(string){
  if(typeof string === "string"){
    console.log(!isNaN(string));
  } 
}

checkString(string1);
checkString(string2);