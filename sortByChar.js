/*
http://www.codewars.com/kata/54eea36b7f914221eb000e2f/train/javascript

Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

example:
function sortIt('bid, zag', 2) //=> 'zag, bid'

The length of all words provided in the list will be >= n. The format will be "x, x, x"
*/

function sortIt(list, n) {
  return list.split(', ').sort(function(a, b) {
    var p = n - 1;
    return a.charCodeAt(p) - b.charCodeAt(p);
  }).join(', ');
}