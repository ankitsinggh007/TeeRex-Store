import Cart from "./Pages/Cart/Cart";
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import classes from "./App.module.css"
function App() {
  return (
<>
      <Navbar/>

<div className={classes.main}>
      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/cart' element={<Cart/>} />


      </Routes>
    </div>
    </>
  );
}

export default App;
