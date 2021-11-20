import React from "react";
import { useSelector } from "react-redux";

import MealItem from "./MealItem";

const MealsList = () => {
  const allPacks = useSelector((state) => state.meals.entireList);
  const displayedCategory = useSelector(
    (state) => state.meals.displayedCategory
  );

  let displayedList = [];

  if (displayedCategory === "all") {
    displayedList = allPacks;
  } else {
    const definedPack = allPacks.filter(
      (pack) => pack.mealType === displayedCategory
    );
    displayedList = definedPack;
  }

  const MealsFromSelectedSection = ({ items }) => {
    const generatedListForSection = items.map((meal) => {
      return <MealItem meal={meal} key={meal.id} />;
    });
    return generatedListForSection;
  };

  const Section = (props) => {
    const firstCharUpper = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
      <section id={props.id}>
        <h1>{firstCharUpper(props.mealType)}</h1>
        <ul>{<MealsFromSelectedSection items={props.items} />}</ul>
      </section>
    );
  };

  let displayedSections;
  // different algos depending on whether we are parsing through all packs or just one
  if (displayedList.length > 1) {
    displayedSections = displayedList.map((section) => {
      return (
        <Section
          mealType={section.mealType}
          items={section.items}
          id={section.id}
          key={section.id}
        />
      );
    });
  } else if (displayedList.length === 1) {
    displayedSections = (
      <Section
        mealType={displayedList[0].mealType}
        items={displayedList[0].items}
        id={displayedList[0].id}
        key={displayedList[0].id}
      />
    );
  }

  return <div className="meals-list">{displayedSections}</div>;
};

export default MealsList;
