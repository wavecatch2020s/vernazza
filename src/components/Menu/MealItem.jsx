import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cart-slice";

import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  const dispatch = useDispatch();

  const addItemToCart = (inputQuantity) => {
    dispatch(
      cartActions.addItemToCart({
        id: meal.id,
        quantity: inputQuantity,
        name: meal.name,
        price: meal.price,
      })
    );
  };

  return (
    <li key={meal.id} className="meal">
      <div className="left-side">
        <h3>{meal.name}</h3>
        <span className="description">{meal.description}</span>
        <span className="price">${meal.price}</span>
      </div>
      <Fragment>
        <MealItemForm addItemToCart={addItemToCart} />
      </Fragment>
    </li>
  );
};

export default MealItem;
