const accountId = 1456
let accountEmail =  "gaurav23@gmail.com"
var accountPassword = "12345"
accountCity = "Ooty"

let accountState;

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

// accountId = 25   //not allowed or cannot be reassigned 
//console.log(accountId);

accountEmail = 'gu12@gmail.com'
accountPassword = '54321'
accountCity = 'Manali'



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



