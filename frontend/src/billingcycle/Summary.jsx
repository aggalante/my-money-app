import React from "react";

import Grid from "../common/layout/Grid";
import Row from "../common/layout/Row";
import ValueBox from "../common/widgets/ValueBox";

export default ({ credit, debt }) => (
  <Grid cols="12">
    <fieldset>
      <legend>Summary</legend>
      <Row>
        <ValueBox
          cols="12 4"
          color="green"
          icon="bank"
          value={`${credit} €`}
          text="Credits"
        />
        <ValueBox
          cols="12 4"
          color="red"
          icon="credit-card"
          value={`${debt} €`}
          text="Debts"
        />
        <ValueBox
          cols="12 4"
          color="blue"
          icon="money"
          value={`${credit - debt} €`}
          text="Total"
        />
      </Row>
    </fieldset>
  </Grid>
);
