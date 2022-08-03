import React,{useState} from 'react'
import Filter from '../../Components/Filter/filterpc/Filter';
import Product from '../../Components/Product/Product';
import Search from "../../Components/Search/Search";
import classes from "./Home.module.css"
import {BsFilterRight} from "react-icons/bs"
import FilterMobile from '../../Components/Filter/filtermobile/FIiterMobile';

const Home = () => {
  const [filter, setfilter] = useState(false);
  return (
    <div>
<div className={classes.search}>
<Search/>
<div className={classes.filterIcon} onClick={()=>setfilter(!filter)} ><BsFilterRight/></div>

</div>
<div className={classes.main}>
<div className={classes.filter}>
    <Filter/>
    </div>
    {
     filter && <div classes={classes.filterMobile}>
    <FilterMobile/>

      </div>
    }
<Product/>
    </div>
</div>
  )
}

export default Home