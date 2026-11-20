
import React from "react";
import PolicyPage from "../components/PolicyPage";
import termsData from "../data/termsData.json";

export default function TermsAndConditions() {
  return <PolicyPage data={termsData} />;
}
