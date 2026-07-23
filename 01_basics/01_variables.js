const accountId = 234643
let accountEmail = "mishraabhinav@google.com"
var accountPassword = "12345"
accountcity = "Jaipur"
let accountState;

 // accountId = 2450 // not allowed

 accountEmail = "hc@hc.com"
 accountPassword="987654321"
 accountcity = "Dehradun"
 accountState;

 /*
    prefer not to use var
    because of issue in block scope and functional scope
 */

console.log(accountId);

console.table  ([accountId , accountEmail , accountPassword , accountcity , accountState])
