const assert = require('assert');
const SafeMath = require('./index');

// Helper function to run tests
function runTests() {
    try {
        testAdd();
        testSubtract();
        testMultiply();
        testDivide();
        console.log('All tests passed.');
    } catch (error) {
        console.error('Test failed:', error.message);
    }
}

function testAdd() {
    assert.strictEqual(SafeMath.add(1, 2), 3, 'add(1, 2) should return 3');
    assert.throws(() => SafeMath.add(Number.MAX_SAFE_INTEGER, 1), /Result is out of safe integer range/, 'add(Number.MAX_SAFE_INTEGER, 1) should throw an error');
    console.log('add() tests passed.');
}

function testSubtract() {
    assert.strictEqual(SafeMath.subtract(5, 3), 2, 'subtract(5, 3) should return 2');
    assert.throws(() => SafeMath.subtract(Number.MIN_SAFE_INTEGER, 1), /Result is out of safe integer range/, 'subtract(Number.MIN_SAFE_INTEGER, 1) should throw an error');
    console.log('subtract() tests passed.');
}

function testMultiply() {
    assert.strictEqual(SafeMath.multiply(2, 3), 6, 'multiply(2, 3) should return 6');
    assert.throws(() => SafeMath.multiply(Number.MAX_SAFE_INTEGER, 2), /Result is out of safe integer range/, 'multiply(Number.MAX_SAFE_INTEGER, 2) should throw an error');
    console.log('multiply() tests passed.');
}

function testDivide() {
    assert.strictEqual(SafeMath.divide(6, 3), 2, 'divide(6, 3) should return 2');
    assert.throws(() => SafeMath.divide(6, 0), /Division by zero/, 'divide(6, 0) should throw an error');
    assert.throws(() => SafeMath.divide(Number.MAX_SAFE_INTEGER, 0.5), /Result is out of safe integer range/, 'divide(Number.MAX_SAFE_INTEGER, 0.5) should throw an error');
    console.log('divide() tests passed.');
}

// Run the tests
runTests();
