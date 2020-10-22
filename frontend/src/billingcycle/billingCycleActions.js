import axios from "axios";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";

import { selectTab, showTabs } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("BillingCycleForm", INITIAL_VALUES),
  ];
}

export function create(values) {
  return submit(values, "post");
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

export function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("BillingCycleForm", billingCycle),
  ];
}

export function showDelete(billingCycle) {
  console.log("DELETE");
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("BillingCycleForm", billingCycle),
  ];
}

function submit(values, method) {
  return (dispatch) => {
    const id = values._id ? values._id : "";
    console.log(method);
    console.log(id);
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then((resp) => {
        toastr.success("Success", "Operation was successful!");
        dispatch(init());
      })
      .catch((e) => {
        e.response.data.errors.forEach((error) => toastr.error("Error", error));
      });
  };
}
