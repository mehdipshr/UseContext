import React, { Component } from 'react'




// import Product from './Neon-learn/Product';
import Products from '../Products';
// import Products from './Neon-learn/functionalProduct/Products';
import Navbar from '../Navbar';
import ProductContext from "../Contexts/products";

class App extends Component {
  state = {
    products: [
        {id:1, count:2 , productName: 'laptop'},
        {id:2, count:1 , productName: 'phone'},
        {id:3, count:4 , productName: 'Ipad'},
    ]
}
  render(){
    return( 
      <div className="App">
        <ProductContext.Provider
          value={{
            products:this.state.products ,
            onDelete:this.handleDelete, 
            onReset:this.handleReset,
            onIncrement:this.handleIncrement, 
            onDecrement:this.handleDecrement}} >
          <Navbar/>
          <Products />
        </ProductContext.Provider>
      </div>
    );
  }
  handleIncrement = (productId) => {
      const newProducts = [...this.state.products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
      const index = newProducts.findIndex(prod => prod.id === productId);
      newProducts[index].count += 1;
      this.setState({products : newProducts});
  }
  handleDecrement = (productId) => {
      const newProducts = [...this.state.products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
      const index = newProducts.findIndex(prod => prod.id === productId);
      newProducts[index].count -= 1;
      this.setState({products : newProducts});
  }
  handleDelete = (productId) => {
      const newProducts = this.state.products.filter(prod => prod.id !== productId)
      this.setState({products: newProducts});
  }
  handleReset = () => {
      const newProducts = this.state.products.map(prod => {
          prod.count = 0;
          return prod
      });
      this.setState({products: newProducts})
      console.log('reset');
  }
}

export default App;
