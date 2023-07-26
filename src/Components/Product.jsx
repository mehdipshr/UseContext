import React from 'react';
// import { useState } from 'react';
import productContext from '../Contexts/products';
import { useContext } from 'react';

export default function Product({productName, count: propCount , children , id  }) {
    // const [count , setCount]  = useState(propCount);
    const context = useContext(productContext);
    return (
        <div>
            <div>
                <hr />
                <br />
                <span className='m-2 text info'> {Format()} </span>
                <span className='m-2 badge bg-primary'>{productName} </span>
                <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
                {/* <button onClick={() => {Test(count,setCount)}} className='m-2 btn btn-sm btn-warning'>-</button>  */}
                <button onClick={ () => {handleDelete(5)}} className='m-2 btn btn-sm btn-danger'>delete</button>  {/* mitonim function ro ham darone clickhacdeler tarif konim */}
                {children}
            </div> 
        </div>
    )
    function handleIncrement (){
        context.onIncrement( id )
        // if(count => 2) {
        //     setProductName(productName.padEnd(7,'s') )
        // }else
        console.log('increment',this);
    }
    function handleDecrement (){
        context.onDecrement( id)
        // if (count <= 2) {
        //     setProductName(productName.slice(0,-1))
        // }
        console.log('Decrement');
    }
    function handleDelete (){
        context.onDelete(id);
    }
    function Format(){
        if(propCount === 0 ){
            return 'zero';

        }else{
            return propCount
        }  /* mitonim bejaye value yek jsx return konim dar yek method */
    }
    // function Test (count,setCount){  /* in function biron az Return gharar dare */
    //     setCount(count - 1)
    // }
    
}
