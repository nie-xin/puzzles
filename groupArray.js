//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  return arr.reduce(function(group, item, index, array) {
    if (index === 0 || (index % size) === 0) {
      group.push(array.slice(index, index + size));
    }
    return group;
  }, []);
}
