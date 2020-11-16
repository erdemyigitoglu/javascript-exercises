const ftoc = function(f) {
let c = (f - 32)/1.8;
return +c.toFixed(1);
}

const ctof = function(c) {
let f = 1.8*c + 32;
return +f.toFixed(1)
}

module.exports = {
  ftoc,
  ctof
}
