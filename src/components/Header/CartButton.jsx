import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/ui-slice";

import CartIcon from "../assets/CartIcon.svg";

const CartButton = () => {
  console.log("CartButton re-rendered");
  const [buttonShouldBump, bumpButton] = useState(false);
  const numberOfItemsInCart = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const openMyCart = () => {
    dispatch(uiActions.showCart(true));

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    bumpButton(true);
    setTimeout(() => bumpButton(false), 500);
  }, [numberOfItemsInCart]);

  let btnClasses = `cart-btn ${buttonShouldBump ? "bump" : ""}`;

  return (
    <button onClick={openMyCart} className={btnClasses}>
      <img src={CartIcon} alt="click to open cart" />
      <h2>My Cart</h2>
      <span className="badge">{numberOfItemsInCart}</span>
    </button>
  );
};

export default CartButton;
