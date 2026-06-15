let product1 = {
    name : "Shirt",
    price : 1000,
    quantity : 2
};

let product2 = {
    name : "Pants",
    price : 2000,
    quantity : 1
};

let product3 = {
    name : "Jacket",
    price : 1500,
    quantity : 3
};


document.getElementById("product1").textContent = product1.name + " - Price: $" + product1.price + ", Quantity: " + product1.quantity;
document.getElementById("product2").textContent = product2.name + " - Price: $" + product2.price + ", Quantity: " + product2.quantity;
document.getElementById("product3").textContent = product3.name + " - Price: $" + product3.price + ", Quantity: " + product3.quantity;


function TotalPrice(){
    let total = 0;
    let gstRate = 0.18; 

    
    if(document.getElementById("product1Checkbox").checked) {
        let subtotal = product1.price * product1.quantity;
        total += subtotal + (subtotal * gstRate); 
    }
    
    if(document.getElementById("product2Checkbox").checked) {
        let subtotal = product2.price * product2.quantity;
        total += subtotal + (subtotal * gstRate);
    }
    
    if(document.getElementById("product3Checkbox").checked) {
        let subtotal = product3.price * product3.quantity;
        total += subtotal + (subtotal * gstRate);
    }

    
    document.getElementById("totalPrice").textContent = total.toFixed(2);
}