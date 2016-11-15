// graph hash table
const graph = {}
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2
graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = {}

// costs hash table
costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = Infinity

// parents hash table
const parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = null

const processed = []

// while we have nodes:
// grabe the closest node to start
// update costs of its neighbors
// if any of its neighbors costs updated, update parents too
// mark this node processed

// find lowest cost node avaiable
let node = findLowestCostNode(costs)
while (node) {
  const cost = costs[node]
  const neighbors = graph[node]

  // loop his neigbors
  for (let n of Object.keys(neighbors)) {
    // check find lower cost go from this node to neighbor
    const newCost = cost + neighbors[n]
    if (costs[n] > newCost) {
      // update cost of this node
      costs[n] = newCost
      // update parent
      parents[n] = node
    }
  }

  processed.push(node)
  node = findLowestCostNode(costs)
}

console.log('result map: ', parents)

function findLowestCostNode (costs) {
  let lowestCost = Infinity
  let lowestCostNode = null

  for (let node in costs) {
    const cost = costs[node]
    if (cost < lowestCost && !~processed.indexOf(node)) {
      lowestCost = cost
      lowestCostNode = node
    }
  }

  return lowestCostNode
}
