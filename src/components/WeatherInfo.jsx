import React from "react";

export default function WeatherInfo({ weather }) {
  const {
    name,
    sys,
    weather: weatherArr,
    main,
    wind,
    clouds,
  } = weather;

  return (
    <div className="sub-container user-info-container active">
      <div className="name">
        <p>{name}</p>
        <img
          src={`https://flagcdn.com/144x108/${sys?.country?.toLowerCase()}.png`}
          alt="country flag"
        />
      </div>

      <p>{weatherArr?.[0]?.description}</p>
      <img
        src={`http://openweathermap.org/img/w/${weatherArr?.[0]?.icon}.png`}
        alt="weather icon"
      />

      <p data-temp>{main?.temp} °C</p>

     <div className="w-[90%] flex justify-center items-center gap-x-5 gap-y-2 mt-20 flex-wrap">
  <div className="w-[30%] max-w-[200px] bg-white/50 rounded p-4 flex flex-col items-center gap-1">
    <img  src={`${process.env.PUBLIC_URL}/images/wind.png`} alt="wind" className="w-[50px] h-[50px]" />
    <p className="text-[1.15rem] font-semibold uppercase">Windspeed</p>
    <p className="text-base font-light">{wind?.speed} m/s</p>
  </div>

  <div className="w-[30%] max-w-[200px] bg-white/50 rounded p-4 flex flex-col items-center gap-1">
    <img src={`${process.env.PUBLIC_URL}/images/humidity.png`} alt="humidity" className="w-[50px] h-[50px]" />
    <p className="text-[1.15rem] font-semibold uppercase">Humidity</p>
    <p className="text-base font-light">{main?.humidity}%</p>
  </div>

  <div className="w-[30%] max-w-[200px] bg-white/50 rounded p-4 flex flex-col items-center gap-1">
    <img src={`${process.env.PUBLIC_URL}/images/cloud.png`}  alt="cloud" className="w-[50px] h-[50px]" />
    <p className="text-[1.15rem] font-semibold uppercase">Clouds</p>
    <p className="text-base font-light">{clouds?.all}%</p>
  </div>
</div>

    </div>
  );
}
