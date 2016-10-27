// Recursive sum
function sum (arr) {
  if (arr.length === 1) {
    return arr[0]
  }

  return arr[0] + sum(arr.slice(1))
}

// Test
const res = sum([2, 4, 6])
console.log(res)
