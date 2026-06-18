const product1 = {
    name: "Laptop",
    price: 50000,
    quantity: 1
};

const product2 = {
    name: "Mouse",
    price: 1000,
    quantity: 2
};

const product3 = {
    name: "Keyboard",
    price: 2000,
    quantity: 1
};

// Cart array
const cart = [product1, product2, product3];
function calculateCartTotal(cart) {
    let total = 0;

    for (let product of cart) {
        total += product.price * product.quantity;
    }

    return total;
}

// Function to calculate GST
function calculateGST(amount, gstRate) {
    return amount * gstRate / 100;
}

// Function to calculate Discount
function calculateDiscount(amount, discountRate) {
    return amount * discountRate / 100;
}

// Function to calculate Final Amount
function calculateFinalAmount(total, gst, discount) {
    return total + gst - discount;
}

// Main Program
let cartTotal = calculateCartTotal(cart);
let gst = calculateGST(cartTotal, 18);      // 18% GST
let discount = calculateDiscount(cartTotal, 10); // 10% Discount
let finalAmount = calculateFinalAmount(cartTotal, gst, discount);

console.log("Cart Total: ₹" + cartTotal);
console.log("GST: ₹" + gst);
console.log("Discount: ₹" + discount);
console.log("Final Amount: ₹" + finalAmount);