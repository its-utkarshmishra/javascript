const accountId = 144553 
let accountEmail = "utkarsh@google.com"
var accountpassword = "12345"
accountCity = "Lucknow"
let accountState;
// accountId = 2 

/*
Prefer let inplace of var becaause of issue in
block scope and functional scope.
*/

console.table([accountEmail,accountId,accountpassword,accountCity, accountState])