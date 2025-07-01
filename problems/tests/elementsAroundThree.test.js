const { GraphNode } = require('../utils') 
const elementsAroundThree = require('../elementsAroundThree')

describe('elementsAroundThree', () => {
  test('should return correct elements around three regarding visual example 1', () => {
    const three = new GraphNode(1)

    expect(elementsAroundThree(three)).toStrictEqual([1])
  })

  test('should return correct elements around three regarding visual example 2', () => {
    const three = new GraphNode(1, [
      new GraphNode(2),
      new GraphNode(3),
      new GraphNode(4),
    ])

    expect(elementsAroundThree(three)).toStrictEqual([2, 1, 4])
  })

  test('should return correct elements around three regarding visual example 3', () => {
    const three = new GraphNode(3, [
      new GraphNode(4, [
        new GraphNode(2, [new GraphNode(13), new GraphNode(10)]),
        new GraphNode(7),
      ]),
      new GraphNode(6, [new GraphNode(1)]),
      new GraphNode(9, [
        new GraphNode(4, [
          new GraphNode(11, [new GraphNode(5), new GraphNode(8)]),
          new GraphNode(14),
        ]),
        new GraphNode(12),
      ]),
    ])

    expect(elementsAroundThree(three)).toStrictEqual([
      5, 13, 2, 4, 3, 9, 12, 14, 8,
    ])
  })
})
