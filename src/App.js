import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HU67DKO9K55QrSC9l0Tmm1u0QkBGqTMtv7In3OWY6y7obCUKkpWY4ISduHc57hqKJXgncqFRaC1mJ6zyBisZ4YZ00PbT91nRt"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>>>>", authUser);
      if (authUser) {
        //The user was/is already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* Header */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            {" "}
            <Header />
            <Home />
          </Route>

          {/* Body */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
