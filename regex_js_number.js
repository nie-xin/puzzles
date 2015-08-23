/**
 * JS format number regex
 * Match JS style number:
 * - support minus or plus in front of the number
 * - support the decimal dot
 * - support exponent notation (5e-3, 1E10)
 * - the digits in front of / after the dot are not necessary (.5 or 5.5)
 */


/**
 * [+\-]? - match the sign (could be omitted)
 * (\d+\.?\d*|\.\d+) - match "5." and ".5" without also matching "."
 * (e[+\-]?\d+)? - match exponent part (e or E)
 */
var number = /^[+\-]?(\d+\.?\d*|\.\d+)(e[+\-]?\d+)?$/i;


// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});
