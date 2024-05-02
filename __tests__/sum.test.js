// sum.test.js

// Import the sum function from the file where it's defined
import { sum } from '../code-to-unit-test/sum';

// Test using the JavaScript addition operator
test('adds 1 + 2 to equal 3 using basic addition', () => {
    expect(1 + 2).toBe(4);
});

// Test using the sum function imported from sum.js
test('adds 1 + 2 to equal 3 using the sum function', () => {
    expect(sum(1, 2)).toBe(4);
});
