const faker = require('faker');

console.log('====================');
console.log('WELCOME TO MYSHOP!');
console.log('====================');
for (let i = 0; i < 10; i++) {
  console.log(`${faker.commerce.product()} - ${faker.commerce.price()}`);
}
