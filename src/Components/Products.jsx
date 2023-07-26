import React from 'react';
// import { useState } from 'react';
import Product from './Product';
import { useContext } from 'react';
import productContext from '../Contexts/products'

export default function Products(props) {
    const context = useContext(productContext);
    console.log(productContext);
    return (
        <div>
            <button onClick={context.onReset} className='btn btn-primary'>Reset</button>
            {context.products.map((product,index) =>( 
                <Product     id={product.id} key={index} productName={product.productName} count={product.count} > 
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quos, <br />dolore voluptatibus totam
                    earum consectetur tempore? <br /></p>
                </Product> 

            ))}
        </div>
    )
    
}
