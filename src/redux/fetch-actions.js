import { mealsActions } from "./meals-slice";

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

export const submitOrderData = (cart, formData) => {
  return async () => {
    const sendOrder = async () => {
      const currentTime = new Date().toLocaleString();
      const fullName = `${formData.enteredFirstName} ${formData.enteredLastName}`;
      const fullAddress = `${formData.enteredAddress} ${formData.enteredAddress2}`;
      const submitPackage = {
        orderTime: currentTime,
        cartIdNumber: cart.cartId,
        items: cart.items,
        totalPrice: cart.totalPrice.toFixed(2),
        totalQuantity: cart.totalQuantity,
        customer: fullName,
        customerAddress: fullAddress,

        customerEmail: formData.enteredEmail,
        customerPhone: formData.enteredNumber,
      };
      console.log(submitPackage);
      const response = await fetch(
        "https://react-meal-app-f7d3b-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify(submitPackage),
        }
      );

      if (!response.ok) {
        throw new Error("Ordering Failed");
      }
    };
    try {
      await sendOrder();
    } catch (error) {
      console.log(error.message);
    }
  };
};
