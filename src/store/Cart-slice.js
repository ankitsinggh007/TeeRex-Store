import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItem:[],
}
const Cart=createSlice({
name:"Cart",
initialState,
reducers:{
AddToCart(state,action){
console.log(action.payload)
const position=state.cartItem.findIndex(product=>product.id===action.payload.id);
if(position===-1){
state.cartItem.push(action.payload);
}    
else{
state.cartItem[position].quantity++;
}
},
RemoveFromCart(state,action){
    state.cartItem=state.cartItem.filter(product=>product.id!==action.payload.id);

},
QuantityUpdate(state,action){
const position=state.cartItem.findIndex(product=>product.id===action.payload.id);
state.cartItem[position].quantity=action.payload.quantity


}
}

});
export const CartAction=Cart.actions;
export default Cart.reducer;