import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price}=tshirt;
    return (
        <div className='t-shirt'>
        
           <img src={picture}></img> 
           <h2>{name}</h2>
           <h3>price:{price}</h3>
           <button onClick={ ()=>handleAddToCart(tshirt)}>buy this</button>
        </div>
    );
};

export default Tshirt;