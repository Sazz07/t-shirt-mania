import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0) {
        message = <p>Please buy at least one item</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h3>Amar jonne ekta nao</h3>
            <p>Tomar nijher jonne ekta nao</p>
            <p><small>amar jonne arekta nao, Please</small></p>
        </div>
    }
    else{
        message = <p>Thnx for buying</p>
    }
    
    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h2>
            <h5 className={`bold ${cart.length === 2 ? 'blue': 'yellow' }`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>Kino kino</p>}
            <p>And Operator</p>
            {cart.length === 2 && <h2>Double Items</h2>}
            <p>OR Operator</p>
            {cart.length === 4 || <p>Charta item na</p>}
        </div>
    );
};

export default Cart;