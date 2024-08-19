var firstName = 'stephen';
var age = 35;
var isAdmin = true;
var accBal = undefined;
var brain = null;
var sport = 'Ayo';
var scores = [25, 67, 68];
var devs = ['dml', 'alu', 'cm'];
var scores2 = [23, 45, 67];
var dev2 = ['stephen', 'ayo'];
var person = ['stephen', 45, false];
console.log(person);
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["Success"] = 200] = "Success";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["ServerError"] = 500] = "ServerError";
})(HttpStatus || (HttpStatus = {}));
var myStatus = HttpStatus.Success;
console.log(myStatus);
function profit(cp, sp) {
    var profit = sp - cp;
    return profit;
}
console.log(profit(39, 200));
function percentageProfit(cp, sp) {
    var percentageProfit = (sp - cp / 100);
    return percentageProfit;
}
console.log(percentageProfit(10000, 15000));
var greet = function (name, age) {
    console.log("my name is ".concat(name, " and i am ").concat(age, " years old "));
};
console.log(greet('steve', 12));
var value;
value = 'stephen';
value = true;
value = 34;
var value1;
value1 = 'stephen';
value1 = 45;
var job;
job = 'stephen';
job = true;
