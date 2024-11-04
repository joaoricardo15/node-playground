const { QuadThree, buildQuadThree} = require('./quadThree')

describe('buildQuadThree', () => {
    test('should return the correct quad three', () => {
        const grid = [[]]
        const quadThree = new QuadThree(undefined, true)
        expect(buildQuadThree(grid)).toStrictEqual(quadThree)
    })
    
    test('should return the correct quad three', () => {
        const grid = [[1]]
        const quadThree = new QuadThree(1, true)
        expect(buildQuadThree(grid)).toStrictEqual(quadThree)
    })

    test('should return the correct quad three', () => {
        const grid = [
            [2, 2],
            [2, 2],
        ]
        const quadThree = new QuadThree(2, true)
        expect(buildQuadThree(grid)).toStrictEqual(quadThree)
    })

    test('should return the correct quad three', () => {
        const grid = [
            [2, 2],
            [2, 3],
        ]
        const quadThree = new QuadThree(undefined, false,
            new QuadThree(2, true),
            new QuadThree(2, true),
            new QuadThree(2, true),
            new QuadThree(3, true)
        )
        expect(buildQuadThree(grid)).toStrictEqual(quadThree)
    })

    test('should return the correct quad three', () => {
        const grid = [
            [4, 4, 4, 4],
            [4, 4, 4, 4],
            [4, 4, 4, 4],
            [4, 4, 4, 4],
        ]
        const quadThree = new QuadThree(4, true)
        expect(buildQuadThree(grid)).toStrictEqual(quadThree)
    })

    test('should return the correct quad three', () => {
        const grid = [
            [4, 4, 4, 4],
            [4, 4, 4, 4],
            [4, 4, 5, 5],
            [4, 4, 5, 5],
        ]
        const quadThree = new QuadThree(undefined, false,
            new QuadThree(4, true),
            new QuadThree(4, true),
            new QuadThree(4, true),
            new QuadThree(5, true)
        )
        expect(buildQuadThree(grid)).toStrictEqual(quadThree)
    })

    test('should return the correct quad three', () => {
        const grid = [
            [2, 2, 3, 3],
            [2, 2, 3, 3],
            [4, 4, 2, 3],
            [4, 4, 4, 5],
        ]

        const quadThree = new QuadThree(undefined, false,
            new QuadThree(2, true),
            new QuadThree(3, true),
            new QuadThree(4, true),
            new QuadThree(undefined, false,
                new QuadThree(2, true),
                new QuadThree(3, true),
                new QuadThree(4, true),
                new QuadThree(5, true),
            ),
        )
        expect(buildQuadThree(grid)).toStrictEqual(quadThree)
    })
})