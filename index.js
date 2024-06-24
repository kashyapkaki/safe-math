// index.js
class SafeMath {
    static add(a, b) {
        const result = a + b;
        if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
            throw new Error('Result is out of safe integer range');
        }
        return result;
    }

    static subtract(a, b) {
        const result = a - b;
        if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
            throw new Error('Result is out of safe integer range');
        }
        return result;
    }

    static multiply(a, b) {
        const result = a * b;
        if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
            throw new Error('Result is out of safe integer range');
        }
        return result;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        const result = a / b;
        if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
            throw new Error('Result is out of safe integer range');
        }
        return result;
    }
}

module.exports = SafeMath;
