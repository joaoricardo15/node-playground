const reconstructQueue = require('../queueReconstructionByHeight')

describe('sum', () => {
  test('Example 1: should return the right reconstructed queue', () => {
    const people = [
      [7, 0],
      [4, 4],
      [7, 1],
      [5, 0],
      [6, 1],
      [5, 2],
    ]
    const reconstrucutedPeople = [
      [5, 0],
      [7, 0],
      [5, 2],
      [6, 1],
      [4, 4],
      [7, 1],
    ]
    expect(reconstructQueue(people)).toEqual(reconstrucutedPeople)
  })

  test('Example 2: should return the right reconstructed queue', () => {
    const people = [
      [6, 0],
      [5, 0],
      [4, 0],
      [3, 2],
      [2, 2],
      [1, 4],
    ]
    const reconstrucutedPeople = [
      [4, 0],
      [5, 0],
      [2, 2],
      [3, 2],
      [1, 4],
      [6, 0],
    ]
    expect(reconstructQueue(people)).toEqual(reconstrucutedPeople)
  })
})
