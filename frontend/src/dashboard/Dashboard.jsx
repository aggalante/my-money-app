import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "./dashboardActions";
import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import ValueBox from "../common/widgets/ValueBox";
import Row from "../common/layout/Row";

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    const { credit, debt } = this.props.summary;

    return (
      <div>
        <ContentHeader title="Dashboard" small="Version 1.0" />
        <Content>
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
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  summary: state.dashboard.summary,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
