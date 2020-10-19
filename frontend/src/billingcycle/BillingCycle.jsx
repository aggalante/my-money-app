import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import Tabs from "../common/tab/Tabs";
import TabsHeader from "../common/tab/TabsHeader";
import TabsContent from "../common/tab/TabsContent";
import TabHeader from "../common/tab/TabHeader";
import TabContent from "../common/tab/TabContent";
import List from "./BillingCycleList";
import Form from "./BillingCycleForm";

import { init, create, update, remove } from "./billingCycleActions";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    return (
      <div>
        <ContentHeader title="Billing cycle" small="Register" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="List" icon="bars" target="tabList" />
              <TabHeader label="Add" icon="plus" target="tabCreate" />
              <TabHeader label="Edit" icon="pencil" target="tabUpdate" />
              <TabHeader label="Delete" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <Form
                  onSubmit={this.props.create}
                  submitLabel="Add"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <Form
                  onSubmit={this.props.update}
                  submitLabel="Edit"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <Form
                  onSubmit={this.props.remove}
                  submitLabel="Delete"
                  submitClass="danger"
                  readOnly={true}
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ init, create, update, remove }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
