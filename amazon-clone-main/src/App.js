import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header.js";
import Home from "./home.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { useStateValue } from "./stateprovider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JezmASGex6STSyFZdvmLTqFxlBAixm2ANRtnRoZPfdLNh9iWjN8vqamYePMgAJYCLbhCtYD9514uixb8Pwrq4kB00s8YJNpM9"
);

function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
          <button>
            <Link to="/">RETURN BACK TO HOME</Link>
          </button>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
