import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartAction } from '../../store/Cart-slice';
import classes from "./List.module.css"
const List = (props) => {
const [Disable, setDisable] = useState(false)
  const dispatch=useDispatch();
  const {Cart}=useSelector(state=>state);
  const {Product}=useSelector(state=>state);
  
  const addToCart=()=>{
    let Stock=Product.productList.filter(product=>product.id===props.id);
    Stock=Stock[0].quantity;
    let quantity=Cart.cartItem.filter(product=>product.id===props.id);
quantity=quantity[0]?.quantity;
    if(Stock-1<quantity){
      setDisable(true);
    }
    else{
    dispatch(CartAction.AddToCart(
      {...props,
        quantity:1
      }
    )
    );

  }

  }  
  props=props.data;
  return (
    <div className={classes.list}>
        <img src={props.imageURL} alt={props.name}></img>
        <span className={classes.name}>{props.name}</span>
       <div className={classes.subBloack}>
       <span className={classes.price}>Rs.{props.price}</span>
        <button onClick={addToCart} disabled={Disable}  className={!Disable?classes.button:classes.Disable}>{!Disable?'Add to cart':"Out of stock"}</button>
       </div>
    </div>
  )
}

export default List