import React,  { useState } from 'react';

import './App.css';
// import Context from './Components/Context';
// import Login from './Components/Login';
// import Profile from './Components/Profile';
import Products from './Components/Products'; //functional
import Navbar from './Components/Navbar'; //functional

// import { LoginContext } from "./Contexts/LoginContext";
import ProductContext from "./Contexts/products";



function App() {
  // const[showProfile , setShowProfile] = useState(false);
  // const[username , setUsername] = useState("");
  const [products ,setProducts ] = useState([
    {id:1, count:2 , productName: 'laptop'},
    {id:2, count:1 , productName: 'phone'},
    {id:3, count:4 , productName: 'Ipad'}
]);
const handleDelete = (productId) => {
    // const newProducts = products.filter(product => product.id !== productId); /* ravrshe neonlearn ke kotah va sade tar hast */
    // setProducts(newProducts);
    setProducts((product) => {
        return products.filter((product) => {
            return product.id !== productId 
        })
    })
}
const handleReset = () => {
    const newProducts = products.map(product => {
        product.count = 0;
        return product
    });
    setProducts(newProducts)
    // setProducts({products: newProducts})
}

const handleIncrement = (productId) => {
    const newProducts = [...products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
    const index = newProducts.findIndex(product => product.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
}
const handleDecrement = (productId) => {
    const newProducts = [...products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
    const index = newProducts.findIndex(product => product.id === productId);
    newProducts[index].count -= 1;
    setProducts(newProducts);
}
  return (
    <div className="App">
      {/* <LoginContext.Provider value={{username,setUsername ,setShowProfile}}>

        {showProfile ? <Profile /> : <Login />}

      </LoginContext.Provider>  
        <Context/> */}
        {/* 2 context nemitonan dar yek app baham load beshan va error daryaft mikonim va man context bala ro comment kardam ke moshkel bartaraf beshe */}
          {/*tamame state & method ha ro pas midim be context be jaye khode componente mored nazar */}
       <ProductContext.Provider 
          value={{
            products: products,
            onDelete: handleDelete, 
            onReset: handleReset,
            onIncrement: handleIncrement, 
            onDecrement: handleDecrement }}
            > 
            <Navbar/>
            <Products />
      </ProductContext.Provider>

        <br/>
    </div>
  );
}

export default App;
