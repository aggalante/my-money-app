const { ReduxFormContext } = require("redux-form");

import React from "react";

import MenuItem from "./MenuItem";
import MenuTree from "./MenuTree";

export default (props) => (
  <ul className="sidebar-menu">
    <MenuItem path="#/" label="Dashboard" icon="dashboard" />
    <MenuTree label="Register" icon="edit">
      <MenuItem path="#billingCycles" label="Billing cycles" icon="eur" />
    </MenuTree>
  </ul>
);
