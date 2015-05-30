/*
 *Write a function, deepEqual, that takes two values and returns true only if they
 *are the same value or are objects with the same properties whose values are
 *also equal when compared with a recursive call to deepEqual.
*/

function deepEqual(a, b) {
  if ( (typeof a === 'object' && a !== null) && (typeof b === 'object' && b !== null) ) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
  	for (var prop in a) {
      if (!b[prop])
        return false;
      return deepEqual(a[prop], b[prop]);
    }
  } else
    return a === b;
}
