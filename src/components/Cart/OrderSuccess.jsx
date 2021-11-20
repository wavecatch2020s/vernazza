import React from "react";
import GreenCheck from "../assets/pngegg.png";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { uiActions } from "../../redux/ui-slice";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  const closeModalOnClick = () => {
    dispatch(uiActions.showOrderSuccess(false));
  };
  return (
    <Modal closeModalOnClick={closeModalOnClick}>
      <div className="order-success">
        <img className="green-checkmark" src={GreenCheck} />
        <h2>Your order was successful! :)</h2>
        <h3>Expect delivery in 30-45 min</h3>
        <button className="a1 cancel" onClick={closeModalOnClick}>
          OK
        </button>
      </div>
    </Modal>
  );
};

export default OrderSuccess;
