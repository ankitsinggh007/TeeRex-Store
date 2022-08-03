import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProduct } from '../../store/Product-slice'
import List from '../List/List'
import classes from "./Product.module.css"
const Product = () => {
const dispatch=useDispatch();
const {Product}=useSelector(state=>state);
useEffect(()=>{
    dispatch(fetchProduct());
    
  },[dispatch]);
  const data=[...new Set(Product.filter.Product)];

  if(!Product.SearchApplied){
    if(Product.filter.Product.length===0){

      return (
        
        <div className={classes.container}>
    {Product.status==="success" &&
        Product.productList.map(product=>{
            return(
    <List key={product.id} data={product}/>
    
            )
        })
    }
    
    
        </div>
    
      )
    }
    else{
      return (
        
        <div className={classes.container}>
    {Product.status==="success" &&
        data.map(product=>{
            return(
    <List key={product.id} data={product}/>
    
            )
        })
    }
    
    
        </div>
    
      )
    
    }
  }
  else{
    return (
        
      <div className={classes.container}>
  {Product.status==="success" &&
      Product.SearchList.map(product=>{
          return(
  <List key={product.id} data={product}/>
  
          )
      })
  }
  
  
      </div>
  
    )
    
  }
}

export default Product