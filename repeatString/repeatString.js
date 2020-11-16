const repeatString = function(str, times) {
let s = "";
if (times < 0)
{ return "ERROR"
}
for (let i = 0; i <  times; i++) {
 s += str
}
return s
}
module.exports = repeatString
