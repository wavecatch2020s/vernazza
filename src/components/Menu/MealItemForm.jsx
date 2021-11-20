import React, { useState, useRef, useEffect } from "react";

const MealItemForm = (props) => {
  const [successfullyAdded, notifyAddSuccess] = useState(false);
  const inputEl = useRef();

  const addHandler = (e) => {
    e.preventDefault();

    notifyAddSuccess(true);

    props.addItemToCart(inputEl.current.value);
  };

  useEffect(() => {
    setTimeout(() => notifyAddSuccess(false), 2000);
  }, [successfullyAdded]);

  return (
    <form>
      <div className="input-box">
        <label htmlFor="amount"></label>
        <input
          ref={inputEl}
          type="number"
          id="amount"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />

        <button
          className={`a1 meal-item  ${!successfullyAdded ? "yellow" : "green"}`}
          onClick={addHandler}
        >
          {!successfullyAdded ? "Add" : "Added"}
        </button>
      </div>
    </form>
  );
};

export default MealItemForm;
