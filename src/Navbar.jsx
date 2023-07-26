import React, { Component } from 'react';
import productContext from "./Contexts/products";

class Navbar extends Component {
    static contextType = productContext
    render() {
        return (
            <nav className='navbar navbar-light bg-light'>
                <div className="container-fluid">
                    <a href="s" className='navbar-brand'>
                        navbar{this.calculateSum()}
                    </a>
                </div>
            </nav>
        );
    }
    calculateSum = () => {
        let sum = 0;
        this.context.products.forEach(product => {
            sum += product.count;
        })
        return sum;
    }
}

export default Navbar;