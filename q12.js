// CALCULATE TOTAL COST:

const input=require("readline-sync")

const cartItems =[
    {id:1, name: "Phone", price: 20000,quantity: 1},
    {id: 2, name: "Headphones", price: 5000, quantity: 2},
    {id: 3, name: "Power Bank", price:1000, quantity:1}
    ];

function calculateTotalCost(cartItems){
  totalCost=0;
  
  for(let i=0; i<cartItems.length; i++){
    let items=cartItems[i]
    let itemsCost= items.price*items.quantity
    totalCost+=itemsCost;
  }
  return totalCost
}

console.log(calculateTotalCost(cartItems));