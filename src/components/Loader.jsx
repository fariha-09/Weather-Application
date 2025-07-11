import React from "react";

export default function Loader() {
  return (
    <div className="sub-container loading-container active">
      <img src={`${process.env.PUBLIC_URL}/images/loading.gif`} width="150" height="150" alt="loading" />
      <p>Loading</p>
    </div>
  );
}
