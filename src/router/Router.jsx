import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

function Router() {
  return (
    <Switch>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Switch>
  );
}

export default Router;
