
import React from "react";
import PolicyPage from "../components/PolicyPage";
import refundPolicyData from "../data/refundPolicyData.json";

export default function RefundPolicy() {
  return <PolicyPage data={refundPolicyData} />;
}
