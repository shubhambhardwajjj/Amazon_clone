import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./stateprovider";
import BasketItem from "./BasketItem";

const Checkout = () => {
  const [state] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <h3 style={{ margin: "20px" }}>
          Hello,{state.user ? state.user.email : "guest"}
        </h3>
        <h1 style={{ margin: "20px" }}>Your shopping Basket:</h1>
        <div className="basket">
          {state.basket.map((item) => {
            return (
              <BasketItem
                id={item.id}
                price={item.price}
                image={item.image}
                rating={item.rating}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
