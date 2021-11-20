import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/ui-slice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const closeModalOnClick = () => {
    dispatch(uiActions.showCart(false));
  };

  const continueToCustomerForm = () => {
    dispatch(uiActions.showCart(false));
    dispatch(uiActions.showCustomerForm(true));
  };

  const cartList = cartItems.map((cartItem) => {
    return (
      <CartItem
        key={cartItem.id}
        name={cartItem.name}
        id={cartItem.id}
        price={cartItem.price}
        quantity={cartItem.quantity}
      />
    );
  });

  const cartJSX = (
    <Fragment>
      <div className="cart-items-list">{cartList}</div>
      <div className="total-order">
        <div className="total-amount">
          <p>Total Amount:</p>
          <p>{`$${totalPrice.toFixed(2)}`}</p>
        </div>
        <div className="buttons">
          <button onClick={closeModalOnClick} className="a1 small cancel">
            Cancel
          </button>
          <button className="a1 small yellow" onClick={continueToCustomerForm}>
            Continue
          </button>
        </div>
      </div>
    </Fragment>
  );

  return (
    <Modal closeModalOnClick={closeModalOnClick}>
      {cartItems.length > 0 ? cartJSX : <EmptyCart />}
    </Modal>
  );
};

export default Cart;
