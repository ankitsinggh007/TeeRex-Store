import React,{useState} from 'react'
import classes from "./Filter.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { ProductAction } from '../../../store/Product-slice';

const Filter = () => {
const dispatch=useDispatch();
const {Product}=useSelector(state=>state);
const applyFilter=(e)=>{
  console.log(Product.filter)

  if(e.target.value==="Color"){
    dispatch(ProductAction.filterProduct({type:"Color",value:e.target.id}))

  }
  if(e.target.value==="Gender"){
    dispatch(ProductAction.filterProduct({type:"Gender",value:e.target.id}))

  } if(e.target.value==="Price"){
const min=e.target.min;
const max=e.target.max;
    dispatch(ProductAction.filterProduct({type:"Price",value:{min,max
    }}))

  }if(e.target.value==="Type"){
    dispatch(ProductAction.filterProduct({type:"Type",value:e.target.id}))

  }

}
  return (
    <div>
        <form>
           <div className={classes.subFilter}>
           <legend className={classes.legend}>Color</legend>
           <div className={classes.input}>
           <input type="checkbox" id="Red" value="Color" onClick={applyFilter}/>
            <label htmlFor="Red">Red</label>
           </div>
            <div className={classes.input}>
           <input type="checkbox" id="Green"  value="Color"  onClick={applyFilter}/>
            <label htmlFor="Green">Green</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Blue"  value="Color"  onClick={applyFilter}/>
            <label htmlFor="Blue">Blue</label>
           </div>
           </div>
           <div className={classes.subFilter}>
           <legend className={classes.legend}>Gender</legend>
           <div className={classes.input}>
           <input type="checkbox" id="Men"  value="Gender"  onClick={applyFilter}/>
            <label htmlFor="Men">Men</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Women"  value="Gender"  onClick={applyFilter}/>
            <label htmlFor="Women">Women</label>
           </div>
           </div>
           <div className={classes.subFilter}>
           <legend className={classes.legend}>Price</legend>
           <div className={classes.input}>
           <input type="checkbox" id="0-Rs250" min={0} max={250} value="Price"  onClick={applyFilter}/>
            <label htmlFor="0-Rs250">0-Rs250</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Rs251-450" min={251} max={450} value="Price"  onClick={applyFilter}/>
            <label htmlFor="Rs251-450">Rs251-450</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Rs450" value="Price" min={450} max={Infinity}  onClick={applyFilter}/>
            <label htmlFor="Rs450">Rs450</label>
           </div>
           </div>
           <div className={classes.subFilter}>
           <legend className={classes.legend}>Type</legend>
           <div className={classes.input}>
           <input type="checkbox" id="Polo" value="Type"  onClick={applyFilter}/>
            <label htmlFor="Polo">Polo</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Hoodie" value="Type"  onClick={applyFilter}/>
            <label htmlFor="Hoodie">Hoodie</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Basic" value="Type"  onClick={applyFilter}/>
            <label htmlFor="Basic">Basic</label>
           </div>
           </div>
        </form>
    </div>
  )
}

export default Filter