import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import { useStateValue } from "./stateprovider";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const [state] = useStateValue();
  const [totalprice, settotalprice] = useState(0);
  const history = useHistory();
  useEffect(() => {
    let ans = 0;
    for (let i = 0; i < state.basket.length; i++) ans += state.basket[i].price;
    settotalprice(ans);
  }, [state.basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            <button onClick={() => history.push("/payment")}>
              proceed to checkout
            </button>
          </>
        )}
        decimalScale={2}
        value={totalprice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Subtotal;
