import React from 'react';

const Cart = ({cart, hanndleRemoveItem}) => {
    return (
        <div>
            <h3>order summery</h3>
            <h5>order quantity: {cart.length}</h5>
            {
               cart.map(tshirt=><p key ={tshirt._id}>
                {
                  tshirt.name 
                  
                }
                <button onClick={()=> hanndleRemoveItem(tshirt)}>remove t-shirt</button>
               </p>) 
            }
        </div>
    );
};

export default Cart;