import { useRef } from "react";
import classes from "./Search.module.css"
import {BiSearch} from "react-icons/bi"
import { useDispatch } from "react-redux";
import { ProductAction } from "../../store/Product-slice";
const Search = () => {
  const dispatch=useDispatch();
const input = useRef("");
const Search=()=>{
  const value=input.current.value;
  if(value!==""){
  dispatch(ProductAction.Search({value,SearchApplied:true}));
  }
  else{
  dispatch(ProductAction.Search({SearchApplied:false}));

  }
}
const DisableSearch=()=>{
  const value=input.current.value;
  if(value===""){
    console.log(value);

    dispatch(ProductAction.Search({SearchApplied:false}));
  }
}
  return (
    <div className={classes.input}>
        <input type="search" ref={input} id="Search" placeholder="search for product" onInput={Search} onBlur={DisableSearch} className={classes.search}/>
<label className={classes.label}  htmlFor="Search"><BiSearch className={classes.React}/></label>
    </div>
  )
}

export default Search