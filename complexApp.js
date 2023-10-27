// complexApp.js

// This code is a complex application that simulates a stock trading system.
// It provides functionalities to create and manage portfolios, search for stocks, buy and sell stocks, and view portfolio performance.

// Portfolio class to represent a user's portfolio with stocks
class Portfolio {
  constructor(name) {
    this.name = name;
    this.stocks = [];
  }

  addStock(stock) {
    this.stocks.push(stock);
  }

  removeStock(stock) {
    const index = this.stocks.indexOf(stock);
    if (index !== -1) {
      this.stocks.splice(index, 1);
    }
  }

  calculateTotalValue() {
    let totalValue = 0;
    this.stocks.forEach((stock) => {
      totalValue += stock.calculateValue();
    });
    return totalValue;
  }
}

// Stock class to represent a stock with symbol, price, and quantity
class Stock {
  constructor(symbol, price, quantity) {
    this.symbol = symbol;
    this.price = price;
    this.quantity = quantity;
  }

  calculateValue() {
    return this.price * this.quantity;
  }
}

// StockMarket class to simulate a stock market with search and trade functionalities
class StockMarket {
  constructor() {
    this.stocks = new Map();
  }

  addStock(symbol, price) {
    this.stocks.set(symbol, price);
  }

  searchStock(symbol) {
    return this.stocks.get(symbol);
  }

  buyStock(symbol, quantity, portfolio) {
    const price = this.searchStock(symbol);
    if (price) {
      const stock = new Stock(symbol, price, quantity);
      portfolio.addStock(stock);
    } else {
      console.log(`Stock ${symbol} not found.`);
    }
  }

  sellStock(symbol, quantity, portfolio) {
    const stock = portfolio.stocks.find((s) => s.symbol === symbol);
    if (stock) {
      if (stock.quantity >= quantity) {
        stock.quantity -= quantity;
        if (stock.quantity === 0) {
          portfolio.removeStock(stock);
        }
      } else {
        console.log(`Insufficient quantity for stock ${symbol}.`);
      }
    } else {
      console.log(`Stock ${symbol} not found in the portfolio.`);
    }
  }
}

// Create a stock market instance
const stockMarket = new StockMarket();

// Add stocks to the stock market
stockMarket.addStock("AAPL", 134.23);
stockMarket.addStock("GOOGL", 2321.43);
stockMarket.addStock("TSLA", 705.67);
stockMarket.addStock("AMZN", 3300.02);

// Create portfolios for users
const portfolio1 = new Portfolio("John's Portfolio");
const portfolio2 = new Portfolio("Emily's Portfolio");

// Buy stocks for portfolios
stockMarket.buyStock("AAPL", 10, portfolio1);
stockMarket.buyStock("GOOGL", 5, portfolio1);
stockMarket.buyStock("TSLA", 8, portfolio2);
stockMarket.buyStock("AMZN", 3, portfolio2);
stockMarket.buyStock("AAPL", 5, portfolio2);

// Sell stocks from portfolios
stockMarket.sellStock("GOOGL", 2, portfolio1);
stockMarket.sellStock("AAPL", 3, portfolio2);
stockMarket.sellStock("TSLA", 10, portfolio2);
stockMarket.sellStock("AMZN", 2, portfolio2);

// Calculate total value of both portfolios
const portfolio1Value = portfolio1.calculateTotalValue();
const portfolio2Value = portfolio2.calculateTotalValue();

console.log(`${portfolio1.name} value: $${portfolio1Value}`);
console.log(`${portfolio2.name} value: $${portfolio2Value}`);