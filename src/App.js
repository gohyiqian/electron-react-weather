import ReactWeather, { useOpenWeather } from "react-open-weather";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    lat: "1.3521",
    lon: "103.8198",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    <div className="App">
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Singapore"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    </div>
  );
}

export default App;
