const products = [
  { name: "Laptop", price: 29999, category: "Electronics" },
  { name: "Phone", price: 18699, category: "Electronics" },
  { name: "Shirt", price: 1025, category: "Apparel" },
  { name: "Shoes", price: 880, category: "Apparel" }
];

const prices = products.map(item => item.price );
const max=Math.max(...prices);
const min=Math.min(...prices);
const avg=prices.reduce((sum,price)=>sum+price,0);
console.log(`Highest Price: ${max}`);
console.log(`Lowest Price:  ${min}`);
console.log(`Average Price: ${avg.toFixed(2)}`);