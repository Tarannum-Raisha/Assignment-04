/*function signature/sample */
function calculateTax(income, expenses) {
    // You have to write your code here
    if( income >= expenses){
        if( income >= 0 && expenses >= 0){
            const nowMoney = income - expenses;
            const tax = nowMoney*20/100;
            return tax;
        }
        else{
            return  "Invalid Input";
        }
    }

    else{
        return  "Invalid Input";
    }
   
}


console.log('tax:' , calculateTax( 10000, 3000));
console.log('tax:' , calculateTax( 34000, 1753));


console.log('tax:' , calculateTax( 5000, 1500));

console.log('tax:' , calculateTax( 7000, 7000));


console.log('tax:' , calculateTax( -5000, 2000));

console.log('tax:' , calculateTax( 6000, -1500));
