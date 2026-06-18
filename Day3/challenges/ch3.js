const products = [
  { name: "Laptop", price: 999, category: "Electronics" },
  { name: "Phone", price: 699, category: "Electronics" },
  { name: "Shirt", price: 25, category: "Apparel" },
  { name: "Shoes", price: 80, category: "Apparel" }
];
const prices = products.map(p => p.price);

const maxPrice = Math.max(...prices);
const minPrice = Math.min(...prices);
const avgPrice = prices.reduce((sum, p) => sum + p, 0) / prices.length;

const Expensive = products.find(p => p.price === maxPrice);
const cheapest = products.find(p => p.price === minPrice);
console.log("Most Expensive Product:", Expensive);
console.log("Cheapest Product:", cheapest);
console.log(`Average Price: $${avgPrice.toFixed(2)}`);
