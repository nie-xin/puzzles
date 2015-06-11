function some(array, perdicate) {
  for (var i = 0, len = array.length; i < len; i ++)
    if (perdicate(array[i]))
        return true;
  return false;
}
