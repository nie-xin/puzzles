function every(array, perdicate) {
  for (var i = 0, len = array.length; i < len; i++)
    if (!perdicate(array[i]))
        return false;
  return true;
}
