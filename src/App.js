import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style/app.scss";
import Header from "./components/Header/Header";
import Card from "./components/UI/Card";
import MealCategories from "./components/Menu/MealCategories";
import MealsList from "./components/Menu/MealsList";
import { fetchMeals } from "./redux/fetch-actions";
import Cart from "./components/Cart/Cart";
import CustomerForm from "./components/Cart/CustomerForm";
import OrderSuccess from "./components/Cart/OrderSuccess";

function App() {
  const showCart = useSelector((state) => state.ui.showCart);
  const showCustomerForm = useSelector((state) => state.ui.showCustomerForm);
  const dispatch = useDispatch();
  const showOrderSuccess = useSelector((state) => state.ui.showOrderSuccess);

  console.log("entire App re-rendered");
  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const currentTime = new Date().toLocaleString();
  console.log(currentTime);

  return (
    <div className="App">
      {showCart && <Cart />}
      {showCustomerForm && <CustomerForm />}
      {showOrderSuccess && <OrderSuccess />}
      <Header />
      <main>
        <Card>
          <MealCategories />
          <MealsList />
        </Card>
      </main>
    </div>
  );
}

export default App;
