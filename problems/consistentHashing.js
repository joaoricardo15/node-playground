const crypto = require('crypto')

class ConsistentHashing {
  constructor(nodes) {
    this.ring = {}
    this.keys = []
    this.nodes = []

    nodes.forEach((node) => {
      this.addNode(node)
    })
  }

  addNode(node) {
    this.nodes.push(node)
    const key = this.hash(node)
    this.keys.push(key)
    this.ring[key] = node
    this.keys.sort()
  }

  removeNode(node) {
    const i = this.nodes.indexOf(node)
    if (i >= 0) this.nodes.splice(i, 1)

    const key = this.hash(node)
    delete this.ring[key]

    const j = this.keys.indexOf(key)
    if (j >= 0) this.keys.splice(j, 1)
  }

  getNode(key) {
    if (this.nodes.length == 0) return 0

    const hash = this.hash(key)
    const pos = this.getNodePosition(hash)
    return this.ring[this.keys[pos]]
  }

  getNodePosition(hash) {
    let upper = this.nodes.length - 1
    let lower = 0
    let mid = 0

    if (upper == 0) return 0

    while (lower <= upper) {
      mid = Math.floor((lower + upper) / 2)

      if (this.keys[mid] > hash) {
        upper = mid - 1
      } else if (this.keys[mid] < hash) {
        lower = mid + 1
      } else {
        return mid
      }
    }

    if (upper < 0) {
      upper = this.nodes.length - 1
    }

    return upper
  }

  hash(str) {
    return crypto.createHash('sha1').update(str).digest('hex')
  }
}

module.exports = ConsistentHashing
