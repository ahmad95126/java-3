// Main Function
function analyzeRange(start, end) {
  if (start > end) {
    return "Invalid range";
  }

  let evenCount = 0;
  let oddCount = 0;
  let evenSum = 0;
  let totalSum = 0;

  for (let i = start; i <= end; i++) {
    totalSum += i;

    
    if (i % 2 === 0) {
      evenCount++;
      evenSum += i;
    } else {
      oddCount++;
    }
  }

  return `Range: [${start}, ${end}] | Total Sum: ${totalSum} | Even Count: ${evenCount} | Odd Count: ${oddCount} | Even Sum: ${evenSum}`;
}

function countMultiples(start, end, divisor) {
  if (start > end || divisor === 0) {
    return 0;
  }

  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      count++;
    }
  }

  return count;
}

let analysisResult = analyzeRange(1, 10);
console.log(analysisResult);

let invalidResult = analyzeRange(10, 1);
console.log(invalidResult);

let multiplesCount = countMultiples(1, 10, 3);
console.log(`Multiples count: ${multiplesCount}`);




const products = [
  { id: 101, name: "Laptop", category: "Electronics", price: 999.99, inStock: true },
  { id: 102, name: "Headphones", category: "Electronics", price: 149.50, inStock: true },
  { id: 103, name: "Coffee Maker", category: "Appliances", price: 79.99, inStock: false },
  { id: 104, name: "Running Shoes", category: "Footwear", price: 120.00, inStock: true },
  { id: 105, name: "Backpack", category: "Accessories", price: 45.00, inStock: true }
];


console.log("Product List Details");
console.log("First Product Name:", products[0].name);
console.log("Last Product Name:", products[products.length - 1].name);
console.log("Number of Products:", products.length);

console.log("\n All Products:");
products.forEach(product => {
  console.log(`ID: ${product.id} | Name: ${product.name} | Category: ${product.category} | Price: $${product.price} | In Stock: ${product.inStock}`);
});


const selectedCategories = new Set();
selectedCategories.add("Electronics");
selectedCategories.add("Appliances");
selectedCategories.add("Footwear");
selectedCategories.add("Electronics"); 

console.log("\n Selected Filters");
console.log("Selected Categories Set:", selectedCategories);
console.log("Set Size:", selectedCategories.size);
console.log("Is 'Electronics' selected?", selectedCategories.has("Electronics"));


const currentUser = {
  id: 1,
  name: "Kareem Eessam",
  email: "kareem.essam@example.com",
  address: {
    street: "123 Main St",
    city: "Damascus",
    country: "Syria"
  }
};

console.log("\n Current User ");
console.log("User City:", currentUser.address.city);


const cartQuantity = new Map();
cartQuantity.set(101, 1); 
cartQuantity.set(102, 2); 
cartQuantity.set(105, 3); 

console.log("\n Shopping Cart Quantities ");
console.log("Quantity for Product ID 101:", cartQuantity.get(101));
console.log("Does Product ID 103 exist in cart?", cartQuantity.has(103));
console.log("Cart Map Size:", cartQuantity.size);


function calculateCartTotal(productsList, cartMap) {
  let total = 0;

  for (const product of productsList) {

    const quantity = cartMap.has(product.id) ? cartMap.get(product.id) : 0;
    total += product.price * quantity;
  }

  return total;
}

console.log("\n Cart Total ");
const cartTotal = calculateCartTotal(products, cartQuantity);
console.log(`Final Cart Total: $${cartTotal.toFixed(2)}`);