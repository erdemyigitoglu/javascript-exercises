const removeFromArray = function(...args) {
let array = args[0];
let newArray = [];
array.forEach((item) => {
if !args.include(item)) {
newArray.push(item);
}}
return newArray;
}
module.exports = removeFromArray
