import React from 'react'
import classes from "./FilterMobile.module.css"

const FilterMobile = () => {
  return (
    <div className={classes.mobilForm}>
        <form  className={classes.mobilForm}>
           <div className={classes.subFilter}>
           <legend className={classes.legend}>Color</legend>
           <div className={classes.input}>
           <input type="checkbox" id="Red"/>
            <label  htmlFor="Red">Red</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Red"/>
            <label  htmlFor="Red">Red</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Red"/>
            <label  htmlFor="Red">Red</label>
           </div>
           </div>
           <div className={classes.subFilter}>
           <legend className={classes.legend}>Gender</legend>
           <div className={classes.input}>
           <input type="checkbox" id="Men"/>
            <label  htmlFor="Men">Men</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Women"/>
            <label  htmlFor="Women">Women</label>
           </div>
           </div>
           <div className={classes.subFilter}>
           <legend className={classes.legend}>Price</legend>
           <div className={classes.input}>
           <input type="checkbox" id="0-Rs250"/>
            <label  htmlFor="0-Rs250">0-Rs250</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Rs251-450"/>
            <label  htmlFor="Rs251-450">Rs251-450</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Rs450"/>
            <label  htmlFor="Rs450">Rs450</label>
           </div>
           </div>
           <div className={classes.subFilter}>
           <legend className={classes.legend}>Type</legend>
           <div className={classes.input}>
           <input type="checkbox" id="Polo"/>
            <label  htmlFor="Polo">Polo</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Hoodie"/>
            <label  htmlFor="Hoodie">Hoodie</label>
           </div>
           <div className={classes.input}>
           <input type="checkbox" id="Basic"/>
            <label  htmlFor="Basic">Basic</label>
           </div>
           </div>
        </form>
    </div>
  )
}

export default FilterMobile;