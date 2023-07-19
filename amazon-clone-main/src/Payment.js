import React, { useEffect, useState } from "react";
import BasketItem from "./BasketItem";
import { useStateValue } from "./stateprovider";
import { useHistory } from "react-router-dom";
import "./Payment.css";
import { getBasketTotal } from "./reducer";

const Payment = () => {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  return (
    <div className="payment">
      <div className="payment_container">
        <h1 onClick={() => history.push("/checkout")}>
          Checkout ({basket ? basket.length : "0"}) items
        </h1>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment_address">
          <p>{user ? user.email : "GUEST"}</p>
          <p>Hno.979,sector-2,bahadurgarh</p>
          <p>9643XXXXXX</p>
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Review items and Delivery</h3>
        </div>
        <div className="payment_products">
          {basket.map((item) => {
            return (
              <BasketItem
                id={item.id}
                image={item.image}
                rating={item.rating}
                price={item.price}
                title={item.title}
              />
            );
          })}
        </div>
      </div>

      <div className="payment_section">
        <div className="payment_title">
          <h3>
            Bill:${getBasketTotal(basket)}{" "}
            <button className="payment_btn">Pay</button>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Payment;
