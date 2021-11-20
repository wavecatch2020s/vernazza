import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/cart-slice";

const EmptyCart = () => {
  const allMealsList = useSelector((state) => state.meals.entireList);
  const dispatch = useDispatch();

  const mainMeals = [];
  for (let i = 1; i < allMealsList.length; i++) {
    if (
      allMealsList[i].mealType === "pizza" ||
      allMealsList[i].mealType === "pasta"
    ) {
      allMealsList[i].items.forEach((item) => mainMeals.push(item));
    }
  }

  const getRandomInteger = (numberOfIntegers) => {
    return Math.floor(Math.random() * numberOfIntegers);
  };

  const randomMeal = mainMeals[getRandomInteger(mainMeals.length)];

  const surpriseMeMeal = () => {
    const { id, name, price } = randomMeal;
    dispatch(cartActions.addItemToCart({ id, name, price, quantity: 1 }));
  };

  return (
    <div className="notification">
      <h3>No Cart Items Selected. Click below to get random meal.</h3>
      <button className="a1 tomato" onClick={surpriseMeMeal}>
        Surprise Me! :)
      </button>
    </div>
  );
};

export default EmptyCart;
