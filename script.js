let cart = [];

function addCart(name,price){
cart.push({name,price});

let cartList = document.getElementById("cart");
cartList.innerHTML="";

cart.forEach(item=>{
let li = document.createElement("li");
li.innerText = item.name + " - $" + item.price;
cartList.appendChild(li);
});
}
