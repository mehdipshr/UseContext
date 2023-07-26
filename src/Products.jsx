import React, { Component } from 'react';
import Product from './Product';
import productContext from "./Contexts/products";

class Products extends Component {
    static contextType = productContext
    render() {
        return (
            <div>
                <br />
                <h1>Props</h1>
                <button onClick={this.context.onReset} className='btn btn-primary'>Reset</button>
                {this.context.products.map((prod,index) => (
                    <Product  id={prod.id} key={index} productName={prod.productName} count={prod.count}/>
                ))}
                
            </div>
        );
    }
   
}

export default Products;