const networkDelayTime = require('../networkDelayTime')

describe('sum', () => {
    test('should return the correct min delay. Test case 1', () => {
        expect(networkDelayTime([[1,2,1]], 2, 2)).toBe(-1)
    })

    test('should return the correct min delay. Test case 2', () => {
        expect(networkDelayTime([[1,2,1]], 2, 1)).toBe(1)
    })
    
    test('should not return the correct min delay. Test case 3', () => {
        expect(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)).toBe(2)
    })
})