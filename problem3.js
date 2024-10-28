/*function signature/sample */
function checkDigitsInName(name) {
    //write your code here

    if(typeof name === 'string'){
        // return !isNaN(parseFloat(name) && isFinite(name));
        // return /\d/.test(name);
        const result = /\d/.test(name);
        return result;
    }
    else{ 
        return' Invalid Input';
    }
}


 const person1 = checkDigitsInName('Raj123');
 console.log(person1);

 const person2 = checkDigitsInName('n9ayeem');
 console.log(person2);

 const person3 = checkDigitsInName('e1mu3');
 console.log(person3);

 const person4 = checkDigitsInName('Suman');
 console.log(person4);

 const person5 = checkDigitsInName('Name2024');
 console.log(person5);

 const person6 = checkDigitsInName('!@#');
 console.log(person6);

 const person7 = checkDigitsInName(["Raj"]);
 console.log(person7);

