const memoize = require("./memoize");

describe('memoize', () => {
    test('should execute one input test function only once', () => {
        const square = jest.fn(n => {
            return n * n;
        });

        const memoizedSquare = memoize(square)
        memoizedSquare(2)
        memoizedSquare(2)
        
        expect(square).toHaveBeenCalledTimes(1)
    })

    test('should execute two inputs test function only once', () => {
        const sum = jest.fn((a, b) => {
            return a + b;
        });

        const memoizedSum = memoize(sum)
        memoizedSum(1, 2)
        memoizedSum(1, 2)
        expect(sum).toHaveBeenCalledTimes(1)
    })

    test('should execute two inputs test function only once per memoized instance', () => {
        const sum = jest.fn((a, b) => {
            return a + b;
        });
        
        const memoizedSum = memoize(sum)
        memoizedSum(1, 2)
        memoizedSum(1, 2)

        const memoizedSum2 = memoize(sum)
        memoizedSum2(1, 2)
        memoizedSum2(1, 2)

        expect(sum).toHaveBeenCalledTimes(2)
    })
})