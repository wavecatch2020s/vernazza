import React from "react";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/ui-slice";
import { cartActions } from "../../redux/cart-slice";
import useInput from "../../hooks/use-input";
import { submitOrderData } from "../../redux/fetch-actions";

const CustomerForm = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const closeModalOnClick = () => {
    dispatch(uiActions.showCustomerForm(false));
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    const formData = {
      enteredFirstName,
      enteredLastName,
      enteredNumber,
      enteredAddress,
      enteredAddress2,
      enteredEmail,
    };

    dispatch(submitOrderData(cart, formData));

    console.log("Order Submited!");

    resetLastName();
    resetFirstName();
    resetAddress();
    resetFirstName();
    resetAddress2();
    resetNumber();
    resetEmail();

    dispatch(uiActions.showCustomerForm(false));
    dispatch(uiActions.showOrderSuccess(true));
    dispatch(cartActions.emptyTheCart());
    dispatch(cartActions.changeCurrentCartId());
  };

  const {
    value: enteredFirstName,
    valueIsValid: firstNameIsValid,
    valueHasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput("text");

  const {
    value: enteredLastName,
    valueIsValid: lastNameIsValid,
    valueHasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput("text");

  const {
    value: enteredAddress,
    valueIsValid: addressIsValid,
    valueHasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput("text");

  const {
    value: enteredAddress2,
    valueChangeHandler: address2ChangeHandler,
    reset: resetAddress2,
  } = useInput("text");
  const {
    value: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput("text");

  const {
    value: enteredNumber,
    valueIsValid: numberIsValid,
    valueHasError: numberHasError,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumber,
  } = useInput("number");

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && numberIsValid && addressIsValid) {
    formIsValid = true;
  }

  const firstNameInputClasses = firstNameHasError
    ? "form-group invalid"
    : "form-group";
  const lastNameInputClasses = lastNameHasError
    ? "form-group invalid"
    : "form-group";
  const addressInputClasses = addressHasError
    ? "form-group invalid"
    : "form-group";
  const numberInputClasses = numberHasError
    ? "form-group invalid"
    : "form-group";

  return (
    <Modal closeModalOnClick={closeModalOnClick}>
      <div className="customer-form">
        <h3>Finishing Order Details</h3>
        <form onSubmit={formSubmissionHandler}>
          <div className={firstNameInputClasses}>
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
            />
            {firstNameHasError && (
              <p className="error-text">Please, type in your first name :)</p>
            )}
          </div>
          <div className={lastNameInputClasses}>
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
            />
            {lastNameHasError && (
              <p className="error-text">Please, type in your last name :)</p>
            )}
          </div>
          <div className={addressInputClasses}>
            <label htmlFor="address1">Address*</label>
            <input
              type="text"
              id="address1"
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              value={enteredAddress}
            />
            {addressHasError && (
              <p className="error-text">Please, type in your address :)</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="address2">
              Address 2 <span className="optional"></span>
            </label>
            <input
              type="text"
              id="address2"
              onChange={address2ChangeHandler}
              value={enteredAddress2}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="optional"></span>
            </label>
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              value={enteredEmail}
            />
          </div>
          <div className={numberInputClasses}>
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="number"
              id="phone"
              onChange={numberChangeHandler}
              onBlur={numberBlurHandler}
              value={enteredNumber}
            />
            {numberHasError && (
              <p className="error-text">Please, type in your phone number :)</p>
            )}
          </div>
          <div className="buttons">
            <button onClick={closeModalOnClick} className="a1 cancel">
              Cancel
            </button>
            <button
              className={`a1 yellow ${!formIsValid && "disabled"}`}
              type="submit"
              disabled={!formIsValid}
            >
              Finish Order
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CustomerForm;
