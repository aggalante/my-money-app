import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import AuthOrApp from "./AuthOrApp";
import Dashboard from "../dashboard/Dashboard";
import Dashboard2 from "../dashboard2/Dashboard2";
import BillingCycle from "../billingcycle/BillingCycle";

export default (props) => (
  <Router history={hashHistory}>
    <Route path='/' component={AuthOrApp} />
    <Route path='/billingCycles' component={BillingCycle} />
    <Redirect from='*' to='/' />
  </Router>
);
