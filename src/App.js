// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import SearchForm from "./components/SearchForm";
import GrantAccess from "./components/GrantAccess";
import Loader from "./components/Loader";
import WeatherInfo from "./components/WeatherInfo";

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function App() {
  const [activeTab, setActiveTab] = useState("user"); 
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const storedCoords = sessionStorage.getItem("user-coordinates");
    if (storedCoords) {
      const parsed = JSON.parse(storedCoords);
      setCoords(parsed);
      fetchWeatherByCoords(parsed.lat, parsed.lon);
      console.log("fetch the weather by location",fetchWeatherByCoords)
    }
  }, []);

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeatherData(data);
      console.log("weather data is",setWeatherData)
    } catch (err) {
      console.error("Error fetching coords weather:", err);
    } finally {
      setLoading(false);
    }
  };
  console.log("wether data is",weatherData);
  

const fetchWeatherByCity = async (city) => {
  setLoading(true);
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    
    if (data.cod === "404") {
      setWeatherData(null); 
      setError("City not found");
    } else {
      setWeatherData(data);
      setError(null);
    }

  } catch (err) {
    console.error("Error fetching city weather:", err);
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};



  const handleGrantAccess = () => {
    console.log("Grant Access clicked");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log("Geolocation success ✅", pos);
        const { latitude, longitude } = pos.coords;
        const userCoords = { lat: latitude, lon: longitude };
         console.log("Coordinates:", userCoords);
        sessionStorage.setItem("user-coordinates", JSON.stringify(userCoords));
        
        setCoords(userCoords);
        fetchWeatherByCoords(latitude, longitude);
      });
    } else {
      alert("Geolocation not supported");
    }
  };

  return (
    <div className="wrapper">
      <h1>Weather App</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="weather-container">
        {activeTab === "user" && !coords && (
          <GrantAccess onGrantAccess={handleGrantAccess} />
        )}

        {activeTab === "search" && (
          <SearchForm onSearch={fetchWeatherByCity} />
        )}

        {loading && <Loader />}

        {!loading && weatherData && (
          <WeatherInfo weather={weatherData} />
        )}
      </div>
      {error && (
  <div className="flex flex-col items-center mt-10">
    <img
      src={`${process.env.PUBLIC_URL}/images/not-found.png`}
      alt="not found"
      className="w-[200px] h-auto"
    />
    <p className="text-white mt-4 text-lg">{error}</p>
  </div>
)}

    </div>
  );
}

export default App;
