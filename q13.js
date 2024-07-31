// ADD ITEMS TO CART:

const input=require("readline-sync")

const cartItems = [
    {id: 1, name: "Phone", price: 20000, quantity: 1},
    {id: 2, name: "Headphones", price: 5000, quantity: 2},
    {id: 3, name: "Power Bank", price: 1000, quantity: 1}
];

const newItems={id: 2, name: "Headphones", price: 5000, quantity: 1 };


function calculateTotalCost(cartItems){
    let itemExists=false;

    for(let i=0; i<cartItems.length; i++){
        
        if(cartItems[i].id===newItems.id){
            cartItems[i].quantity+=newItems.quantity;
            itemExists=true;
            break;
        }
    }
    if(!itemExists){
        cartItems.push(newItems)
    }
    return cartItems;
}
console.log(calculateTotalCost(cartItems));