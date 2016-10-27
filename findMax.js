// recursive find max of array
function findMax (arr) {
  if (arr.length === 1) {
    return arr[0]
  }

  return Math.max(arr[0], findMax(arr.slice(1)))
}

// Test
const res = findMax([2, 9, 5, 7])
console.log(res)
