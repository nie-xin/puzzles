/*
 *The first, reverseArray, takes an array as argument and produces a new array
 *that has the same elements in the inverse order.
 *The second, reverseArrayInPlace, does what the reverse method does:
 *it modifies the array given as argument in order to reverse its elements.
 *Neither may use the standard reverse method.
*/

function reverseArray(list) {
  var result = list.reduceRight(function(reversed, item) {
    reversed.push(item);
    return reversed;
  }, []);

  return result;
}

function reverseArrayInPlace(list) {
  var low = 0, high = list.length - 1;
  while (low < high) {
  	var tmp = list[low];
    list[low] = list[high];
    list[high]= tmp;
    low += 1;
    high -= 1;
  }

  return list;
}
