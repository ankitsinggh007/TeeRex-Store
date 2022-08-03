import React from 'react'
import classes from "./Navbar.module.css"
import{NavLink,} from "react-router-dom";
import {BsCart3} from "react-icons/bs"
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {Cart}=useSelector(state=>state);
  let p= <div className={classes.cartNo}>{Cart.cartItem.length}</div>;

    if(Cart.cartItem?.length===0){
      p= <div></div>
    }
  return (
    <div className={classes.container}>
        <span className={classes.logo} >TeeRex Store</span>
<div className={classes.link}>
<NavLink className={({isActive,})=>isActive? classes.active: classes.navLink} to="/">Product</NavLink>
<NavLink className={({ isActive }) => isActive? classes.active: classes.navLink} to="/cart"><BsCart3 /></NavLink>
     {p}  
        </div>       

    </div>
  )
}

export default Navbar