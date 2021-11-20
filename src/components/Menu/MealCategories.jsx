import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { mealsActions } from "../../redux/meals-slice";

const MealCategories = () => {
  const dispatch = useDispatch();
  const listOfCategories = useSelector((state) => state.meals.categoryNames);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // click handler
  const selectCategoryHandler = (e) => {
    dispatch(mealsActions.setDisplayedMeals(e.target.id));
    setSelectedCategory(e.target.id);
  };

  // CategoryItem Component
  const CategoryItem = ({ id }) => {
    const firstCharUpper = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const idFinish = firstCharUpper(id);

    const classes = [
      `category ${selectedCategory === id ? "highlighted" : ""}`,
    ];

    if (id === "all") {
      return (
        <li id="all" onClick={selectCategoryHandler} className={classes}>
          All
        </li>
      );
    } else {
      return (
        <li id={id} onClick={selectCategoryHandler} className={classes}>
          {idFinish}
        </li>
      );
    }
  };

  const categories = listOfCategories.map((categoryName) => {
    return <CategoryItem id={categoryName} key={categoryName} />;
  });

  return <ul className="meal-categories">{categories}</ul>;
};

export default MealCategories;
