// Use map to implement graph structure
const graph = new Map()

graph.set('start', ['alice', 'bob', 'claire'])
graph.set('bob', ['anuj', 'peggy'])
graph.set('alice', ['peggy'])
graph.set('claire', ['thom', 'jonny'])
graph.set('anuj', [])
graph.set('peggy', [])
graph.set('thom', [])
graph.set('jonny', [])

// simple breadth first search to find seller who's name is ended by an 'm'
function bfsFindSeller (graph, isSeller) {
  // init search queue
  let searchQueue = []
  searchQueue = searchQueue.concat(graph.get('start'))

  // keep a searched set to avoid infinit loop on circular links
  const searched = new Set()

  while (searchQueue.length) {
    const person = searchQueue.shift()

    if (searched.has(person)) {
      continue
    }

    if (isSeller(person)) {
      return person
    }

    searchQueue = searchQueue.concat(graph.get(person))
    searched.add(person)
  }

  return null
}


function isSeller (name) {
  return name.slice(-1) === 'm'
}

const seller = bfsFindSeller(graph, isSeller)

if (seller) {
  console.log(`Seller is ${seller}`)
} else {
  console.log('No seller found')
}
