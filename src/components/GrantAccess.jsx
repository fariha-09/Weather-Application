import React from "react";

export default function GrantAccess({ onGrantAccess }) {
  return (
    <div className="sub-container grant-location-container active">
      <img src={`${process.env.PUBLIC_URL}/images/location.png`} width="80" height="80" alt="location icon" loading="lazy" />
      <p>Grant Location Access</p>
      <p>Allow Access to get weather Information</p>
      <button className="btn" onClick={onGrantAccess}>Grant Access</button>
    </div>
  );
}
