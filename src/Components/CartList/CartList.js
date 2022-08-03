import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartAction } from '../../store/Cart-slice';
import classes from "./CartList.module.css"
const CartList = (props) => {
  const dispatch=useDispatch()
  const {Product}=useSelector(state=>state);
  const Stock=Product.productList.filter(product=>product.id===props.props.id);
  const {Cart}=useSelector(state=>state);
let quantity=Cart.cartItem.filter(product=>product.id===props.props.id);
quantity=quantity[0].quantity;
const array = Array.from({length: Stock[0].quantity}, (_, index) => index + 1);
  const RemoveFromCart=()=>{
    dispatch(CartAction.RemoveFromCart({id:props.props.id}));
  }
  const AddToCart=(e)=>{
    dispatch(CartAction.QuantityUpdate({
      quantity:+e.target.value,
      id:props.props.id

    }))


  }
  return (
    <div className={classes.cartlist}>
     
      <img src={props.props.imageURL} alt={props.props.color} className={classes.img}></img>
      <div className={classes.details}>
        <div className={classes.name}>{props.props.name}</div>
        <div className={classes.price}>Rs{props.props.price}</div>
      </div>
      <div className={classes.operation}>
        <label >Qty</label>
          <select id='Quantity' onChange={AddToCart} defaultValue={quantity}>
          {

array.map((ele,i)=>{
  return(
    <option key={i} name={i+1}>{i+1}</option>
  )
})


}          </select>
<button className={classes.Remove} onClick={RemoveFromCart}>Remove</button>
      </div>
    </div>
  )
}

export default CartList