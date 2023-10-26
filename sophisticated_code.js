/**
 * filename: sophisticated_code.js
 * 
 * This code is a complex and creative example in JavaScript that demonstrates
 * various advanced concepts such as closures, higher-order functions, prototype
 * inheritance, recursive algorithms, and more. It simulates a simple e-commerce
 * system for managing customers, products, and orders.
 */

// Define a Customer constructor function
function Customer(name, email) {
  this.name = name;
  this.email = email;
  this.orders = [];
}

// Prototype method for adding an order to a customer
Customer.prototype.addOrder = function (order) {
  this.orders.push(order);
};

// Define a Product constructor function
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Define an Order constructor function
function Order(customer, products) {
  this.customer = customer;
  this.products = products;
  this.total = 0;
}

// Prototype method for calculating the total price of an order
Order.prototype.calculateTotal = function () {
  this.total = this.products.reduce((acc, product) => acc + product.price, 0);
};

// Create some products
const product1 = new Product("Product 1", 100);
const product2 = new Product("Product 2", 150);
const product3 = new Product("Product 3", 200);

// Create some customers
const customer1 = new Customer("John Doe", "john@example.com");
const customer2 = new Customer("Jane Smith", "jane@example.com");

// Create some orders
const order1 = new Order(customer1, [product1, product2]);
const order2 = new Order(customer2, [product2, product3]);

// Add orders to customers
customer1.addOrder(order1);
customer2.addOrder(order2);

// Calculate the totals for the orders
order1.calculateTotal();
order2.calculateTotal();

// Print the details of each customer and their orders
console.log(`Customer: ${customer1.name}`);
console.log("Orders:");
customer1.orders.forEach((order, index) => {
  console.log(`Order ${index + 1}:`);
  order.products.forEach((product, index) => {
    console.log(`Product ${index + 1}: ${product.name} - $${product.price}`);
  });
  console.log(`Total: $${order.total}`);
});
console.log("----------");
console.log(`Customer: ${customer2.name}`);
console.log("Orders:");
customer2.orders.forEach((order, index) => {
  console.log(`Order ${index + 1}:`);
  order.products.forEach((product, index) => {
    console.log(`Product ${index + 1}: ${product.name} - $${product.price}`);
  });
  console.log(`Total: $${order.total}`);
});

/*
Output:
--------
Customer: John Doe
Orders:
Order 1:
Product 1: Product 1 - $100
Product 2: Product 2 - $150
Total: $250
----------
Customer: Jane Smith
Orders:
Order 1:
Product 1: Product 2 - $150
Product 2: Product 3 - $200
Total: $350
*/

// ... More code (additional functionality) goes here ...

// Example of a recursive algorithm
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// ... More code (additional functionality or modules) goes here ...

// Finally, export any necessary modules or variables if needed
export { Customer, Product, Order, factorial };