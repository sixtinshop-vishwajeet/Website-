let cart = [];

function addCart(name,price){
cart.push({name,price});

let cartItems = document.getElementById("cartItems");
cartItems.innerHTML="";

cart.forEach(item=>{
let li = document.createElement("li");
li.innerText = item.name + " - $" + item.price;
cartItems.appendChild(li);
});
}
