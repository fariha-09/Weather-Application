import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
  };

  return (
    <form className="form-container active" onSubmit={handleSubmit}>
      <input
        placeholder="Search for City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn" type="submit">
        <img src="/images/search.png" width="20" height="20" alt="search" />
      </button>
    </form>
  );
}
