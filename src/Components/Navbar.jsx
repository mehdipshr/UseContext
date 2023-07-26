import React from 'react'
import { useContext } from 'react';
import productContext from '../Contexts/products';

export default function Navbar() {
    const context = useContext(productContext);
    console.log(productContext);
    return (
        <nav className='navbar navbar-light bg-light'>
            <div className="container-fluid">
                <a href="#home" className='navbar-brand'>
                    navbar{calculateSum()}
                </a>
            </div>
        </nav>
    );
    function calculateSum (){
        let sum = 0;
        context.products.forEach(product => {
            sum += product.count;
        })
        return sum;
    }
}
