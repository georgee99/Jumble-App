const { jumble } = require('../src/main.js');

describe('jumble functionality', () => {
  test('should shift letters to the right by the number provided', () => {
    expect(jumble('test 123!', 0)).toBe('test 123');
    expect(jumble('test 123!', 1)).toBe('uftu 123');
    expect(jumble('test 123!', 100)).toBe('paop 123');
    expect(jumble('test 123!', 26)).toBe('test 123');
  });

  test('should not run if n is out of bounds', () => {
    expect(jumble('test', -1)).toBe("The number is not in range");
    expect(jumble('test', 1001)).toBe("The number is not in range");
  })

  test('should not change blanks', () => {
    expect(jumble('', 1)).toBe('');
  });

  test('should remove special characters', () => {
    expect(jumble('test!!!!!', 0)).toBe('test');
  })

  test('should convert word to lowercase', () => {
    expect(jumble("AAABBBCCC", 1)).toBe("bbbcccddd");
  })
});
