import React from "react";
import { useStateValue } from "./stateprovider";
import "./BasketItem.css";
const BasketItem = ({ title, id, image, rating, price }) => {
  const [state, dispatch] = useStateValue();
  const RemoveItem = () => {
    console.log(state);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      itemid: id,
    });
  };

  return (
    <div className="basket_item">
      <div className="basket_image">
        <img src={image} alt=""></img>
      </div>
      <div className="basket_info">
        <p style={{ fontWeight: "800" }}>{title}</p>
        <small>
          $<strong>{price}</strong>
        </small>

        <button onClick={RemoveItem}>remove from basket</button>
      </div>
    </div>
  );
};

export default BasketItem;
