function groupBy(array, fn) {
  res = {};
  array.forEach(function(item) {
    var index = fn(item);
    if (!res[index])
      res[index] = [item];
    else
      res[index].push(item);
  });
  return res;
}
