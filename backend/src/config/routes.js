const express = require("express");

module.exports = function (server) {
  // Base URL for all routes
  const router = express.Router();
  server.use("/api", router);

  // Billing cycle routes
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(router, "/billingCycles");
};
