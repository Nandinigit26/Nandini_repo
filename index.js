// Simple JavaScript example
const name = 'User';
const message = `Hello, ${name}!`;

console.log(message);

function greet(person) {
  return `Welcome, ${person}!`;
}

console.log(greet('Alice'));

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log('Doubled numbers:', doubled);

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log('Total:', total);
