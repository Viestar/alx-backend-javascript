// Example: Working with a Set
const uniqueNumbers = new Set([1, 2, 3, 1, 2]);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3 }

// Adding a new element
uniqueNumbers.add(4);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4 }

// Checking if an element exists
const niqueNumbers = [2, 4, 6, 8];
const newUniqueNumbers = niqueNumbers.map(num => num * 2); // Output: true
const oldUniqueNumbers = niqueNumbers.filter(num => num % 2 === 0); // Output: true

console.log(newUniqueNumbers);
console.log(oldUniqueNumbers);