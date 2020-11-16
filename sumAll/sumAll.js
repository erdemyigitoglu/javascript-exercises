const sumAll = function(a, b) {
let sum = 0;
if ((typeof a == "number" || typeof b != "number") || (a < 0 || b< 0))  {
sum = "ERROR";
} else if (a < b) {
for (let num = a; num <= b; num++) {
sum += num;
}} else {
for (let num = b; num <= a; num++) {
sum += num;
}}
return sum;
}

module.exports = sumAll
