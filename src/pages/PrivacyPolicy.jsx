
import React from "react";
import PolicyPage from "../components/PolicyPage";
import privacyPolicyData from "../data/privacyPolicyData.json";

export default function PrivacyPolicy() {
  return <PolicyPage data={privacyPolicyData} />;
}
