const printShortestPath = require('../redKnightShortestPath')

describe('printShortestPath', () => {
  let consoleSpy

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('should print the shortest path for input 7, 0, 3, 4, 3', () => {
    printShortestPath(7, 0, 3, 4, 3)

    expect(consoleSpy.mock.calls[0][0]).toBe(2)
    expect(consoleSpy.mock.calls[1][0]).toBe('LR LL')
  })

  test('should print the shortest path for input 7, 6, 6, 0, 1', () => {
    printShortestPath(7, 6, 6, 0, 1)

    expect(consoleSpy.mock.calls[0][0]).toBe(4)
    expect(consoleSpy.mock.calls[1][0]).toBe('UL UL UL L')
  })

  test('should print the shortest path for input 30, 25, 2, 23, 29', () => {
    printShortestPath(30, 25, 2, 23, 29)

    expect(consoleSpy.mock.calls[0][0]).toBe(14)
    expect(consoleSpy.mock.calls[1][0]).toBe('UR R R R R R R R R R R R R R')
  })

  test('should print the shortest path for input 7, 5, 1, 0, 5', () => {
    printShortestPath(7, 5, 1, 0, 5)

    expect(consoleSpy.mock.calls[0][0]).toBe('Impossible')
  })

  test('should print the shortest path for input 50, 40, 35, 1, 4', () => {
    printShortestPath(50, 40, 35, 1, 4)

    expect(consoleSpy.mock.calls[0][0]).toBe('Impossible')
  })
})
