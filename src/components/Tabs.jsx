import React from "react";

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      <p
        className={`tab ${activeTab === "user" ? "current-tab" : ""}`}
        onClick={() => setActiveTab("user")}
      >
        Your Weather
      </p>
      <p
        className={`tab ${activeTab === "search" ? "current-tab" : ""}`}
        onClick={() => setActiveTab("search")}
      >
        Search Weather
      </p>
    </div>
  );
}
