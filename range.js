/**
 * rang: get a list range from start to end
 * it should accept an optional argument step to define the gap of list
 * list can be in either increasing or decreasing order
 */

 // my urgly solution
function range(start, end, step) {
  var list = [];
  var nb = start;
  if (!step)
    var step = start < end ? 1 : -1;

  if (step > 0)
    for (var i = start; i <= end; i += step)
      list.push(i);
  else
    for (var i = start; i >= end; i += step)
      list.push(i);

  return list;
}

// Underscore _.range
_.range = function(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  step = step || 1;

  // compute the length of result list by (stop - start) / step
  var length = Math.max(Math.ceil((stop - start) / step), 0);
  // create an empty array with a defined length
  var range = Array(length);

  // fill in list with start += step
  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
};
