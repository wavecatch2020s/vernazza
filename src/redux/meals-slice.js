import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    entireList: [],
    categoryNames: ["all"],
    displayedCategory: "all",
  },
  reducers: {
    loadEntireList(state, action) {
      const rawFetchedListOfMeals = action.payload;

      //define all available category names for menu
      let mealCategoryNames = ["all"];
      rawFetchedListOfMeals.forEach((item) => {
        if (!mealCategoryNames.includes(item.type) && item.type !== "dessert") {
          mealCategoryNames.push(item.type);
        }
      });
      mealCategoryNames.push("dessert");

      state.categoryNames = mealCategoryNames;

      // parse meals to appopriate pack
      let starters = { id: "t1", mealType: "starter", items: [] };
      let pizzas = { id: "t2", mealType: "pizza", items: [] };
      let pastas = { id: "t3", mealType: "pasta", items: [] };
      let desserts = { id: "t4", mealType: "dessert", items: [] };
      rawFetchedListOfMeals.forEach((item) => {
        switch (item.type) {
          case "starter":
            starters.items.push(item);
            break;
          case "pizza":
            pizzas.items.push(item);
            break;
          case "pasta":
            pastas.items.push(item);
            break;
          case "dessert":
            desserts.items.push(item);
            break;
          default:
            console.log("error appeared while sorting items in packs");
        }
      });

      const allPacks = [starters, pizzas, pastas, desserts];
      // console.log(allPacks);

      state.entireList = allPacks;
    },
    setDisplayedMeals(state, action) {
      const newListName = action.payload;

      state.displayedCategory = newListName;
    },
  },
});

export const mealsActions = mealsSlice.actions;
export default mealsSlice;
