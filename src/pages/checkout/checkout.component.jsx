import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckOutItem  from '../../component/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';

import './checkout.style.scss';
import CartItem from '../../component/cart-item/cart-item.component';

const CheckOutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block '>
                <span>Product</span>
            </div>
            <div className='header-block '>
                <span>Description</span>
            </div>
            <div className='header-block '>
                <span>Quantity</span>
            </div>
            <div className='header-block '>
                <span>Price</span>
            </div>
            <div className='header-block '>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
        ) )}
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 - Exp: 04/20 - CVV:123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);