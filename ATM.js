var x = prompt("Please enter Total Amount in the Bank Account:", "0");
var y = prompt("Please enter the amount to debit:", "0");
 
var totalAmount = parseInt(x);
var debitAmount = parseInt(y);


if((debitAmount%5===0)&&(totalAmount>(debitAmount+0.50))){
   console.log("The balance is:", totalAmount-debitAmount-0.50)
   }
else{
  console.log ("The balance is:", totalAmount)
}