// recursive count of arr length
function count (arr) {
  if (arr.length === 1) {
    return 1
  }

  return 1 + count(arr.slice(1))
}

// Test
const res = count([1, 2, 3, 4])
console.log(res)
