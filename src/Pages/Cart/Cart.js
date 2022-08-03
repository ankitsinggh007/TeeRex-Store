import React from 'react'
import classes from "./Cart.module.css"
import CartList from '../../Components/CartList/CartList'
import {  useSelector } from 'react-redux'
const Cart = () => {
  const {Cart}=useSelector(state=>state);
    return (
    <div className={classes.shoppingCart}>
    <legend className={classes.legend}>ShoppingCart</legend>
  { Cart.cartItem &&
    Cart.cartItem.map(Product=>{
        return(
            <CartList key={Product.id} props={Product} />
        )
    })
  }
  </div>
  )
}

export default Cart