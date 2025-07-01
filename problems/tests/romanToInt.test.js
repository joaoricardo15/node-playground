const romanToInt = require('../romanToInt')

describe('romanToInteger', () => {
  test('should return undefined for invalid input', () => {
    expect(romanToInt(null)).toBe()
    expect(romanToInt(undefined)).toBe()
    expect(romanToInt(1)).toBe()
    expect(romanToInt({})).toBe()
    expect(romanToInt(true)).toBe()
    expect(romanToInt('')).toBe()
    expect(romanToInt('s')).toBe()
    expect(romanToInt('XXs')).toBe()
    expect(romanToInt('XIXIXIXIXIXIXIXI')).toBe()
  })

  test('should return corresponding single roman symbol when input corresponds to one single roman symbol', () => {
    expect(romanToInt('I')).toBe(1)
    expect(romanToInt('V')).toBe(5)
    expect(romanToInt('X')).toBe(10)
    expect(romanToInt('L')).toBe(50)
    expect(romanToInt('C')).toBe(100)
    expect(romanToInt('D')).toBe(500)
    expect(romanToInt('M')).toBe(1000)
  })

  test('should return corresponding single roman symbol when input corresponds to only descending roman symbols', () => {
    expect(romanToInt('II')).toBe(2)
    expect(romanToInt('III')).toBe(3)
    expect(romanToInt('VI')).toBe(6)
    expect(romanToInt('VII')).toBe(7)
    expect(romanToInt('VIII')).toBe(8)
    expect(romanToInt('XI')).toBe(11)
    expect(romanToInt('XII')).toBe(12)
    expect(romanToInt('XIII')).toBe(13)
    expect(romanToInt('XV')).toBe(15)
    expect(romanToInt('XVI')).toBe(16)
    expect(romanToInt('XVII')).toBe(17)
    expect(romanToInt('XVIII')).toBe(18)
    expect(romanToInt('XX')).toBe(20)
  })

  test('should return corresponding single roman symbol when input corresponds to only ascending roman symbols', () => {
    expect(romanToInt('IV')).toBe(4)
    expect(romanToInt('IX')).toBe(9)
    expect(romanToInt('IXX')).toBe(19)
  })

  test('should return corresponding single roman symbol when input corresponds to both descending and ascending roman symbols', () => {
    expect(romanToInt('XIV')).toBe(14)
  })
})
