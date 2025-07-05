// can't be changed once written
const accountId= 12345

// block scope variable
let accountName= "Mehak"

// prefer not to use var because of issue in block scope anf functiona scope
var accountCity= "Ludhiana"

let accountState;

console.table([accountId, accountName, accountCity, accountState])