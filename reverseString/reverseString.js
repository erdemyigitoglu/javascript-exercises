const reverseString = function(str) {
let list = str.split("");
let rList = list.reverse();
str = rList.join("");
return str;
}

module.exports = reverseString
