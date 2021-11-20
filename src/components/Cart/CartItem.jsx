import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../redux/cart-slice";

const CartItem = ({ id, price, quantity, name }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        quantity: 1,
        name,
        price,
      })
    );
  };
  const removeOneFromCart = () => {
    dispatch(cartActions.removeOneFromCart(id));
  };

  return (
    <div id={id} className="cart-item">
      <div className="left-cart-item">
        <h3>{name}</h3>
        <div className="price-amount">
          <p className="price">${price}</p>
        </div>
      </div>
      <div className="plus-minus">
        <button className="minus" onClick={removeOneFromCart}>
          -
        </button>
        <p className="amount">{quantity}</p>
        <button className="plus" onClick={addItemToCart}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
