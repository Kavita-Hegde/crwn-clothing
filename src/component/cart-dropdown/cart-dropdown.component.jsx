import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { createStructuredSelector } from 'reselect';

import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = ({cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?(
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
            ): (<span className='empty-message'>Your Cart is Empty</span>)
        }
        </div>
        <CustomButton  onClick = { ()=>{
             history.push('/checkout');
             dispatch(toggleCartHidden());

            }}>CHECKOUT</CustomButton>
    
    </div>

);

const mapStateToProps =createStructuredSelector ({
    cartItems : selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropDown));