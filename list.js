function prepend(el, list) {
  var node = {value: el, rest: null};
  if (list) {
    node.rest = list;
    return node;
  } else
    return node;
}

function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) 
    list = prepend(arr[i], list);
  
  return list;
}

function listToArray(list) {
  var arr = [];
  while (list.rest) {
    arr.push(list.value);
    list = list.rest;
  }
  arr.push(list.value);
  
  return arr;
}

function nth(list, index) {
  var i = 0;
  while (list.rest && i < index) {
    list = list.rest;
    i += 1;
  }
  if (list.rest === null)
    return undefined;
  else
    return list.value;
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20