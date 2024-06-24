# Safe Math

SafeMath is a utility library for performing safe arithmetic operations in JavaScript. It ensures that the results of arithmetic operations do not exceed the safe integer range in JavaScript (Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER).

## Installation

```
npm install safe-math
```

Usage
Here is an example of how to use the SafeMath library:

```
const SafeMath = require('safe-math');

console.log(SafeMath.add(1, 2)); // 3
console.log(SafeMath.subtract(5, 3)); // 2
console.log(SafeMath.multiply(2, 3)); // 6
console.log(SafeMath.divide(6, 2)); // 3
```
## Contributing
If you would like to contribute to the SafeMath library, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Create a new Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
