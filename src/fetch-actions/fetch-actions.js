import { mealsActions } from "../redux/meals-slice";

export const fetchMeals = () => {
  return async (dispatch) => {
    const fetchEntireList = async () => {
      const response = await fetch(
        "https://react-meal-app-f7d3b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("could not fetch meals data!");
      }

      const data = await response.json();

      let listOfMeals = [];

      // turn object with properties into array of objects
      for (const key in data) {
        listOfMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price.toFixed(2),
          type: data[key].type,
        });
      }
      return listOfMeals;
    };

    try {
      const meals = await fetchEntireList();
      dispatch(mealsActions.loadEntireList(meals));
    } catch (error) {
      console.log(error.message);
    }
  };
};
